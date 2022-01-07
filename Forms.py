from wtforms.fields import simple
from wtforms.fields import core
from wtforms import Form
from wtforms import validators
from wtforms import widgets

def Adj_LOAN_FORM(form):

    month = core.SelectField(
        label='调整月份',

    )
    adj_loan = simple.StringField(
        label="调整贷款",
    )