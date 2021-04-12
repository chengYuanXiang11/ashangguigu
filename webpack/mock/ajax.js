var ajax = new XMLHttpRequest()
        ajax.onreadystatechange=function(){
            ajax.abort()//取消上一次请求
            ajax.setRequestHeader('Connection','keep-alive');
            ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            if(ajax.readyState ===4 && ajax.status === 200){
                console.log(ajax.response)
            }
          
        }
        // ajax.open('get','https://www.fastmock.site/mock/57a0e1276892eb3c40313fec8a5cb762/api/api/user/create?name=12')
        ajax.open('post','https://www.fastmock.site/mock/57a0e1276892eb3c40313fec8a5cb762/api/api/user/pos')

        ajax.send('name=12')