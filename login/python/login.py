from http.server import HTTPServer, BaseHTTPRequestHandler
import mimetypes
import hashlib
import urllib
import pymysql

# pymysql => https://www.cnblogs.com/desireyang/p/12072899.html

class Resquest(BaseHTTPRequestHandler):
    def handler(self):
        print("data:", self.rfile.readline().decode())
        self.wfile.write(self.rfile.readline())
 
    def do_GET(self):
        print(self.requestline)
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            with open('index.html', 'rt') as f:
                data = f.read()
            self.wfile.write(data.encode('utf-8'))
        else:
            filepath = '.'+self.path
            self.send_response(200)
            mimetype, _ = mimetypes.guess_type(filepath)
            self.send_header('Content-type', mimetype)
            self.end_headers()
            with open(filepath, 'rt') as f:
                data = f.read()
                self.wfile.write(data.encode('utf-8'))

    def do_POST(self):
        
        print(self.headers)
        print('cmd = ' + self.command)

        length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(length)
        fields = urllib.parse.parse_qs(post_data.decode())
        account = fields['account'][0]
        password = fields['password'][0]
        # MD5加密
        password = hashlib.md5(password.encode(encoding="UTF-8")).hexdigest()

        print(account)
        print(password)

        db = pymysql.connect(
            host="127.0.0.1", 
            user="root", 
            password="chenshuo90909", 
            port=3306, 
            database="demo", 
            charset='utf8mb4'
        )

        print(db)

        cursor = db.cursor()

        sql = "SELECT * FROM user WHERE account = '{}' AND password = '{}'".format(account, password)
        cursor.execute(sql)
        result = cursor.fetchone()

        print('数据库查询结果:')
        print(result)

        if result is None:
            file = 'fail.html'
            with open(file, 'rt') as f:
                data = f.read()
        else:
            data = '''
                <h1>success</h1>
            '''
            data += '<p> your account is: ' + result[2] + '</p>'

        self.send_response(200)
        self.send_header('Content-Type', 'text/html')
        self.end_headers()
        self.wfile.write(data.encode('utf8'))
 
if __name__ == '__main__':
    host = ('', 9002)
    server = HTTPServer(host, Resquest)
    print("Starting server, listen at: %s:%s" % host)
    server.serve_forever()