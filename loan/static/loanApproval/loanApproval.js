//state = 0,1,2,3,4,5分别对应提交申请,正在审核,申请成功,拨放贷款,待还贷款,还清贷款;
let data = [
    {
        'id':'1', 'product': '阳光贷', 'money': '150', 'company':'中粮食品有限公司', 'month':'24',
        'state':'0'
    },
    {
        'id':'2', 'product': '易企贷', 'money': '100', 'company':'华腾科技有限公司', 'month':'24',
        'state':'0'
    },
    {
        'id':'3', 'product': '小微贷', 'money': '200', 'company':'海英食品有限公司', 'month':'20',
        'state':'0'
    },
    {
        'id':'4', 'product': '商通贷', 'money': '350', 'company':'嘉里有限公司', 'month':'24',
        'state':'1'
    },
    {
        'id':'5', 'product': '易企贷', 'money': '320', 'company':'得利斯有限公司', 'month':'24',
        'state':'1'
    },
    {
        'id':'6', 'product': '阳光贷', 'money': '330', 'company':'海康有限公司', 'month':'24',
        'state':'1'
    },
    {
        'id':'7', 'product': '小微贷', 'money': '100', 'company':'得利斯有限公司', 'month':'15',
        'state':'2'
    },

    {
        'id':'8', 'product': '小微贷', 'money': '100', 'company':'得利斯有限公司', 'month':'15',
        'state':'3'
    },
    {
        'id':'9', 'product': '阳光贷', 'money': '100', 'company':'海康有限公司', 'month':'24',
        'state':'3'
    },
    {
        'id':'10', 'product': '商通贷', 'money': '140', 'company':'欣邦科技有限公司', 'month':'22',
        'state':'3'
    },
    {
        'id':'11', 'product': '阳光贷', 'money': '230', 'company':'海康有限公司', 'month':'24',
        'state':'3'
    },

    {
        'id':'12', 'product': '阳光贷', 'money': '300', 'company':'梁粮食品有限公司', 'month':'12',
        'state':'4'
    },
    {
        'id':'13', 'product': '小微贷', 'money': '100', 'company':'科腾科技有限公司', 'month':'20',
        'state':'4'
    },
    {
        'id':'14', 'product': '易企贷', 'money': '300', 'company':'华新科技有限公司', 'month':'23',
        'state':'4'
    },
    {
        'id':'15', 'product': '商通贷', 'money': '450', 'company':'欣邦科技有限公司', 'month':'28',
        'state':'5'
    },
    {
        'id':'16', 'product': '易企贷', 'money': '200', 'company':'科腾科技有限公司', 'month':'26',
        'state':'5'
    },
    {
        'id':'17', 'product': '商通贷', 'money': '450', 'company':'欣邦科技有限公司', 'month':'28',
        'state':'5'
    },
    {
        'id':'18', 'product': '小微贷', 'money': '100', 'company':'焦点科技有限公司', 'month':'26',
        'state':'5'
    },
];
let state = ["提交申请","正在审核","申请成功","拨放贷款","待还贷款","还清贷款"];
// console.log(data);
let datas = new Array();

for(let i in data){
    // console.log(1);
    switch (data[i].state) {
        case '0':
            fillTable(data[i]);
            break;
        case '1':
            fillTable(data[i]);
            break;
        case '2':
            fillTable(data[i]);
            break;
        case '3':
            fillTable(data[i]);
            break;
        case '4':
            fillTable(data[i]);
            break;
        case '5':
            fillTableEnd(data[i]);
            break;

    }
}

function fillTable(datas){
    intState = parseInt(datas.state);

    let content = `
        <tr id="${datas.id}">
            <td>${datas.id}</td>
            <td><a href="/loanApprovalDetails/?id=${datas.id}" style="color:#2962ff">${datas.product}</a></td>
            <td>${datas.money}</td>
            <td>${datas.company}</td>
            <td>${datas.month}个月</td>
            <td>
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                        ${state[datas.state]}
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" onclick="pass(${datas.id})" style="text-align:center;font-size:16px">${state[intState+1]}</a>
                    </div>
                </div>
            </td>
        </tr>
    `;
    let appendclass = `.state${datas.state}`;
    $(appendclass).append(content);
}


function fillTableEnd(datas){
    let content = `
        <tr id="${datas.id}">
            <td>${datas.id}</td>
            <td><a href="/loanApprovalDetails/?id=${datas.id}">${datas.product}</a></td>
            <td>${datas.money}</td>
            <td>${datas.company}</td>
            <td>${datas.month}个月</td>
            <td>
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                       还清贷款
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" onclick="pass(${datas.id})" href="#" style="text-align:center;font-size:16px">${state[datas.state]}</a>
                    </div>
                </div>
            </td>
        </tr>
    `;
    let appendclass = `.state5`;
    $(appendclass).append(content);
}
//审批按钮

function pass(id) {

    let txt = "确定通过？";
    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
    $('.ok').click(function(){
        for (let i in data){
            if(data[i].id == id){
                data[i].state++;
                dataId = `#${data[i].id}`;
                $(dataId).css("display","none");
                fillTable(data[i])
            }
        }
    });
}