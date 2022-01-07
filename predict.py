import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="719458145",
    database="bank_index",
    auth_plugin='mysql_native_password'
)

def loan_data():

    mycursor = mydb.cursor()
    sql = "Select * from Loan"
    mycursor.execute(sql)
    data = mycursor.fetchall()
    jsonData = []
    mycursor.close()
    # 获取每月预期贷款和实际贷款数据
    for row in data:
        result = {}
        result['exp'] = row[3]/1000
        result['actual'] = row[4]/1000
        jsonData.append(result)
    # print(jsonData)
    try:
        echart = {
            'data1': [i.get("exp") for i in jsonData],
            'data2': [i.get("actual") for i in jsonData]
        }
        return echart
    except:
        print("Error")


    return jsonData

def adj_weight(tag):

    mycursor = mydb.cursor()
    sql = "Select weight from Loan WHERE actual_loan=0 "
    mycursor.execute(sql)
    data = mycursor.fetchall()
    jsonData = []

    # 初始化权重数组
    length = 12 - len(data)
    L = [0] * length
    weight = L
    for w in data:
        weight.append(w[0])

    # 计算实际和预期的差距
    sql = "select SUM(expected_loan)-SUM(actual_loan) from Loan"
    mycursor.execute(sql)
    diff = mycursor.fetchall()
    diff = diff[0][0]
    mycursor.close()

    s = sum(weight)
    adj_w = [w / s for w in weight]
    # 计算调整后的loan
    result = {}
    result['adj'] = [round((w * diff) / 1000) for w in adj_w]
    # print(result)
    jsonData.append(result)

    # 用tag判断是否是按输入值调整
    if tag == 1:
        return result['adj'], length
    else:

        try:
            echart = {
                #'data': [i.get("adj") for i in jsonData],
                'data': result['adj']
            }
            return echart
        except:
            print("Error")

# 手动调整
def manual_adj(m,n):
    # 月份
    m = int(m)
    n = int(n)

    mycursor = mydb.cursor()
    sql = "Select weight from Loan WHERE actual_loan=0 "
    mycursor.execute(sql)
    data = mycursor.fetchall()
    jsonData = []

    # 初始化权重数组
    length = 12 - len(data)
    L = [0] * length
    weight = L
    for w in data:
        weight.append(w[0])
    # 设置第n个月的weight为0，即不参与调整权重
    weight[m-1] = 0

    # 计算实际和预期的差距
    sql = "select SUM(expected_loan)-SUM(actual_loan) from Loan"
    mycursor.execute(sql)
    diff = mycursor.fetchall()
    # 这里的差值只剩下几个待调整的月份
    diff = diff[0][0]
    print("这是传入的贷款",n)
    print("这是差值：",diff)
    if n>diff:
        return False
    else:
        diff = diff-n

    mycursor.close()

    s = sum(weight)
    adj_w = [w / s for w in weight]
    # 计算调整后的loan
    result = {}
    result['adj'] = [round((w * diff) / 1000) for w in adj_w]
    #第m个月的loan等于传进来的n
    result['adj'][m-1] = n

    jsonData.append(result)
    try:
        echart = {
            # 'data': [i.get("adj") for i in jsonData],
            'data': result['adj']
        }
        return echart
    except:
        print("Error")

    mycursor.close()

# 计算每月完成度
def completion():
    exp_actual = loan_data()
    adj,l = adj_weight(1)

    # print("实际", exp_actual['data2'])
    # print("调整后", adj)

    actual = exp_actual['data2']
    exp = exp_actual['data1'][0:l]

    # print("今年实际完成", actual)
    # print("今年预期完成", exp)
    deviation = [round((a/b-1)*100) for a,b in zip(actual, exp)]
    # print("今年目标完成情况为：", deviation)

    try:
        echart = {
            'data': deviation
        }
        return echart
    except:
        print("Error")


def Months():
    mycursor = mydb.cursor()
    sql = "Select MONTH(date) from Loan WHERE actual_loan=0 "
    mycursor.execute(sql)
    data = mycursor.fetchall()
    jsonData = []

    for row in data:
        result = {}
        result['month'] = row[0]
        jsonData.append(result)

    print(jsonData)
    mycursor.close()

    return jsonData