var $login_or_personal = $("#login_or_personal")

var h1 = "<div class='btn' id='login'>" + "<a href='/login/'>" + "登录" + "</a>" + "|" + "<a href='/register/'>" + "注册" + "</a>" + "</div>"

var h2 = "<div class='dropdown' style='text-align:center'>" +
    "<button type='button' class='btn dropdown-toggle' id='dropdownMenu1' data-toggle='dropdown'>" +
    "<li style=' list-style: none;'>" + "<i class='fa fa-usd fa-user-circle-o fa-2x'>" + "</i>" + "</li>" +
    "<span class='caret'>" + "</span>" +
    "</button>" +
    "<ul class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'style='text-align:center;line-height:40px;margin-left: -80px;'>" +
    "<li role='presentation'>" +
    "<a role='menuitem' tabindex='-1' href='#'style=' cursor:pointer;text-decoration: none;color: rgb(70, 70, 70);'>" + "我的贷款" + "</a>" +
    "</li>" +
    "<li role='presentation'>" +
    "<a role='menuitem' tabindex='-1' href='#'style=' cursor:pointer;text-decoration: none;color: rgb(70, 70, 70);'>" + "企业认证" + "</a>" +
    "</li>" +
    "<li role='presentation'>" +
    "<a role='menuitem' tabindex='-1' href='#'style=' cursor:pointer;text-decoration: none;color: rgb(70, 70, 70);'>" + "设置" + "</a>" +
    "</li>" +
    "<li role='presentation' class='divider'>" + "</li>" +
    "<li role='presentation'>" +
    "<a role='menuitem' tabindex='-1' href='#'style=' cursor:pointer;text-decoration: none;color: rgb(70, 70, 70);'>" + "退出登录" + "</a>" +
    "</li>" +
    "</ul>" +
    "</div>"


if (1) {
    $login_or_personal.append(h1);
}
else {
    $login_or_personal.append(h2);
}
$("#out_btn").click(function(){
    var txt = "确定退出？";
    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
    $('.ok').click(function(){
        $.ajaxSetup({
            data: {
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
        });
        $.post("/logoutPost/", function (data) {
            if(data=="1")
            window.location.href="/login/";
        })
    });
})

