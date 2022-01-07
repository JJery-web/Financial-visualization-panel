import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="719458145",
    database="bank_index",
    auth_plugin='mysql_native_password'
)

def usr_info(prod):

    mycursor = mydb.cursor()
    sql = "Select * from Usr_pic where Prod="+"'"+prod+"'"
    mycursor.execute(sql)
    data = mycursor.fetchall()
    jsonData = []
    for row in data:
        result = {}
        result['age'] = row[1]*100
        result['degree'] = row[2]*100
        result['trd'] = row[3]
        result['overdue'] = row[4]*100
        jsonData.append(result)
    print(jsonData)

    return jsonData