function Delete(id){
    // loan_username
    var txt = "确定删除？";
    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
    data={};
    data.name=id;
    $('.ok').click(function(){
        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("/personnelDelPost/", data,function (data) {
            if(data=='1'){
                console.log("1111");
                var txt = "删除成功";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
                $('.ok').click(function(){
                    window.location.reload();
                })
            }
            else{
                var txt = "删除失败";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
                $('.ok').click(function(){
                    window.location.reload();
                })
            }


        })
    });
}