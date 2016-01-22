### 这是什么

[Mimiron2](https://github.com/ctyun/Mimiron2)的演示工程

### dist文件夹内容说明

* Mimiron2.x  Mimiron2项目输出的组件库文件.
* thirds/x  经过抽取的前端页面所需的文件.
  - browser.min.js [babel6.1.9浏览器转义器](http://cdn.bootcss.com/babel-core/6.1.19/browser.min.js)

### Tips
1. 快速启动一个web server `python -m SimpleHTTPServer 8000`
1. 本项目放弃了对字体文件的处理, 字体文件的处理是贯穿Mimiron1开发始终的一个难题, 我们很愉快的发现antd 0.11.2版本中也放弃了对字体的处理.
1. 本项目使用React 0.14.6, 不要尝试自行引入React, React在0.14.x分裂为React和React-DOM两部分, 其中React确实解决了0.13之前的bug:[同一页面不能引入多个React实例](FIXME), 但是React-DOM并没有解决这个问题, 没错! 这就是在坑爹.

### 参考资料:
1. 如何使用webpack打包一个直接能在浏览器使用的js文件:[总结起来就是配置output.library和externals](https://webpack.github.io/docs/library-and-externals.html)
2. 组件库调试: [React热加载](FIXME)

### TODO:
1. 去antd化.
1. 内存打包和调试搞起来.
