var $num = $("#num");
var $name = $("#name");

var $quota_min = $("#quota_min")
var $quota_max = $("#quota_max")
var $time_min = $("#time_min")
var $time_max = $("#time_max")
var $rate_min = $("#rate_min")
var $rate_max = $("#rate_max")
// var $quota = $("#quota");
// var $time = $("#time");
// var $rate = $("#rate");
var $way = $("#way");
var $introduction = $("#introduction");
var $fee = $("#fee");
var $repayment = $("#repayment");
var $detail = $("#detail");
var $condition = $("#condition");
var $material = $("#material");
var $objInfo = $("#info");

var $re1 = /^[0-9]*$/;//验证数字
var $re2 = /^[0-9a-zA-Z\u4e00-\u9fa5]+$///中文英文数字
var $re3 = /[\u4e00-\u9fa5]///纯中文
var $re4 = /\d+-?\d*///数字加-
var $re5 = /^((\d+\.?\d*)|(\d*\.\d+))\%$///数字加- %

// $('#rich_text1').load('../../templates/admin/loanDetails/loanRich1.html');
// $('#rich_text2').load('../../templates/admin/loanDetails/loanRich2.html');
// $('#rich_text3').load('../../templates/admin/loanDetails/loanRich3.html');

//贷款编号输入信息校验
$num.blur(function () {
    if ($re1.test($num.val())) {
        $objInfo.html("贷款编号格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款编号格式输入错误").css("color", "red");
        $num.focus();
    }
});

//贷款产品输入信息校验
$name.blur(function () {
    if ($re3.test($name.val())) {
        $objInfo.html("贷款产品格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款产品格式输入错误").css("color", "red");
        $name.focus();
    }
});

//贷款额度输入信息校验
$quota_min.blur(function () {
    if ($re1.test($quota_min.val())) {
        $objInfo.html("贷款额度最小值格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款额度最小值格式输入错误").css("color", "red");
        $quota_min.focus();
    }
});

$quota_max.blur(function () {
    if ($re1.test($quota_max.val())) {
        $objInfo.html("贷款额度最大值格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款额度最大值格式输入错误").css("color", "red");
        $quota_max.focus();
    }
});

// //贷款期限输入信息校验
$time_min.blur(function () {
    if ($re1.test($time_min.val())) {
        $objInfo.html("贷款期限下限格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款期限下限格式输入错误").css("color", "red");
        $time_min.focus();
    }
});

$time_max.blur(function () {
    if ($re1.test($time_max.val())) {
        $objInfo.html("贷款期限上限格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款期限上限格式输入错误").css("color", "red");
        $time_max.focus();
    }
});

//贷款利率输入信息校验
$rate_min.blur(function () {
    if ($re5.test($rate_min.val())) {
        $objInfo.html("贷款利率下限格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款利率下限格式输入错误").css("color", "red");
        $rate_min.focus();
    }
});

$rate_max.blur(function () {
    if ($re5.test($rate_max.val())) {
        $objInfo.html("贷款利率上限格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款利率上限格式输入错误").css("color", "red");
        $rate_max.focus();
    }
});

//贷款方式输入信息校验
$way.blur(function () {
    if ($re3.test($way.val())) {
        $objInfo.html("贷款方式格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款方式格式输入错误").css("color", "red");
        $way.focus();
    }
});


//贷款简介输入信息校验
$introduction.blur(function () {
    if ($re3.test($introduction.val())) {
        $objInfo.html("贷款简介格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款简介格式输入错误").css("color", "red");
        $introduction.focus();
    }
});


//贷款费用输入信息校验
$fee.blur(function () {
    if ($re3.test($fee.val())) {
        $objInfo.html("贷款费用说明格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款费用说明格式输入错误").css("color", "red");
        $fee.focus();
    }
});

//还款费用输入信息校验
$repayment.blur(function () {
    if ($re3.test($repayment.val())) {
        $objInfo.html("贷款还款说明格式输入正确").css("color", "green");
    } else {
        $objInfo.html("贷款还款说明格式输入错误").css("color", "red");
        $repayment.focus();
    }
});


$("#add_btn").click(function () {
    
    var $num = $("#num");
    var $name = $("#name");

    var $quota_min = $("#quota_min")
    var $quota_max = $("#quota_max")
    var $time_min = $("#time_min")
    var $time_max = $("#time_max")
    var $rate_min = $("#rate_min")
    var $rate_max = $("#rate_max")

    var $way = $("#way");
    var $introduction = $("#introduction");
    var $fee = $("#fee");
    var $repayment = $("#repayment");
    // var $detail = $("#detail");
    // var $condition = $("#condition");
    // var $material = $("#material");

    if (!$re1.test($num.val()) || !$re3.test($name.val()) ||
        !$re1.test($quota_min.val()) || !$re1.test($quota_max.val()) ||
        !$re1.test($time_min.val()) || !$re1.test($time_max.val()) ||
        !$re1.test($time_max.val()) || !$re5.test($rate_min.val()) ||
        !$re5.test($rate_max.val()) || !$re2.test($way.val()) ||
        !$re3.test($introduction.val()) || !$re3.test($fee.val()) ||
        !$re3.test($repayment.val())) {
        let txt = "贷款详情信息输入错误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
        $('.ok').click(function () {
            window.location.reload();
        });

    }
    else {
        data = {}
        data.name = $("#name").val();//贷款产品
        data.quota = $("#quota").val();//贷款额度
        data.time = $("#time").val();//贷款期限
        data.rate = $("#rate").val();//利率
        data.way = $("#way").val();//还款付息方式
        data.introduction = $("#introduction").val();//简介
        data.fee = $("#fee").val();//费用说明
        data.repayment = $("#repayment").val();//还款说明
        data.quota_min = $("#quota_min").val();
        data.quota_max = $("#quota_max").val();
        data.time_min = $("#time_min").val();
        data.time_max = $("#time_max").val();
        data.rate_min = $("#rate_min").val();
        data.rate_max = $("#rate_max").val();
    
        data.detail = CKEDITOR.instances.loanRich1.getData();
        data.condition = CKEDITOR.instances.loanRich2.getData();
        data.material = CKEDITOR.instances.loanRich3.getData();

        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("/addloanPost/", data, function(data) {
            if (data == '0') {
                let txt = "新增失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                $('.ok').click(function () {
                    window.location.href = "/loanDetails/";
                });
            }
            else if (data == '1') {
                let txt = "新增成功";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
                $('.ok').click(function () {
                    window.location.href = "/loanManage/";
                });
            }
        })
    }
})


$.getScript("//cdn.ckeditor.com/4.12.1/standard/ckeditor.js", function () {
    // CKEDITOR.instances.loanRich1.setData({{ credit.detail }}); 
    // CKEDITOR.instances.loanRich2.setData({{ credit.condition }}); 
    // CKEDITOR.instances.loanRich3.setData({{ credit.material }}); 
    $("#cke_loanRich1_arialbl").html("");
    $("#cke_loanRich1_arialbl").html("详细描述");
    $("#cke_loanRich1_arialbl").css("color", "rgb(75, 130, 233)");
    $("#cke_loanRich2_arialbl").html("");
    $("#cke_loanRich2_arialbl").html("申请材料");
    $("#cke_loanRich2_arialbl").css("color", "rgb(75, 130, 233)");
    $("#cke_loanRich3_arialbl").html("");
    $("#cke_loanRich3_arialbl").html("所需文件");
    $("#cke_loanRich3_arialbl").css("color", "rgb(75, 130, 233)");

});
