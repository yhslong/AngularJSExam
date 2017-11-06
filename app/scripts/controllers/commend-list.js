'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:CommendListCtrl
 * @description
 * # CommendListCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('CommendListCtrl',
  	["Data", "$scope", "$state", "$stateParams",
  	function (Data, $scope, $state, $stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
//페이지가 로딩되었을 때 호출
    $scope.$on('$viewContentLoaded', function() {   	
    	$scope.getUserInfo($stateParams.id);
    	$scope.requestUserList($stateParams.id);
    });

    $scope.commend = false;
    $scope.userList = [];
    $scope.requestUserList = function(id) {
    	var dataPromise = Data.getData(
    		'http://192.168.0.18:52273/commend/'+id);
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
    
    $scope.userInfo;
    var user_real_id;
    var request_id;
    $scope.getUserInfo = function(id) {
    	var dataPromise = Data.getData(
    		'http://192.168.0.18:52273/post/'+id);
    	dataPromise.then(function(results) {
    		$scope.userInfo = results.data[0];
    		user_real_id = results.data[0].user_real_id;
    		request_id   = results.data[0].id;
    	},function(r){},function(u){});
    }

	$scope.message = "";
	$scope.saveUserInfo = function() {
		//console.log("여기!!!");
	  //  console.log($scope.userinfo.user_real_id);
	    var dataPromise = Data.setData(
	        'http://192.168.0.18:52273/commend',
	    		'&user_real_id='+user_real_id+'&request_id='+request_id+
	    		'&message='+$scope.message);
	    	dataPromise.then(function(restuls){
   			    alert($scope.commend);
	    		$scope.message = "";
	    	},function(reason){},function(update){});
	    };    

  }]);