var Reflux = require('reflux');
var API = require('../api');
var HttpFactory = require('../HttpFactory');

var UserActions = Reflux.createActions({
	  'register' : {children:["success","failed"]},
	  'login' : {children:["success","failed"]},
    'loginWithToken' : {children : ['success','failed']},
	  'logout' : {children:["success"]},
    'openLogin' : {children:["success","failed"]},
    'currentUser' : {children:["success","failed"]}
});

/*
  id  string  Y 用户手机或邮箱号码
  password  string  Y 用户密码
  autologin boolean N 是否自动登陆
  autoexpires integer N 自动登陆过期时间，单位（分钟）
*/
UserActions.login.listen(function(data) {
  console.log("login begin");
  //$.post(API.user_api.login_url, data).then(this.success, this.failed);
  HttpFactory.post(API.user_api.login,data,this.success,this.failed);
});

/*
  用Token登录
*/
UserActions.loginWithToken.listen(function(data){
  console.log("begin login with token");
  HttpFactory.post(API.user_api.login_with_token,data,this.success,this.failed);
});

/*
  第三方登录
*/

UserActions.openLogin.listen(function(data){
  window.location.href = API.user_api.open_login;
});
/*
  得到当前用户
*/
UserActions.currentUser.listen(function(data){
  console.log('get currentUser');
  HttpFactory.post(API.user_api.current_user,data,this.success,this.failed);
});
/*
  用户注册
  data:｛tel,code,password｝
  {
      Result: true,    //是否通过验证并注册成功
      ErrorCode: 0,    //错误代码
      ErrorMsg: null    //错误信息
  }
*/
UserActions.register.listen(function(data) {
  // $.post(API.user_api.register_url, data).then(this.success, this.failed);
  HttpFactory.post(API.user_api.register,data,this.success,this.failed);
});

/*
  用户登出
*/
UserActions.logout.listen(function(data) {
    console.log('begin to logout!');
    HttpFactory.post(API.user_api.logout,data,this.success,this.failed);
});



module.exports = UserActions;
