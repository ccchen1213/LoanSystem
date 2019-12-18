//state = 0,1,2,3,4,5分别对应提交申请,正在审核,申请成功,拨放贷款,待还贷款,还清贷款;
let state = ["提交申请", "正在审核", "申请成功", "拨放贷款", "待还贷款", "还清贷款"];

let datas = new Array();

// 遍历所有数据，分类给不同函数
for (let i in data) {
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

// 将数据填充到表格中
function fillTable(datas) {
    // 转化为整数
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
                        <a class="dropdown-item" onclick="pass(${datas.id})" style="text-align:center;font-size:16px">${state[intState + 1]}</a>
                    </div>
                </div>
            </td>
        </tr>
    `;

    // 填充到content中
    let appendclass = `.state${datas.state}`;
    $(appendclass).append(content);
}

// 最后一个表格的数据填充
function fillTableEnd(datas) {

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


// 审批按钮
// 点击通过将id和状态传给后端
function pass(id) {

    let txt = "确定通过？";
    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.confirm);
    $('.ok').click(function () {
        for (let i in data) {
            if (data[i].id == id) {
                data[i].state++;
                dataId = `#${data[i].id}`;
                $(dataId).css("display", "none");
                fillTable(data[i])
            }
        }
    });
}