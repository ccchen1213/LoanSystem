# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Accountant(models.Model):
    ano = models.CharField(primary_key=True, max_length=8)
    dno = models.CharField(max_length=8)
    aname = models.CharField(max_length=20)
    sex = models.CharField(max_length=2)

    class Meta:
        managed = False
        db_table = 'accountant'


class Admin(models.Model):
    phone = models.CharField(max_length=50, blank=True, null=True)
    pwd = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'admin'


class Amount(models.Model):
    ano = models.CharField(primary_key=True, max_length=8)
    cno = models.CharField(max_length=8)
    ino = models.CharField(max_length=8)
    sum = models.CharField(max_length=8)

    class Meta:
        managed = False
        db_table = 'amount'
        unique_together = (('ano', 'cno'),)


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group_id = models.IntegerField()
    permission_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group_id', 'permission_id'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type_id = models.IntegerField()
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type_id', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user_id = models.IntegerField()
    group_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user_id', 'group_id'),)


class AuthUserUserPermissions(models.Model):
    user_id = models.IntegerField()
    permission_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user_id', 'permission_id'),)


class Basicdata(models.Model):
    companyname = models.CharField(db_column='companyName', max_length=20,
                                   blank=True, null=True)  # Field name made lowercase.
    code = models.CharField(max_length=20, blank=True, null=True)
    license = models.CharField(max_length=50, blank=True, null=True)
    taxregist = models.CharField(db_column='taxRegist', max_length=50, blank=True, null=True)  # Field name made lowercase.
    companyright = models.CharField(db_column='companyRight', max_length=50, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'basicdata'


class Credit(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    info = models.CharField(max_length=500, blank=True, null=True)
    amountmin = models.IntegerField(db_column='amountMin', blank=True, null=True)  # Field name made lowercase.
    amountmax = models.IntegerField(db_column='amountMax', blank=True, null=True)  # Field name made lowercase.
    monthmin = models.IntegerField(db_column='monthMin', blank=True, null=True)  # Field name made lowercase.
    monthmax = models.IntegerField(db_column='monthMax', blank=True, null=True)  # Field name made lowercase.
    monthirmin = models.CharField(db_column='monthIrMin', max_length=50, blank=True, null=True)  # Field name made lowercase.
    monthirmax = models.CharField(db_column='monthIrMax', max_length=11, blank=True, null=True)  # Field name made lowercase.
    way = models.CharField(max_length=11, blank=True, null=True)
    else_field = models.CharField(max_length=50, blank=True, null=True)
    advance = models.CharField(max_length=50, blank=True, null=True)
    detail = models.CharField(max_length=1000, blank=True, null=True)
    condition = models.CharField(max_length=1000, blank=True, null=True)
    material = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'credit'


class Creditofficer(models.Model):
    cono = models.CharField(primary_key=True, max_length=8)
    coname = models.CharField(max_length=20)
    sex = models.CharField(max_length=2)
    dname = models.CharField(max_length=20)
    tel = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'creditofficer'


class Customer(models.Model):
    cno = models.AutoField(primary_key=True)
    cname = models.CharField(max_length=20, blank=True, null=True)
    c_addr = models.CharField(max_length=20, blank=True, null=True)
    money = models.BigIntegerField(blank=True, null=True)
    idcard = models.CharField(max_length=18)
    is_loan = models.CharField(max_length=2, blank=True, null=True)
    level = models.CharField(max_length=2, blank=True, null=True)
    dno = models.CharField(max_length=8, blank=True, null=True)
    lno = models.CharField(max_length=8, blank=True, null=True)
    ino = models.CharField(max_length=8, blank=True, null=True)
    cono = models.CharField(max_length=8, blank=True, null=True)
    eap = models.CharField(max_length=8, blank=True, null=True)
    email = models.CharField(max_length=40)
    phone = models.CharField(max_length=40, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    credit_id = models.CharField(max_length=100, blank=True, null=True)
    legal_name = models.CharField(max_length=20, blank=True, null=True)
    legal_id = models.CharField(max_length=50, blank=True, null=True)
    card = models.CharField(max_length=50, blank=True, null=True)
    bank_phone = models.CharField(max_length=50, blank=True, null=True)
    rank = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'customer'


class Department(models.Model):
    dno = models.CharField(primary_key=True, max_length=8)
    dname = models.CharField(max_length=20)
    tel = models.CharField(max_length=11, blank=True, null=True)
    d_addr = models.CharField(max_length=20)
    person_in_charge = models.CharField(max_length=20)
    apno = models.CharField(max_length=8)
    aptime = models.CharField(max_length=20)
    cno = models.CharField(max_length=8)
    approver = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'department'
        unique_together = (('dno', 'apno', 'cno'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type_id = models.IntegerField(blank=True, null=True)
    user_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Elsedata(models.Model):
    email = models.CharField(max_length=50, blank=True, null=True)
    loanfor = models.CharField(db_column='loanFor', max_length=50, blank=True, null=True)  # Field name made lowercase.
    guarantor = models.CharField(max_length=50, blank=True, null=True)
    natural = models.CharField(max_length=50, blank=True, null=True)
    companyname = models.CharField(db_column='companyName', max_length=50,
                                   blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'elsedata'


class Financedata(models.Model):
    license = models.CharField(max_length=50, blank=True, null=True)
    assests = models.CharField(max_length=50, blank=True, null=True)
    companycredit = models.CharField(db_column='companyCredit', max_length=50, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(max_length=50, blank=True, null=True)
    companyname = models.CharField(db_column='companyName', max_length=50,
                                   blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'financedata'


class Interest(models.Model):
    ino = models.CharField(primary_key=True, max_length=8)
    cno = models.CharField(max_length=8)
    rate = models.FloatField()
    is_deal = models.CharField(max_length=2)

    class Meta:
        managed = False
        db_table = 'interest'
        unique_together = (('ino', 'cno'),)


class Legaldata(models.Model):
    personright = models.CharField(db_column='personRight', max_length=50,
                                   blank=True, null=True)  # Field name made lowercase.
    personfile = models.CharField(db_column='personFile', max_length=50, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(max_length=50, blank=True, null=True)
    companyname = models.CharField(db_column='companyName', max_length=50,
                                   blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'legaldata'


class Loan(models.Model):
    lno = models.AutoField(primary_key=True)
    cno = models.IntegerField()
    ino = models.CharField(max_length=8)
    kind = models.CharField(max_length=20)
    money = models.CharField(max_length=20)
    foreclosure = models.CharField(max_length=20)
    limittime = models.IntegerField()
    recycle = models.CharField(max_length=20)
    progress = models.CharField(max_length=50, blank=True, null=True)
    time = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'loan'
        unique_together = (('lno', 'cno', 'ino'),)


class Mortgage(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    info = models.CharField(max_length=500, blank=True, null=True)
    amountmin = models.IntegerField(db_column='amountMin', blank=True, null=True)  # Field name made lowercase.
    amountmax = models.IntegerField(db_column='amountMax', blank=True, null=True)  # Field name made lowercase.
    monthmin = models.IntegerField(db_column='monthMin', blank=True, null=True)  # Field name made lowercase.
    monthmax = models.IntegerField(db_column='monthMax', blank=True, null=True)  # Field name made lowercase.
    monthirmin = models.CharField(db_column='monthIrMin', max_length=11, blank=True, null=True)  # Field name made lowercase.
    monthirmax = models.CharField(db_column='monthIrMax', max_length=11, blank=True, null=True)  # Field name made lowercase.
    way = models.CharField(max_length=11, blank=True, null=True)
    else_field = models.IntegerField(db_column='else', blank=True, null=True)  # Field renamed because it was a Python reserved word.

    class Meta:
        managed = False
        db_table = 'mortgage'


class Myloan(models.Model):
    credit = models.CharField(max_length=10, blank=True, null=True)
    company = models.CharField(max_length=50, blank=True, null=True)
    month = models.IntegerField(blank=True, null=True)
    money = models.IntegerField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'myloan'
