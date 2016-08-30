angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.pedidos', {
    url: '/pedidos',
    views: {
      'tab1': {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  })

  .state('tabsController.buscar', {
    url: '/buscar',
    views: {
      'tab2': {
        templateUrl: 'templates/buscar.html',
        controller: 'buscarCtrl'
      }
    }
  })

  .state('tabsController.configuraciN', {
    url: '/config',
    views: {
      'tab3': {
        templateUrl: 'templates/configuraciN.html',
        controller: 'configuraciNCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.resultados', {
    url: '/resultados',
    views: {
      'tab1': {
        templateUrl: 'templates/resultados.html',
        controller: 'resultadosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/pedidos')

  

});