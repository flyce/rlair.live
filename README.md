# 开发日志
由于硬盘坏了，之前的开发日志已经遗失

## 2017.8.24
### 新增
增加了注销功能
在视频播放页面增加了 收藏 和 稍后观看 按钮及对应的逻辑
增加了个人中心页面
实现评论内容的提交

#### 目前存在的问题
收藏和稍后观看的按钮动画 与 订阅关系 没有关联
服务器端 与 UI端 TOKEN 认证机制有漏洞



> proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $http_host;
		proxy_set_header X-NginX-Proxy true;
		proxy_pass http://127.0.0.1:5000/;
		proxy_redirect off;