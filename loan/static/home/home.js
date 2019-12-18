/**
 * Created by changwang.song on 2017/12/26.
 */
let money=0;

function extend(obj1, obj2) {
    for (var attr in obj2) {
        obj1[attr] = obj2[attr];
    }
}
function SetStep(arg) {
    this.body = document.body;
    this.opt = {
        show: false,
        content: '.stepCont',
        pageCont: '.pageCont',
        imgWidth: 20,
        stepContainerMar: 20,
        nextBtn: '.nextBtn',
        prevBtn: '.prevBtn',
        steps: ['1W', '25W', '50W', '75W', '100W'],
        //pageClass:'',//分页的类或则id
        stepCounts: 3,//总共的步骤数
        curStep: 1,//当前显示第几页
        animating: false,
        showBtn: true,//是否生成上一步下一步操作按钮
        clickAble: true,//是否可以通过点击进度条的节点操作进度
        onLoad: function () {

        }
    }
    this.init(arg)
}
//初始化 生成页面的进度条和按钮
SetStep.prototype.init = function (arg) {
    var _that = this;
    extend(this.opt, arg);
    this.opt.stepCounts = this.opt.steps.length;
    this.content = $(this.opt.content);
    this.pageCont = this.content.find(this.opt.pageCont)
    var w_con = $(this.content).width();
    var w_li = (w_con - this.opt.stepContainerMar * 2) / this.opt.stepCounts / 2;
    var stepContainer = this.content.find('.ystep-container');
    this.stepContainer = stepContainer;
    var stepsHtml = $("<ul class='ystep-container-steps'></ul>");
    var stepDisc = "<li class='ystep-step ystep-step-undone'></li>";
    var stepP = $("<div class='ystep-progress'>" +
        "<p class='ystep-progress-bar'><span class='ystep-progress-highlight' style='width:0%'></span></p>" +
        "</div>");

    var stepButtonHtml = $("<div class='step-button'><button type='button' class='btn btn-default prevBtn' id='prevBtn' class='prevBtn'>上一步</button>" +
        "<button type='button' class='btn btn-default nextBtn' id='nextBtn' class='nextBtn'>下一步</button></div>");
    stepP.css('width', w_li * 2 * (this.opt.stepCounts - 1));
    stepP.find('.ystep-progress-bar').css('width', w_li * 2 * (this.opt.stepCounts - 1))
    for (var i = 0; i < this.opt.stepCounts; i++) {
        if (i == 0) {
            var _s = $(stepDisc).text(this.opt.steps[i]).addClass('')

        } else {
            var _s = $(stepDisc).text(this.opt.steps[i])
        }
        stepsHtml.append(_s);
    }
    stepsHtml.find('li').css('width', '40px').css('marginRight', w_li * 2 - 40)
    stepContainer.append(stepsHtml).append(stepP);

    stepContainer.css('left', (w_con - stepP.width() - this.opt.imgWidth - 10 - this.opt.stepContainerMar * 2) / 2)
    this.content.css('overflow', 'hidden')
    this.setProgress(this.stepContainer, this.opt.curStep, this.opt.stepCounts)
    //判断参数 是否显示按钮 并绑定点击事件
    if (this.opt.showBtn) {
        this.content.append(stepButtonHtml)
        this.prevBtn = this.content.find(this.opt.prevBtn)
        this.nextBtn = this.content.find(this.opt.nextBtn)
        this.prevBtn.on('click', function () {
            // if($(this).hasClass('handleAble')){
            if ($(_that).attr('disabled') || _that.opt.animating) {
                return false;
            } else {
                _that.opt.animating = true;
                _that.opt.curStep--;
                _that.setProgress(_that.stepContainer, _that.opt.curStep, _that.opt.stepCounts)
            }
        })
        this.nextBtn.on('click', function () {
            // if($(this).hasClass('handleAble')){
            if ($(_that).attr('disabled') || _that.opt.animating) {
                return false;
            } else {
                _that.opt.animating = true;
                _that.opt.curStep++;
                _that.setProgress(_that.stepContainer, _that.opt.curStep, _that.opt.stepCounts)
            }
        })
    }
    //判断时候可点击进度条 并绑定点击事件
    if (this.opt.clickAble) {
        stepsHtml.find('li').on('click', function () {
            _that.opt.curStep = $(this).index() + 1;
            _that.setProgress(_that.stepContainer, _that.opt.curStep, _that.opt.stepCounts)
        })
    }
    $(window).resize(function () {
        var w_con = $(_that.content).width();
        var w_li = w_con / _that.opt.stepCounts / 2;
        stepP.css('width', w_li * 2 * (_that.opt.stepCounts - 1));
        stepP.find('.ystep-progress-bar').css('width', w_li * 2 * (_that.opt.stepCounts - 1))
        stepsHtml.find('li').css('width', '40px').css('marginRight', w_li * 2 - 40)
        stepContainer.css('left', (w_con - stepP.width() - _that.opt.imgWidth - 10 - _that.opt.stepContainerMar * 2) / 2)
    })
}
//设置进度条
SetStep.prototype.setProgress = function (n, curIndex, stepsLen) {
    var _that = this;
    //获取当前容器下所有的步骤
    var $steps = $(n).find("li");
    var $progress = $(n).find(".ystep-progress-highlight");
    //判断当前步骤是否在范围内
    if (1 <= curIndex && curIndex <= $steps.length) {
        //更新进度
        var scale = "%";
        scale = Math.round((curIndex - 1) * 100 / ($steps.length - 1)) + scale;
        $progress.animate({
            width: scale
        }, {
            speed: 1000,
            done: function () {
                //移动节点
                $steps.each(function (j, m) {
                    var _$m = $(m);
                    var _j = j + 1;
                    if (_j < curIndex) {
                        _$m.attr("class", "ystep-step-done");
                    } else if (_j === curIndex) {
                        _$m.attr("class", "ystep-step-active");
                        console.log(_j);
                        //计算器
                       $(".time_btn").click = calculate(_j);
                       money=_j;

                    } else if (_j > curIndex) {
                        _$m.attr("class", "ystep-step-undone");
                    }
                })
                if (_that.opt.showBtn) {
                    if (curIndex == 1) {
                        _that.prevBtn.attr('disabled', 'true')
                        _that.nextBtn.removeAttr('disabled')
                    } else if (curIndex == stepsLen) {
                        _that.prevBtn.removeAttr('disabled')
                        _that.nextBtn.attr('disabled', 'true')
                    } else if (1 < curIndex < stepsLen) {
                        _that.prevBtn.removeAttr('disabled')
                        _that.nextBtn.removeAttr('disabled')
                    }
                }
                _that.checkPage(_that.pageCont, _that.opt.curStep, _that.opt.stepCounts)
                _that.opt.animating = false;
            }
        });
    } else {
        return false;
    }
}
//改变 分页显示
SetStep.prototype.checkPage = function (pageCont, curStep, steps) {
    for (var i = 1; i <= steps; i++) {
        if (i === curStep) {
            pageCont.find('#page' + i).css("display", "block");
        } else {
            pageCont.find('#page' + i).css("display", "none");
        }
    }
}
var step1 = new SetStep({
    content: '.stepCont1',
    showBtn: false,
})
var step2 = new SetStep({
    content: '.stepCont2',
    clickAble: false
})
var step3 = new SetStep({
    content: '.stepCont3'
})

// 月份按钮的css样式改变
function dj(dom) {
    var collection = $(".time_btn");
    $.each(collection, function () {
        $(this).removeClass("shining");
    });
    $(dom).addClass("shining");
}
$(".time_btn").click = dj(this);
// });

// $("#three").click(function () {
//     return 3
// })
// $("#six").click(function () {
//     var month_value = $("#six").val();
//     return month_value;
// })
// $("#nine").click(function () {
//     var month_value = $("#nine").val();
//     return month_value;
// })
// $("#twelve").click(function () {
//     var month_value = $("#twelve").val();
//     return month_value;
// })


// $("#twelve").click()=month3();
// var interest
var cost;//成本
var interest;//利息
var Total_repayment;//还款总额

function calculate(j_value) {

    if(j_value==1){
        cost=10000
    }
    else{
        cost = (j_value - 1) * 250000
    }
    
    $("#three").click(function(){
        interest= cost * 0.0055 * 3;
        Total_repayment = cost + interest;
        $("#cost").html(cost);
        $("#interest").html(interest);
        $("#Total_repayment").html(Total_repayment);
    });
    
    $("#six").click(function(){
        interest= cost * 0.0055 * 6;
        Total_repayment = cost + interest;
        $("#cost").html(cost);
        $("#interest").html(interest);
        $("#Total_repayment").html(Total_repayment);
       
    });
    $("#nine").click(function(){
        interest= cost * 0.0055 * 9;
        Total_repayment = cost + interest;
        $("#cost").html(cost);
        $("#interest").html(interest);
        $("#Total_repayment").html(Total_repayment);
        
    });
    $("#twelve").click(function(){
        interest= cost * 0.0055 * 12;
        Total_repayment = cost + interest;
        $("#cost").html(cost);
        $("#interest").html(interest);
        $("#Total_repayment").html(Total_repayment);
    });
    // $("#cost").html(cost);
    // $("#interest").html(interest);
    // $("#Total_repayment").html(Total_repayment);
}




