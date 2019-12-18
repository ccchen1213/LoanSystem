//邮箱的校验
function isCorrectEmail_text(s) {
    var $re = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!$re.test(s)) return false;
    return true;
}

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

$("#btn").click(function () {
    if (!isCorrectEmail_text($("#firstname").val())) {
        let txt = "邮件发送失败";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function () {
            window.location.reload();
        });

    } else {
        data = {}
        data.email = $("#firstname").val();
        console.log($("#firstname").val());
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
