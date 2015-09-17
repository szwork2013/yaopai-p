var React = require('react');
var Reflux = require('reflux');

var OrderActions = require('../actions/OrderActions');

var OrderStore = Reflux.createStore({
  init : function(){
    this.orders = [];
    
    //listen to the OrderActions
    this.listenTo(OrderActions.listOrders,this.onListOrders);
    this.listenTo(OrderActions.getOrder,this.onGetOrder);
    this.listenTo(OrderActions.comfirmOrder,this.onComfirmOrder);
  },
  onListOrders : function(type){
    //从服务器api接口获得定单的列表
    this.orders = [
      {
        date : '2015-10-20',
        price : '3000',
        orderNo : '201510200001',
        photographer : {name : '电磁猫',avator : '../img/user.png',phoneNumber : '13999000111'},
        customer : {name : '周晓宏',avator : '../img/user.png',phoneNumber : '13999000111'},

      },
      {}
    ];
    this.trigger(this.orders);
  },
  onGetOrder : function(order_id){

  },
  onComfirmOrder : function(order){

  }

});