//侧边栏
$.sidebarMenu = function (menu) {
  var animationSpeed = 300;

  //下拉菜单
  $(menu).on('click', 'li a', function (e) {
    var $this = $(this);
    var checkElement = $this.next();

    //选中菜单
    if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function () {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
    }

    //选中按钮
    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
      var parent = $this.parents('ul').first();
      var ul = parent.find('ul:visible').slideUp(animationSpeed);
      ul.removeClass('menu-open');
      var parent_li = $this.parent("li");
      checkElement.slideDown(animationSpeed, function () {
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }

    //下拉下来的菜单
    if (checkElement.is('.treeview-menu')) {
      e.preventDefault();
    }

  });
}
