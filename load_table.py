import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="719458145",
    database="bank_index",
    auth_plugin='mysql_native_password'
)

def table1():

    mycursor = mydb.cursor()
    sql = "Select name,total_user from Users order by total_user desc LIMIT 5"
    mycursor.execute(sql)
    data = mycursor.fetchall()
    jsonData = []
    for row in data:
        result = {}
        result['name'] = row[0]
        result['total'] = row[1]
        jsonData.append(result)
    # print(jsonData)

    return jsonData