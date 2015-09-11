
////////////////////////// ligle engine的配置文件
var engine = {
  loggerLevel:'DEBUG'
};

engine.db={ 
  name: 'demo', 
  host: '127.0.0.1', 
  port: 27017
};

engine.model={
  upDir:'./public/images/upload/',
  staticDir:'/images/upload/'
};

//// app 的相关配置
engine.app = {
  cookie:{
    life: 1000*60*60*24,  // cookie生存期，单位ms
    secret: 'ligle-demo' // cookie加密
  },
  root:{
    name: 'root',    // z最高权限管理员账号名称
    password: '123'
  },
  http:{
    port: 4000
  },
  favicon:{
    path:'./public/images/favicon.ico'    // w网站图标路径
  },
  upload:{
    path:engine.model.upDir
  }
};

///// 每个配置都可以忽略，将使用默认配置
///// 具体每个模块的配置
engine.midware={
};

///// util目前可配置比较多，分开写了
engine.util = {
  cls:{},
  logger:{},
  util:{}
};

/// 邮件配置
engine.util.email = {
  options:{
    host: "115.28.149.231",
    port: 25,
    auth: {
      user: 'hi@ligle.net',
      pass: 'hi1ig1e'
    }
  },
  emailFrom:'no-reply@ligle.net',
  templates:{
    signUp:{
      subject: '欢迎注册 <%- appname %>',
      text: [
        '<h2>您好 <%- username %></h2>',
        '欢迎注册 <%- appname %>.',
        '<p> <%- link %> 完成注册.</p>',
        ' 或者在拷贝以下链接，在浏览器中打开',
        ' <%- url%>'
      ].join('<br />'),
      linkText: '点击这里'
    },
    occupy:{
      subject: '邮箱已经注册',
      text: [
        '<h2>您好 <%- username %></h2>',
        ' 您正在尝试注册 <%- appname %>.',
        '<p>您的邮箱已经注册，不能重复注册',
        ' 如果不是您本人进行注册，您可以忽略这封邮件</p>',
        ' 使用如下链接找回密码',
        ' <%- url%>',
        '<p>The <%- appname %> Team</p>'
      ].join('<br />')
    },
    resend:{
      subject: '完成您的注册',
      text: [
        '<h2>您好 <%- username %></h2>',
        ' <%- link %>完成注册',
        ' 或者在拷贝以下链接，在浏览器中打开',
        ' <%- url%>',
        '<p>The <%- appname %> Team</p>'
      ].join('<br />'),
      linkText: '点击这里'
    },
    reset:{
      subject: '重置密码',
      text: [
        '<h2>您好 <%- username %></h2>',
        '<%- link %> 重置密码',
        ' 或者在拷贝以下链接，在浏览器中打开',
        ' <%- url%>',
        '<p>The <%- appname %> Team</p>'
      ].join('<br />'),
      linkText: '点击这里'
    }
  }
};

///// 短信配置
engine.util.sms={
  serverIP:"https://sandboxapp.cloopen.com",
  serverPort:"8883",
  softVersion:"2013-12-26",
  timeFmt:'YYYYMMDDHHmmss',
  accountSid:"aaf98f894dae9c16014db3891fc3045c",
  accountToken:"8a0d3b22dbcf4ed3848c837c7367179a",
  appId:"aaf98f894dae9c16014db3899afa045e",
  appToken:"99c4ba07c862cff55250ecb31af13cb9",
  func: "SMS",
  funcdes:"TemplateSMS",
  code:{
    length:6,
    mode:'digit'
  },
  templates:{
    code:'1'
  },
  useFake:false
};

module.exports = engine;
