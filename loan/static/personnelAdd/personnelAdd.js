var $cname = $("#cname");
var $idcard = $("#idcard");
var $email = $("#email");
var $company = $("#company");
var $legal_name = $("#legal_name");
var $legal_id = $("#legal_id");
var $objInfo = $("#info");

var $re1 = /^[a-zA-Z0-9_-]{1,16}$/;//验证用户名
var $re2 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;//验证身份证
var $re3 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;//验证邮箱

//用户姓名输入信息校验
$cname.blur(function () {
    if ($re1.test($cname.val())) {
        $objInfo.html("用户姓名格式输入正确").css("color", "green");
    } else {
        $objInfo.html("用户姓名格式输入错误").css("color", "red");
        $cname.focus();
    }
});

//用户身份证输入信息校验
$idcard.blur(function () {
    if ($re2.test($idcard.val())) {
        $objInfo.html("用户身份证格式输入正确").css("color", "green");
    } else {
        $objInfo.html("用户身份证格式输入错误").css("color", "red");
        $idcard.focus();
    }
});

//用户邮箱输入信息校验
$email.blur(function () {
    if ($re3.test($email.val())) {
        $objInfo.html("用户邮箱格式输入正确").css("color", "green");
    } else {
        $objInfo.html("用户邮箱格式输入错误").css("color", "red");
        $email.focus();
    }
});

//贷款企业名称输入信息校验
$company.blur(function () {
    if ($re1.test($company.val())) {
        $objInfo.html("贷款企业名称输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款企业名称格式输入错误").css("color", "red");
        $company.focus();
    }
});

//法定代表人名称输入信息校验
$legal_name.blur(function () {
    if ($re1.test($legal_name.val())) {
        $objInfo.html("法定代表人名称输入正确").css("color", "green");
    } else {
        $objInfo.html("法定代表人名称格式输入错误").css("color", "red");
        $legal_name.focus();
    }
});

//法定代表人身份证号码输入信息校验
$legal_id.blur(function () {
    if ($re2.test($legal_id.val())) {
        $objInfo.html("法定代表人身份证号码输入正确").css("color", "green");
    } else {
        $objInfo.html("法定代表人身份证号码格式输入错误").css("color", "red");
        $legal_id.focus();
    }
});

$("#add_btn").click(function () {
    var $cname = $("#cname");
    var $idcard = $("#idcard");
    var $email = $("#email");
    var $company = $("#company");
    var $legal_name = $("#legal_name");
    var $legal_id = $("#legal_id");
    var $objInfo = $("#info");
    if (!$re1.test($cname.val()) || !$re2.test($idcard.val()) ||
        !$re3.test($email.val()) || !$re1.test($company.val()) ||
        !$re1.test($legal_name.val()) || !$re2.test($legal_id.val())) {

        let txt = "用户信息输入错误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function () {
            window.location.reload();
        });

    }
    else {
        data = {}
        data.cname = $("#cname").val();
        data.idcard = $("#idcard").val();
        data.email = $("#email").val();
        data.company = $("#company").val();
        data.legal_name = $("#legal_name").val();
        data.legal_id = $("#legal_id").val();
        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("/personnelAddPost/", data, function (data) {
            if (data == '0') {
                // alert('编辑失败');
                // window.location.href = "/personnelAdd/";
                let txt = "编辑失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                $('.ok').click(function () {
                    window.location.href = "/personnelAdd/";
                });
            }
            else if (data == '1') {
                // alert('编辑成功');
                // window.location.href = "/personnelManage/";
                let txt = "编辑成功";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
                $('.ok').click(function () {
                    window.location.href = "/personnelAdd/";
                });
            }
        })
    }
})