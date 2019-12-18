var $re1 = /^[\u4e00-\u9fa5]{1,}((·[\u4e00-\u9fa5]{1,}){0,3})$/;
var $re2 = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
var $re3 = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
var $re4 = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
var $re5 = /^([1-9]{1})(\d{15}|\d{18})$/;
var $re6 = /^1[3456789]\d{9}$/;
var $Company_Name = $("#Company_Name");
var $Credit_code = $("#Credit_code");
var $Legal_representative_name = $("#Legal_representative_name");
var $Legal_representative_id = $("#Legal_representative_id");
var $Legal_representative_card = $("#Legal_representative_card");
var $Bank_phone = $("#Bank_phone");
var $btn_submit = $("#btn_submit");
var $objInfo = $("#info");

//企业名称输入信息校验
$Company_Name.blur(function () {
    var $re = /^[\u4e00-\u9fa5]{1,}((·[\u4e00-\u9fa5]{1,}){0,3})$/;
    // if (isCorrectEmail_text($email_text_info))
    if ($re.test($Company_Name.val())) {
        $objInfo.html("企业名称格式输入正确").css("color", "green");
    } else {
        $objInfo.html("企业名称格式输入错误").css("color", "red");
        $Company_Name.focus();
    }
});

//社会信用代码输入信息校验
$Credit_code.blur(function () {
    var $re = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
    // if (isCorrectEmail_text($email_text_info))
    if ($re.test($Credit_code.val())) {
        $objInfo.html("社会信用代码格式输入正确").css("color", "green");
    } else {
        $objInfo.html("社会信用代码格式输入错误").css("color", "red");
        $Credit_code.focus();
    }
});

//法人代表姓名输入信息校验
$Legal_representative_name.blur(function () {
    var $re = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    // if (isCorrectEmail_text($email_text_info))
    if ($re.test($Legal_representative_name.val())) {
        $objInfo.html("法人代表姓名格式输入正确").css("color", "green");
    } else {
        $objInfo.html("法人代表姓名格式输入错误").css("color", "red");
        $Legal_representative_name.focus();
    }
});

//法人代表身份证输入信息校验
$Legal_representative_id.blur(function () {
    var $re = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
    // if (isCorrectEmail_text($email_text_info))
    if ($re.test($Legal_representative_id.val())) {
        $objInfo.html("法人代表身份证代码格式输入正确").css("color", "green");
    } else {
        $objInfo.html("法人代表身份证格式输入错误").css("color", "red");
        $Legal_representative_id.focus();
    }
});


//银行卡输入信息校验
$Legal_representative_card.blur(function () {
    var $re = /^([1-9]{1})(\d{15}|\d{18})$/;
    // if (isCorrectEmail_text($email_text_info))
    if ($re.test($Legal_representative_card.val())) {
        $objInfo.html("银行卡格式输入正确").css("color", "green");
    } else {
        $objInfo.html("银行卡格式输入错误").css("color", "red");
        $Legal_representative_card.focus();
    }
});

//手机号码输入信息校验
$Bank_phone.blur(function () {
    var $re = /^1[3456789]\d{9}$/;
    // if (isCorrectEmail_text($email_text_info))
    if ($re.test($Bank_phone.val())) {
        $objInfo.html("手机号码格式输入正确").css("color", "green");
    } else {
        $objInfo.html("手机号码格式输入错误").css("color", "red");
        $Bank_phone.focus();
    }
});

$(".btn_submit").click(function () {
    var $re1 = /^[\u4e00-\u9fa5]{1,}((·[\u4e00-\u9fa5]{1,}){0,3})$/;
    var $re2 = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
    var $re3 = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    var $re4 = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
    var $re5 = /^([1-9]{1})(\d{15}|\d{18})$/;
    var $re6 = /^1[3456789]\d{9}$/;
    var $Company_Name = $("#Company_Name");
    var $Credit_code = $("#Credit_code");
    var $Legal_representative_name = $("#Legal_representative_name");
    var $Legal_representative_id = $("#Legal_representative_id");
    var $Legal_representative_card = $("#Legal_representative_card");
    var $Bank_phone = $("#Bank_phone");
    var $btn_submit = $("#btn_submit");
    var $objInfo = $("#info");
    data = {};
    data.Company_Name = $("#Company_Name").val();
    data.Credit_code = $("#Credit_code").val();
    data.Legal_representative_name = $("#Legal_representative_name").val();
    data.Legal_representative_id = $("#Legal_representative_id").val();
    data.Legal_representative_card = $("#Legal_representative_card").val();
    data.Bank_phone = $("#Bank_phone").val();
    console.log(1);


    var $Company_Name = $("#Company_Name");
    var $Credit_code = $("#Credit_code");
    var $Legal_representative_name = $("#Legal_representative_name");
    var $Legal_representative_id = $("#Legal_representative_id");
    var $Legal_representative_card = $("#Legal_representative_card");
    var $Bank_phone = $("#Bank_phone");
    var $btn_submit = $("#btn_submit");
    var $objInfo = $("#info");
    if (!$re1.test($Company_Name.val()) || !$re2.test($Credit_code.val()) ||
        !$re3.test($Legal_representative_name.val()) || !$re4.test($Legal_representative_id.val()) ||
        !$re5.test($Legal_representative_card.val()) || !$re6.test($Bank_phone.val())) {
        let txt = "认证信息输入失败";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function () {
            window.location.reload();
        });
    }

    else {
        data = {};
        data.Company_Name = $("#Company_Name").val();
        data.Credit_code = $("#Credit_code").val();
        data.Legal_representative_name = $("#Legal_representative_name").val();
        data.Legal_representative_id = $("#Legal_representative_id").val();
        data.Legal_representative_card = $("#Legal_representative_card").val();
        data.Bank_phone = $("#Bank_phone").val();
        console.log(data);
        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("/sendCertification/", data, function (data) {
            if (data == '7') {
                let txt = "信息输入正确";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
                $('.ok').click(function () {
                    // window.location.reload();
                    window.location.href = "/loans/";
                });
            }

            else {
                let txt = "信息格式输入错误";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                $('.ok').click(function () {
                    window.location.reload();
                });
            }
        })
    }
})




