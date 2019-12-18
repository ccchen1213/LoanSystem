var $username = $("#username");
var $password = $("#password");
var $objInfo = $("#info");
var $login_btn = $("#login_btn");

var $re1 = /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/;
var $re2 = /^(\w){6,20}$///字母数字下划线;
//手机号码输入信息校验
$username.blur(function () {
    // if (isCorrectEmail_text($email_text_info))
    if ($re1.test($username.val())) {
        $objInfo.html("手机号码格式输入正确").css("color", "green");
    } else {
        $objInfo.html("手机号码格式输入错误").css("color", "red");
        $username.focus();
    }
});

//密码输入信息校验
$password.blur(function () {
    // if (isCorrectEmail_text($email_text_info))
    if ($re2.test($password.val())) {
        $objInfo.html("密码格式输入正确").css("color", "green");
    } else {
        $objInfo.html("密码码格式输入错误").css("color", "red");
        $password.focus();
    }
});

$("#login_btn").click(function () {
    if (!$re1.test($username.val())) {
        let txt = "手机号码格式错误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function () {
            window.location.reload();
        });
    }
    else if (!$re2.test($password.val())) {
        let txt = "密码格式错误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function () {
            window.location.reload();
        });
    } else {
        data = {}
        data.phone = $("#username").val();
        data.pwd = $("#password").val();
        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("/backPost/", data, function (data) {
            if (data == '0') {
                let txt = "用户名或密码错误";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                $('.ok').click(function () {
                    window.location.reload();
                });
            }
            else {
                window.location.href = "/loanManage/";
            }
        })
    }
})


