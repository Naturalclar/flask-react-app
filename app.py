"""app.py
My first python flask app with MySQL
"""

from flask import Flask, render_template, json, request
from flaskext.mysql import MySQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
mysql = MySQL()

#MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'flaskApp'
app.config['MYSQL_DATABASE_PASSWORD'] = 'flaskApp@123'
app.config['MYSQL_DATABASE_DB'] = 'BucketList'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

@app.route('/api/signUp', methods=['POST'])
def signUp():
    '''
    Create new user by adding it to MySQL
    '''
    conn = mysql.connect()
    cursor = conn.cursor()
    try:
        # read the posted values from the UI
    
        data = json.loads(request.data)
        _name = data['inputName']
        _email = data['inputEmail']
        _password = data['inputPassword']

        # validate the received values
        if _name and _email and _password:
            _hashed_password = generate_password_hash(_password)
            
            cursor.callproc('sp_createUser',(_name,_email,_hashed_password))
            data = cursor.fetchall()
            if len(data) is 0:
                conn.commit()
                return json.dumps({'message':'User created successfully !'})
            else:
                return json.dumps({'message':str(data[0])})
        else:
            return json.dumps({'html':'<span>Enter the required fields</span>'})
    except Exception as e:
        return json.dumps({'error':str(e)})
    finally:
        cursor.close()
        conn.close()
  

#@app.route('/showSignUp')
#def showSignUp():
#    '''
#    Direct to SignUp Page
#    '''
#    return render_template('signup.html')

@app.route('/')
def main():
    '''
    Entry Point
    '''
    return render_template('index.html')

@app.route('/<path>')
def main_path(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
