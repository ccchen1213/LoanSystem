let nameInput = $("#companyName");
let codeInput = $("#creditCode");

let flagOne = [false,false,false,false,false];
let flagTwo = [false,false,false];
let flagThree = [false,false];
let flagFour = [false,false,false];

if($("#stepOne").hasClass("active")){
    console.log(222);
    $("#stepTwo").addClass("disabled");
    $("#stepThree").addClass("disabled");
    $("#stepFour").addClass("disabled");
};

if($("#stepTwo").hasClass("active")){
    console.log(222);
    $("#stepThree").addClass("disabled");
    $("#stepFour").addClass("disabled");
};

if($("#stepThree").hasClass("active")){
    console.log(222);
    $("#stepFour").addClass("disabled");
};


nameInput.blur(function nameCheck() {
    if(nameInput.val() == null || nameInput.val() == ""){
        nameInput.css("border","1px #f00 solid");
        $("#nameHint").html("企业名称不能为空").css("color","red");
        flagOne[0] = false;
    }
    else{
        nameInput.css("border","1px #0f0 solid");
        $("#nameHint").html("");
        flagOne[0] = true;
    }
});

codeInput.blur(function codeCheck() {
    if(codeInput.val() == null || codeInput.val() == ""){
        codeInput.css("border","1px #f00 solid");
        $("#codeHint").html("社会信用代码不能为空").css("color","red");
        flagOne[1] = false;
    }
    else if(codeInput.val().length != 18){
        codeInput.css("border","1px #f00 solid");
        $("#codeHint").html("社会信用代码错误");
        flagOne[1] = false;
    }
    else{
        codeInput.css("border","1px #0f0 solid");
        $("#codeHint").html("");
        flagOne[1] = true;
    }
});

// 限制文件大小5M
function checkfile(size,i,formNum) {
    let hint = '';
    switch (formNum) {
        case 1:
            hint = `#${baseRes[i]}Hint`;
            break;
        case 2:
            hint = `#${financeRes[i]}Hint`;
            break;
        case 3:
            hint = `#${representRes[i]}Hint`;
            break;
        case 4:
            hint = `#${othersRes[i]}Hint`;
            break;
    }

    const isLt2M = size / 1024 / 1024 < 5;
    if(size == "" || size == null || size == 0){
        $(hint).html("文件未上传");
        $(hint).css("color","#f00");
        // message.error('文件超过5M限制，请重新上传');
        return false;
    }
    if (!isLt2M) {
        $(hint).html("文件超过5M限制，请重新上传");
        $(hint).css("color","#f00");
        return false;
    }
    else{
        $(hint).html("文件上传成功");
        $(hint).css("color","#0f0");
        return true;
    }
}

//存储所有数据的数组
let allDatas = new Array();

//基础材料(第一个表单)的id、name名称
let baseRes = ['companyName','creditCode','license','taxRegist','companyRight'];

//基础材料(第一个表单)校验及跳转
$("#nextStep1").click(function () {
    //由于是第一步 所有的文件需要重新上传 所以将总数据清空 重新存储
    allDatas = [];
    let datas = new Array();
    let form = document.getElementById("companyForm");
    let formdata = new FormData(form);

    //将form中的值传到添加到datas中
    for(let i in baseRes) {
        datas[i] = formdata.get(baseRes[i]);
    }

    // 校验文件大小
    for(let i = 2; i < 5; i++){
        if(checkfile(datas[i].size,i,1)){
            flagOne[i] = true;
        }
    }
    console.log(flagOne);

    if(flagOne[0] == true && flagOne[1] == true && flagOne[2] == true
        && flagOne[3] == true && flagOne[4] == true){

        allDatas.push(datas);

        $("#step1").addClass("fade");
        $("#step1").removeClass("active");
        $("#step2").addClass("active");
        $("#step2").addClass("show");
        $("#stepOne").removeClass("active");
        $("#stepTwo").addClass("active");
    }
    else{
        let txt = "信息有误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
    }

});

let financeRes = ['finance','assets','companyCredit'];

//财务资料(第二个表单)校验及跳转
$("#nextStep2").click(function () {
    let datas = new Array();
    let form2 = document.getElementById("financeForm");
    let formdata = new FormData(form2);

    //将form中的值传到添加到datas中
    for(let i in financeRes) {
        datas[i] = formdata.get(financeRes[i]);
    }

    // 校验文件大小
    for(let i = 0; i < 3; i++){
        if(checkfile(datas[i].size,i,2)){
            flagTwo[i] = true;
        }
    }
    console.log(flagTwo);

    if(flagTwo[0] == true && flagTwo[1] == true && flagTwo[2] == true){
        allDatas.push(datas);

        $("#step2").addClass("fade");
        $("#step2").removeClass("active");
        $("#step3").addClass("active");
        $("#step3").addClass("show");
        $("#stepTwo").removeClass("disabled");
        $("#stepTwo").removeClass("active");
        $("#stepThree").addClass("active");
    }
    else{
        let txt = "信息有误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
    }

});


let representRes = ['personRight','personFile'];
// 个人资料上传表单
$("#nextStep3").click(function () {
    let datas = new Array();
    let form = document.getElementById("representForm");
    let formdata = new FormData(form);

    //将form中的值传到添加到datas中
    for(let i in representRes) {
        datas[i] = formdata.get(representRes[i]);
    }

    // 校验文件大小
    for(let i = 0; i < 2; i++){
        if(checkfile(datas[i].size,i,3)){
            flagThree[i] = true;
        }
    }
    console.log(flagThree);

    if(flagThree[0] == true && flagThree[1] == true
    ){
        allDatas.push(datas);

        $("#step3").addClass("fade");
        $("#step3").removeClass("active");
        $("#step4").addClass("active");
        $("#step4").addClass("show");
        $("#stepThree").removeClass("disabled");
        $("#stepThree").removeClass("active");
        $("#stepFour").addClass("active");
    }
    else{
        let txt = "信息有误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
    }


});

let othersRes = ['loanFor','guarantor','natural'];
//最后汇总和提交
$("#submit").click(function () {
    let datas = new Array();
    let form = document.getElementById("otherForm");
    let formdata = new FormData(form);

    //将form中的值传到添加到datas中
    for(let i in othersRes) {
        datas[i] = formdata.get(othersRes[i]);
    }

    // 校验文件大小
    for(let i = 0; i < 3; i++){
        if(checkfile(datas[i].size,i,4)){
            flagFour[i] = true;
        }
    }
    console.log(flagFour);

    if(flagFour[0] == true && flagFour[1] == true && flagFour[2] == true) {
        allDatas.push(datas);

        console.log(allDatas);
        let sendData = {
            'companyName': allDatas[0][0],

        };
        let sendFormData = new FormData();
        sendFormData.append('companyName',allDatas[0][0]);
        sendFormData.append('creditCode', allDatas[0][1]);
        sendFormData.append('license', allDatas[0][2].files);
        sendFormData.append('taxRegist', allDatas[0][3]);
        sendFormData.append('companyRight',allDatas[0][4]);
        sendFormData.append('finance',allDatas[1][0]);
        sendFormData.append('assets',allDatas[1][1]);
        sendFormData.append('companyCredit',allDatas[1][2]);
        sendFormData.append('personRight',allDatas[2][0]);
        sendFormData.append('personFile',allDatas[2][1]);
        sendFormData.append('loanFor',allDatas[3][0]);
        sendFormData.append('guarantor',allDatas[3][1]);
        sendFormData.append('natural',allDatas[3][2]);

        console.log(sendFormData);

        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.ajax({
            type:'POST',
            url:"/applyFiles/",
            processData:false,
            contentType:false,
            dataType:"json",
            data: sendFormData,
            success: function (res) {
                if (res == '1') {
                    let txt = "提交成功";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
                    $('.ok').click(function(){
                        window.location.href="/myLoan/";
                    });
                }
                else {
                    let txt = "提交失败";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                    // $('.ok').click(function(){
                    //     window.location.reload();
                    // });
                }
            },
            error:function () {
                let txt = "提交失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                // $('.ok').click(function(){
                //     window.location.reload();
                // });
            }
        })
    }
    else{
        let txt = "信息有误";
        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
    }


});

