var $email_text = $("#email_text");
var $idCard = $("#idCard");
var $phone = $("#phone");
var $objInfo = $("#info");
var $username = $("#username");
// 注册按钮
var $btn_register = $("#btn_register");

//邮箱的校验
function isCorrectEmail_text(s) {
    var $re = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!$re.test(s)) return false;
    return true;
}

//身份证的校验
function isCorrectIdCard(s) {
    var $re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!$re.test(s)) return false;
    return true;
}

//手机号码的校验
function isCorrectPhone(s) {
    var $re = /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/;
    if (!$re.test(s)) return false;
    return true;
}

//姓名校验
function isCorrectUsername(s) {
    var $re = /^[\u4E00-\u9FA5]{2,4}$/;
    if (!$re.test(s)) return false;
    return true;
}

//邮箱输入信息校验
$email_text.blur(function () {
    // console.log("1");
    var $email_text_info = $email_text.val();
    if (isCorrectEmail_text($email_text_info)) {
        $objInfo.html("邮箱格式输入正确").css("color", "green");
    } else {
        $objInfo.html("邮箱格式输入错误").css("color", "red");
        $email_text.focus();
    }
});


//身份证输入信息校验
$idCard.blur(function () {
    // console.log("1");
    var $idCard_info = $idCard.val();
    if (isCorrectIdCard($idCard_info)) {
        $objInfo.html("身份证格式输入正确").css("color", "green");
    } else {
        $objInfo.html("身份证格式输入错误").css("color", "red");
        $idCard.focus();
    }
});

//手机号码输入信息校验
$phone.blur(function () {
    // console.log("1");
    var $phone_info = $phone.val();
    if (isCorrectPhone($phone_info)) {
        $objInfo.html("手机号码格式输入正确").css("color", "green");
    } else {
        $objInfo.html("手机号码格式输入错误").css("color", "red");
        $phone.focus();
    }
});

//手机号码输入信息校验
$username.blur(function () {
    // console.log("1");
    var $username_info = $username.val();
    if (isCorrectUsername($username_info)) {
        $objInfo.html("姓名格式输入正确").css("color", "green");
    } else {
        $objInfo.html("姓名格式输入错误").css("color", "red");
        $username.focus();
    }
});

$("#btn").click(function () {
    if (!isCorrectEmail_text($("#email_text").val())) {
        let txt = "邮件格式错误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function () {
            window.location.reload();
        });

    } else {
        data = {}
        data.email = $("#email_text").val();
        console.log($("#email_text").val());
        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("http://127.0.0.1:8000/sendMail/", data, function (data) {
            if (data == '0') {
                let txt = "邮件发送失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                $('.ok').click(function () {
                    window.location.reload();
                });

            }
        })
    }
})

$('#btn').click(function () {
    var count = 30;
    var countdown = setInterval(CountDown, 500);
    function CountDown() {
        $("#btn").attr("disabled", true);
        $("#btn").val(count + " seconds!");
        $("#btn").css({ 'background-color': '#0b76d3' })
        $("#btn").css({ 'color': 'white' })
        if (count == 0) {
            $("#btn").val("发送验证码").removeAttr("disabled");
            clearInterval(countdown);
            $("#btn").css({ 'background-color': '#ebebeb' })
            $("#btn").css({ 'color': '#696969' })
        }
        count--;
    }
})
