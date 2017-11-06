'use strict';

/**
 * @ngdoc overview
 * @name angularJsexamApp
 * @description
 * # angularJsexamApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsexamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $routeProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('main', {
        url:'/',
        templateUrl:'views/main.html',
        controller:'MainCtrl'
      })
      .state('login', {
        url:'/login',
        templateUrl:'views/login.html',
        controller:'LoginCtrl'
      })
      .state('signup',{
        url:'/signup',
        templateUrl:'views/signup.html',
        controller:'SignupCtrl'
      })
      .state('user-list',{
        url:'/user/list',
        templateUrl:'views/user-list.html',
        controller:'UserListCtrl'
      })
      .state('user-detail',{
        url:'/user/detail',
        templateUrl:'views/user-detail.html',
        controller:'UserDetailCtrl',
        params:{
          id:null
        }
      })
      .state('user-withdraw',{
        url:'/user/withdraw',
        templateUrl:'views/user-withdraw.html',
        controller:'UserWithdrawCtrl'
      })
      .state('putup-list',{
        url:'/user/list',
        templateUrl:'views/putup-list.html',
        controller:'PutupListCtrl'

      })
      .state('commend-list',{
        url:'/user/commend',
        templateUrl:'views/commend-list.html',
        controller:'CommendListCtrl',
        params:{
          id:null
        }
      })
     });
  /*.config(function ($routeProvider) {
    $routeProvider,
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }); */
