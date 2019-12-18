from django.shortcuts import render
from django.utils.timezone import now
from django.views.decorators import csrf
from django.shortcuts import redirect  # 重新定向模块
import re

from loanSystem import settings
from . import models
from . import creditCode
# from . import creditModel
from django.core.mail import send_mail
import random
import json
from django.http import HttpResponse
import os
# Create your views here.


def login(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return render(request, 'user/login/login.html', msg)
    else:
        msg["login"] = 1
        return redirect('loan:home')


def aboutus(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
    else:
        msg["login"] = 1
    return render(request, 'user/aboutus/aboutus.html', msg)


def connect(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
    else:
        msg["login"] = 1
    return render(request, 'user/aboutus/connect.html', msg)


def company(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
    else:
        msg["login"] = 1
    return render(request, 'user/aboutus/company.html', msg)


def service(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
    else:
        msg["login"] = 1
    return render(request, 'user/aboutus/service.html', msg)


def home(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
    else:
        msg["login"] = 1
    return render(request, 'user/home/home.html', msg)


def loans(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
    else:
        msg["login"] = 1
    credit = models.Credit.objects.all()
    mortgage = models.Mortgage.objects.all()
    # print(credit[1].monthmin)
    return render(request, 'user/loans/loans.html',
                  {'credit': credit,
                   'mortgage': mortgage,
                   "msg": msg})


def apply(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return redirect('loan:login')
    else:
        msg["login"] = 1
    credit = models.Credit.objects.filter(id=request.GET['id'])
    print(credit)
    for x in credit:
        print(x.detail)
    return render(request, 'user/apply/apply.html',
                  {'credit': credit[0],
                   "msg": msg})


def register(request):
    return render(request, 'user/register/register.html')


def certification(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return redirect('loan:login')
    else:
        msg["login"] = 1
        customer=models.Customer.objects.get(email=request.session["user"])
        return render(request, 'user/certification/certification.html', {'msg':msg,
        'customer':customer})


def myLoan(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return redirect('loan:login')
    else:
        msg["login"] = 1
        myloan = models.Myloan.objects.all()
        return render(request, 'user/myLoan/myLoan.html',{'myloan':myloan,'msg':msg})


def personal(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return redirect('loan:login')
    else:
        msg["login"] = 1
        msg["user"] = request.session["user"]
        return render(request, 'user/personal/personal.html', msg)


# 后台的“贷款管理”
def loanManage(request):
    credit = models.Credit.objects.all()
    if request.POST:
        credit = models.Credit.objects.filter(name=request.POST['search_name'])
    return render(request, 'admin/loanManage/loanManage.html', {'credit': credit})


def loanDetails(request):
    credit = models.Credit.objects.filter(name=request.GET['id'])
    print(credit)
    for x in credit:
        print(x.detail)
    return render(request, 'admin/loanDetails/loanDetails.html', {'credit': credit[0]})


def loanDetails2(request):
    return render(request, 'admin/loanDetails2/loanDetails2.html')


def backstageLogin(request):
    return render(request, 'admin/backstageLogin/backstageLogin.html')


def loanApproval(request):
    return render(request, 'admin/loanApproval/loanApproval.html')


def loanApprovalDatas(request):
    myloan = models.Myloan.objects.all()
    return HttpResponse(myloan, status=200)


def loanApprovalDetails(request):
    request.encoding = 'utf-8'
    basic = models.Basicdata.objects.filter(id=request.GET['id'])
    finance = models.Financedata.objects.filter(id=request.GET['id'])
    legal = models.Legaldata.objects.filter(id=request.GET['id'])
    elsedata = models.Elsedata.objects.filter(id=request.GET['id'])
    return render(request, 'admin/loanApprovalDetails/loanApprovalDetails.html', {
        'basicdata': basic[0],
        'financedata': finance[0],
        'legaldata': legal[0],
        'elsedata': elsedata[0],
    })


def personnelManage(request):
    customer = models.Customer.objects.all()
    return render(request, 'admin/personnelManage/personnelManage.html', {'customer': customer})


def personnelEdit(request):
    customer = models.Customer.objects.filter(cname=request.GET['id'])
    return render(request, 'admin/personnelEdit/personnelEdit.html', {'customer': customer[0]})


def personnelAdd(request):
    return render(request, 'admin/personnelAdd/personnelAdd.html')


def certify(request):
    return render(request, 'user/certify/certify.html')


def applyForm(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return redirect('loan:login')
    else:
        msg["login"] = 1
        return render(request, 'user/apply/applyForm.html', msg)


def code():
    code = ""
    while len(code) < 5:
        code += str(random.randint(0, 10))
    return code


EMAIL_HOST = 'smtp.qq.com'
EMAIL_PORT = 25
EMAIL_HOST_USER = '413469406@qq.com'  # 你的 QQ 账号
EMAIL_HOST_PASSWORD = 'gkgcapcopbajcbcg'
EMAIL_USE_TLS = True  # 这里必须是 True，否则发送不成功
EMAIL_FROM = '413469406@qq.com'  # 你的 QQ 账号

EMAIL_FALSE = 0
EMAIL_TRUE = 1

# 发送邮件
def sendMail(request):
    request.encoding = 'utf-8'
    if request.POST:
        request.session["code"] = code()
        email_title = '发送验证码'
        email_body = '欢迎登录高老庄银行，您的验证码为'+str(request.session["code"])
        email = request.POST['email']  # 对方的邮箱
        # email='413469406@qq.com'
        send_status = send_mail(email_title, email_body, EMAIL_FROM, [email])
        if send_status:
            return HttpResponse(EMAIL_TRUE, status=200)
        else:
            return HttpResponse(EMAIL_FALSE, status=200)


# 注册逻辑
def signupPost(request):
    request.encoding = 'utf-8'
    if request.POST:
        ctx = {}
        if not re.match('^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$', request.POST['phone_email']):
            ctx["msg"] = "邮箱格式不正确"
            return render(request, "user/register/register.html", ctx)
        if not re.match('^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$', request.POST['idCard']):
            ctx["msg"] = "身份证格式不正确"
            return render(request, "user/register/register.html", ctx)
        if not re.match('^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$', request.POST['phone']):
            ctx["msg"] = "手机号格式不正确"
            return render(request, "user/register/register.html", ctx)
        if not request.POST['password'] == request.session["code"]:
            ctx["msg"] = "验证码不正确"
            return render(request, "user/register/register.html", ctx)
        else:
            add = models.Customer(email=request.POST['phone_email'], cname=request.POST['username'],
                                  idcard=request.POST['idCard'], phone=request.POST['phone'])
            add.save()
            # models.Customer.objects.create(id=null,email=request.email_text,idcard=request.idCard,phone=request.phone)
            return redirect('loan:login')


# 登录逻辑
def loginPost(request):
    request.encoding = 'utf-8'
    if request.POST:
        ctx = {}
        if not re.match('^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$', request.POST['phone_email']):
            ctx["msg"] = "邮箱格式不正确"
            return render(request, "user/login/login.html", ctx)
        if not models.Customer.objects.filter(email=request.POST['phone_email']):
            ctx["msg"] = "用户不存在"
            return render(request, "user/login/login.html", ctx)
        # if not request.POST['password'] == request.session["code"]:
        #     ctx["msg"] = "验证码不正确"
        #     return render(request, "user/login/login.html", ctx)
        else:
            request.session["user"] = request.POST['phone_email']
            return redirect('loan:home')


# 修改邮箱
def personalPost(request):
    request.encoding = 'utf-8'
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return render(request, 'user/login/login.html', msg)
    if request.POST:
        ctx = {}
        if not request.POST['code'] == request.session["code"]:
            ctx["msg"] = "验证码不正确"
            return render(request, "user/login/login.html", ctx)
        else:
            user = models.Customer.objects.get(email=request.session["user"])
            user.email = request.POST['phone_email']
            user.save()
            return render(request, 'user/personal/personal.html')


# 企业认证
COMPANY_NAME_FALSE = 0
CREDIT_ID_FALSE = 1
LEGAL_NAME_FALSE = 2
LEGAL_ID_FALSE = 3
CARD_FALSE = 4
PHONE_FALSE = 5
SQL_FAL = 6
SQL_TU = 7


def sendCertification(request):
    request.encoding = 'utf-8'
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return render(request, 'user/login/login.html', msg)

    if request.POST:
        if not re.match('^[\u4e00-\u9fa5]{1,}((·[\u4e00-\u9fa5]{1,}){0,3})$', request.POST['Company_Name']):
            return HttpResponse(COMPANY_NAME_FALSE, status=200)
        Legal_representative_name = creditCode.UnifiedSocialCreditIdentifier()
        if not Legal_representative_name.check_social_credit_code(code=request.POST['Credit_code']):
            return HttpResponse(CREDIT_ID_FALSE, status=200)
        if not re.match('^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$', request.POST['Legal_representative_name']):
            return HttpResponse(LEGAL_NAME_FALSE, status=200)
        if not re.match('^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$', request.POST['Legal_representative_id']):
            return HttpResponse(LEGAL_ID_FALSE, status=200)
        if not re.match('^([1-9]{1})(\d{15}|\d{18})$', request.POST['Legal_representative_card']):
            return HttpResponse(CARD_FALSE, status=200)
        if not re.match('^1[3456789]\d{9}$', request.POST['Bank_phone']):
            return HttpResponse(PHONE_FALSE, status=200)

        else:
            user = models.Customer.objects.get(email=request.session["user"])
            user.company = request.POST['Company_Name']
            user.credit_id = request.POST['Credit_code']
            user.legal_name = request.POST['Legal_representative_name']
            user.legal_id = request.POST['Legal_representative_id']
            user.card = request.POST['Legal_representative_card']
            user.bank_phone = request.POST['Bank_phone']
            # user.save()

            if user.save():
                return HttpResponse(SQL_FAL, status=200)
            else:
                return HttpResponse(SQL_TU, status=200)


APPLY_FIRST_FAIL = 0
APPLY_FIRST_TRUE = 1

# 贷款详情页的表单提交
def applyFirst(request):
    request.encoding = 'utf-8'
    # msg={}
    # if not request.session.get("user"):
    #     msg["login"]=0
    #     return redirect('loan:login')
    if request.method == "POST":
        money = request.POST.get("applyAmount")
        month = request.POST.get("applyMonth")
        res = {"status": '', 'message': ''}
        if (re.match('^[0-9]*$', money)) or (re.match('^[0-9]*$', month)):
            return HttpResponse(APPLY_FIRST_TRUE, status=200)
        else:
            return HttpResponse(APPLY_FIRST_FAIL, status=200)


def send(request):
    os.system("python lastmodel.py")


#人员删除
def personnelDelPost(request):
    if models.Customer.objects.filter(cname=request.POST['name']).delete():
        return HttpResponse(SQL_TURE, status=200)
    else:
        return HttpResponse(SQL_FALSE, status=200)


def sidebar(request):
    request.encoding = 'utf-8'
    return render(request, 'admin/sidebar.html')


def page_error(request):
    timenow = now()
    timenow.replace(' ',)
    print(timenow)
    return render(request, 'errorPages/500.html', status=500)


def page_not_found(request):
    return render(request, 'errorPages/404.html', status=404)


GET_FILE_FAIL = 0
GET_FILE_TRUE = 1


def applyFiles(request):
    request.encoding = 'utf-8'
    return HttpResponse(GET_FILE_TRUE)


SQL_FALSE = 0
SQL_TURE = 1
# 贷款详情编辑
def loanDetailsPost(request):
    if request.POST:
        credit = models.Credit.objects.get(id=request.POST['num'])
        credit.name = request.POST['name']
        credit.way = request.POST['way']
        credit.detail = request.POST['detail']
        credit.else_field = request.POST['fee']
        credit.advance = request.POST['repayment']
        credit.info = request.POST['introduction']
        credit.condition = request.POST['condition']
        credit.material = request.POST['material']
        credit.amountmin = request.POST['quota_min']
        credit.amountmax = request.POST['quota_max']
        credit.monthmin = request.POST['time_min']
        credit.monthmax = request.POST['time_max']
        credit.monthirmin = request.POST['rate_min']
        credit.monthirmax = request.POST['rate_max']

        if credit.save():
            return HttpResponse(SQL_FALSE, status=200)
        else:
            return HttpResponse(SQL_TURE, status=200)


# 管理端退出登录
def backLogoutPost(request):
    if request.POST:
        request.session.flush()
        return HttpResponse(1, status=200)


# 贷款详情新增
def addloanPost(request):
    request.encoding = 'utf-8'
    if request.POST:
        add = models.Credit(name=request.POST['name'], way=request.POST['way'], detail=request.POST['detail'], else_field=request.POST['fee'], advance=request.POST['repayment'],
                            info=request.POST['introduction'], condition=request.POST['condition'], material=request.POST['material'],
                            amountmin=request.POST['quota_min'], amountmax=request.POST[
                                'quota_max'], monthmin=request.POST['time_min'],
                            monthmax=request.POST['time_max'], monthirmin=request.POST['rate_min'], monthirmax=request.POST['rate_max'])
        if add.save():
            return HttpResponse(SQL_FALSE, status=200)
        else:
            return HttpResponse(SQL_TURE, status=200)


# 人员详情编辑
def personnelEditPost(request):
    if request.POST:
        customer = models.Customer.objects.get(cname=request.POST['cname'])
        customer.cname = request.POST['cname']
        customer.idcard = request.POST['idcard']
        customer.email = request.POST['email']
        customer.company = request.POST['company']
        customer.legal_name = request.POST['legal_name']
        if customer.save():
            return HttpResponse(SQL_FALSE, status=200)
        else:
            return HttpResponse(SQL_TURE, status=200)


# 人员详情新增
def personnelAddPost(request):
    request.encoding = 'utf-8'
    if request.POST:
        add = models.Customer(cname=request.POST['cname'], idcard=request.POST['idcard'],
                              email=request.POST['email'], company=request.POST['company'], legal_name=request.POST['legal_name'])
        if add.save():
            return HttpResponse(SQL_FALSE, status=200)
        else:
            return HttpResponse(SQL_TURE, status=200)


# 用户端退出登录
def logoutPost(request):
    if request.POST:
        request.session.flush()
        return HttpResponse(1, status=200)


# 管理员登录
def backPost(request):
    if request.POST:
        if not models.Admin.objects.filter(phone=request.POST['phone'], pwd=request.POST["pwd"]):
            return HttpResponse(0, status=200)
        else:
            request.session["admin"] = request.POST['phone']
            return HttpResponse(1, status=200)


# 贷款审批页提交
def loanPost(request):
    if request.POST:
        myloan = models.Myloan.objects.get(id=request.GET['id'])
        myLoan.status = 2
        if myLoan.save():
            return HttpResponse(SQL_FALSE, status=200)
        else:
            return HttpResponse(SQL_TURE, status=200)

#信用评级
def credit(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return redirect('loan:login')
    else:
        msg["login"] = 1
        customer=models.Customer.objects.filter(email=request.session["user"])
        msg['code']=customer[0].rank
        # return render(request, 'user/personal/credit.html', {'msg':msg,'customer':customer[0]})
        return render(request, 'user/personal/credit.html', msg)


#信用评价提交
def creditRankPost(request):
    msg = {}
    if not request.session.get("user"):
        msg["login"] = 0
        return redirect('loan:login')
    else:
        msg["login"] = 1
    if request.POST:
        customer=models.Customer.objects.get(email=request.session["user"])
        customer.rank=1
        customer.save()
        return redirect('loan:credit')
