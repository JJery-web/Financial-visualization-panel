from flask import Flask, render_template,request,redirect, url_for
from data import *
app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():  # put application's code here

    return render_template('right_Index.html')


@app.route('/radar',methods=['GET','POST'])
def get_radar():
    from data import echart1,echart2

    if request.method == 'POST':
        Month = request.get_data()
        Month = Month.decode('ascii')

        chart_data1 = echart1(Month)
        chart_data2 = echart2(Month)
    if request.method == 'GET':
         chart_data1 = echart1('1')
         chart_data2 = echart2('1')

    return render_template('radar_chart.html', form1=chart_data1, form2=chart_data2)

@app.route('/table1', methods=['GET','POST'])
def get_table1():
    from load_table import table1
    # 获取表格里的数据
    d = table1()
    if request.method == 'GET':
        return  render_template('Table1.html', form=d)

@app.route('/leftindex', methods=['GET'])
def zichan_yewu():
    # from data import echart4
    render_template('zichan_yewu.html')

@app.route('/business')
def business():
    return render_template('Business.html')

@app.route('/usrpic', methods=['GET','POST'])
def load_usrpic():
    from load_usrpic import usr_info
    # 获取用户信息
    if request.method == 'POST':
        prod = request.get_data()
        prod = prod.decode('ascii')
        d = usr_info(prod)

    if request.method == 'GET':
        d = usr_info("A")

    return render_template('User_pic.html', form=d)

@app.route('/finance')
def finance():
    # data = SourceData()
    return render_template('Finance.html')

@app.route('/asset_sum')
def asset_sum():
    # data = SourceData()
    return render_template('asset_sum.html')

@app.route('/Predict/predict', methods=['GET','POST'])
def predict():
    # data = SourceData()
    from predict import loan_data,adj_weight,completion,Months

    devi = completion()
    m = Months()

    print(m)

    return render_template('Predict/predict.html', form3=devi, form4=m)

@app.route('/Predict/predict1', methods=['GET','POST'])
def predict1():
    from predict import loan_data, adj_weight, manual_adj

    month = request.form.get('month')
    loan = request.form.get('loan')
    print(month,' and ',loan)

    d = loan_data()
    if request.method=='GET':
        adj = adj_weight(0)
    if request.method == 'POST':
        adj = manual_adj(month,loan)

    print(adj)
    return render_template('Predict/predict1.html', form=d, form2=adj)

# 水滴图
@app.route('/Predict/liquidfill')
def liquid():
    return render_template('Predict/liquidfill.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, port=5000)