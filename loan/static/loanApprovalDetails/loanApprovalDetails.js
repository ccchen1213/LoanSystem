//审批按钮
$("#Approved_btn").click(function () {

    $.post("/loanPost/", function (data) {
        if (data == '1') {
            let txt = "审批通过";
            window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
            $('.ok').click(function () {
                window.location.href = '/loanApproval/';
            });
        }

        else {
            let txt = "提交失败";
            window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
            $('.ok').click(function () {
                window.location.reload();
            });
        }

    })
});

// 审批不通过按钮
$("#Approved_no_btn").click(function () {
    let txt = "提交成功";
    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
    $('.ok').click(function () {
        window.location.href = '/loanApproval/';
    });
})