;(function(){
  'use strict';


  //relates to dependency injection
  angular.module('myApp', [])
    .controller('TodoController',function(){
      var vm= this;
      vm.tasks = [
        {
          name: 'Learn angular',
          desc: 'If i could learn Angular id be so happy',
          due: 'Today'
        },
        {
          name: 'Finish Tic Tac Toe',
          desc: 'firebase is hell',
          due: 'Monday'
        },
        {
          name: 'Get a job',
          desc: 'yay money!',
          due: 'April 2015'
        }
      ];

      vm.addNewTask = function(){
        vm.tasks.push(vm.newTask);
        //vm.newTask = null;
      }
      
      vm.removeTodo = function(todo){
        var index = vm.tasks.indexOf(todo);
        vm.tasks.splice(index,1);
      }
  });
}());

