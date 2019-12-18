var $btn = $("#btn");
var $email_text = $("#email_text");
var $objInfo = $("#info");


//邮箱的校验
function isCorrectEmail_text(s) {
    var $re = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!$re.test(s)) return false;
    return true;
}

//邮箱输入信息校验
$email_text.blur(function() {
    // console.log("1");
    var $email_text_info = $email_text.val();
    if (isCorrectEmail_text($email_text_info)) {
        $objInfo.html("邮箱格式输入正确").css("color", "green");
    } else {
        $objInfo.html("邮箱格式输入错误").css("color", "red");
        $email_text.focus();
    }
});


$('#btn').click(function () {
    var count = 30;
    var countdown = setInterval(CountDown, 500);
    function CountDown() {
        $("#btn").attr("disabled", true);
        $("#btn").val( count + " seconds!");
        $("#btn").css({'background-color':'#0b76d3'})
        $("#btn").css({'color':'white'})
        if (count == 0) {
            $("#btn").val("发送验证码").removeAttr("disabled");
            clearInterval(countdown);
            $("#btn").css({'background-color':'#ebebeb'})
            $("#btn").css({'color':'#696969'})
        }
        count--;
    }
})

$("#btn").click(function() {
    if (!isCorrectEmail_text($("#email_text").val())) {
        let txt = "信息错误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function(){
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
        $.post("/sendMail/", data, function(data) {
            if (data == '0') {
                let txt = "邮件发送失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                $('.ok').click(function(){
                    window.location.reload();
                });
            }
        })
    }
})


