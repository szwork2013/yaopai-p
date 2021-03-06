// var API_URL = 'http://localhost:3000';
var DEV_ENV = '//dev.api.aiyaopai.com/';
var PRODUCTION_ENV = '//api.aiyaopai.com/';


var DOMAIN = DEV_ENV;

//获取当前网站的根目录
var Local_Host = window.location.host;
var Local_Href = window.location.href;

//根据local host切换api
function hasHost(host) {
  return host.length > 0;
}

function isDevHost(host) {
  var re = /dev\.|192\.|localhost|0\./i;
  var founds = host.match(re);
  if (founds != null) {
    return true;
  } else {
    return false;
  }
}

function isProdHost(host) {
  return !isDevHost(host);
}

if (hasHost(Local_Host) && isProdHost(Local_Host)) {
  DOMAIN = PRODUCTION_ENV;
}

var API_URL = DOMAIN + '?api=';

var API_CONST = {
  DOMAIN : DOMAIN,
  API_URL,
  USER : {
    login : API_URL + 'User.Login',
    login_with_token : API_URL + 'User.LoginWithToken',
    register : API_URL + 'User.ReceiveTelRegister',
    sendTelRegister : API_URL + "User.SendTelRegister",
    sendTelRegister2 : API_URL + "User._SendTelRegister",
    emailRegister : API_URL + 'User.ReceiveMailRegister',
    sendEmailRegister : API_URL + "User.SendMailRegister",
    sendEmailRegister2 : API_URL + "User._SendMailRegister",
    receiveTelResetPassWord : API_URL + "User.ReceiveTelResetPassWord",
    receiveMailResetPassWord : API_URL + "User.ReceiveMailResetPassWord",
    sendTelResetPassWord : API_URL + "User.SendTelResetPassWord",
    sendMailResetPassWord : API_URL + "User.SendMailResetPassWord",
    modify_password : API_URL + 'User.ChangePassword',
    logout : API_URL + "User.Logout",
    open_login : API_URL + "openuser.login&serviceid=openweixin&redirecturl="+Local_Href,
    current_user : API_URL + 'User.CurrentUser',
    currentUserDetail : API_URL + 'User.CurrentUserDetail',
    changeContactDetail : API_URL + 'User.ChangeContactDetail',
    changeRealName : API_URL + 'User.ChangeRealName',
    changeAvatar : API_URL + 'User.ChangeAvatar',
    updateInfo : API_URL + 'User.ChangeInfo',
  },
  PHOTOGRAPHER: {
    submitAudit: API_URL + 'Photographer.SubmitAudit',
    viewAudit: API_URL + 'Photographer.ViewAudit',
    get: API_URL + 'Photographer.Get',
    current: API_URL + 'Photographer.CurrentPhotographer',
    change: API_URL + 'Photographer.ChangePhotographer',
    //currentStudio : API_URL + 'PhotographerStudio.CurrentStudio',
    //changeStudio : API_URL + 'PhotographerStudio.ChangeStudio',
  },
  MAKEUPARTIST: {
    viewAudit:  API_URL + 'MakeupArtist.ViewAudit',
    submitAudit: API_URL + 'MakeupArtist.SubmitAudit',
  },
  MOTE: {
    viewAudit:  API_URL + 'MOTE.ViewAudit',
    submitAudit: API_URL + 'Mote.SubmitAudit',
    currentInfo: API_URL + 'Mote.CurrentMote',
    changeInfo: API_URL + 'Mote.ChangeMote',
    get: API_URL + 'Mote.Get',
    search: API_URL + 'Mote.Search',
    addView: API_URL + 'Mote.ViewAdd',
    mark: API_URL + 'Mote.Mark',
    unmark: API_URL + 'Mote.UnMark',
  },
  ALBUMS : {
    add : API_URL + 'Albums.Add',
    update : API_URL + 'Albums.Update',
    delete : API_URL + 'Albums.Delete',
    get : API_URL + 'Albums.Get',
    search : API_URL + 'Albums.Search',
    categories : API_URL + 'AlbumsCategory.Search',
    offSale : API_URL + 'Albums.SalesOff',
    onSale : API_URL + 'Albums.SalesOn',
    sorting : API_URL + 'Albums.Sorting'
  },

  TAG: {
    list: API_URL + 'Tag.List',
  },

  ORDER : {
    outSearch : API_URL + 'Order.OutSearch',
    inSearch : API_URL + 'Order.InSearch',
    get : API_URL + 'Order.Get',
    confirm : API_URL + 'Order.Confirm',
    add : API_URL + 'Order.Add',
    close : API_URL + 'Order.Close',
  },
  FILE : {
    getToken : API_URL + 'File.Token',
    user_token_url : DOMAIN + 'file/token?type=user',
    work_token_url : DOMAIN + 'file/token?type=work',
  },
  COMMON : {
    area_list : API_URL + 'Area.List',
  },
  LOG : {
    log : DOMAIN + 'temp/log',
  }
}

function getRootPath_web() {
    var strFullPath=window.document.location.href;
    var strPath=window.document.location.pathname;
    var pos=strFullPath.indexOf(strPath);
    var prePath=strFullPath.substring(0,pos);
    var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);
    return(prePath+postPath);
}

module.exports = API_CONST;
