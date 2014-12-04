;(function(){
  'use strict';

  var hello = 'world';  

  //relates to dependency injection
  angular.module('myApp', [])
    .controller('SimpleController',function(){
      var vm= this;
      vm.name = "beck";
      vm.friends = ['Dave','bob','penny','jezzy']
  });
}());

