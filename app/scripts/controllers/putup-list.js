'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:UserListCtrl
 * @description
 * # UserListCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('PutupListCtrl', [
  	"Data", "$scope", "$state", 
  	function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //페이지가 로딩되었을 때 호출http://172.16.2.17
    $scope.$on('$viewContentLoaded', function() {
    	$scope.requestUserList();
    });
    $scope.userList = [];
    $scope.requestUserList = function() {
    	var dataPromise = Data.getData(
    		'http://192.168.0.18:52273/post');
    	dataPromise.then(function(results) {
    		$scope.userList = results.data;
    	},function(reason){},function(update){});
    }

    $scope.deleteUserInfo = function(id) {
    	var dataPromise = Data.deleteData(
    		'http://192.168.0.18:52273/post/'+id, '');
    	dataPromise.then(function(results) {
    		$scope.requestUserList();
    	},function(reason){},function(update){});
    }

    $scope.modifyUserInfo = function(id,name,age) {
    	var dataPromise = Data.modifyData(
    		'http://192.168.0.18:52273/post/'+id, 
    		'&message='+message);
    	dataPromise.then(function(results) {
    		$scope.requestUserList();
    	},function(reason){},function(update){});
    }
    
    $scope.userInfo = {};
    $scope.getUserInfo = function(id) {
    	var dataPromise = Data.getData(
    		'http://192.168.0.18:52273/post/'+id);
    	dataPromise.then(function(results) {
    		$scope.userInfo = results.data;
    	},function(r){},function(u){});
    }

    $scope.goUserDetail = function(id) {
        $state.go('commend-list', {id:id});
    }
  }]);