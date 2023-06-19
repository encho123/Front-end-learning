# HTTP

HTTP（hypertext transport protocol）协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
约定, 规则

## 请求报文

重点是格式与参数

```
行      POST  /s?ie=utf-8  HTTP/1.1    //get请求，请求体可以是空的。
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
```

## 响应报文

```
行      HTTP/1.1  200  OK    （协议，响应状态码，响应字符串）
头      Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行
体      <html>       //主要的返回体
            <head>
            </head>
            <body>
                <h1>尚硅谷</h1>
            </body>
        </html>
```

其他的状态码：

- 404
- 403
- 401
- 500
- 200

http 规定了相关请求和回复的格式。
