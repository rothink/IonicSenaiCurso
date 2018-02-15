app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('listar', {
        url: "/listar",
        templateUrl: "template/lista.html"
    });
    
    $stateProvider.state('editar', {
        url: "/editar/:id",
        templateUrl: "template/edita.html",
        controller: "EditaCtrl"
    });
    $stateProvider.state('adicionar', {
        url: "/adicionar",
        templateUrl: "template/edita.html",
        controller: "AdicionaCtrl"
    });

    $urlRouterProvider.otherwise('/listar');
    
});