app.controller("ListaCtrl",['$scope','NotaFactory',function($scope, NotaFactory){
    //lista de notas
    $scope.notas = NotaFactory.list();

    $scope.remover = function(id) {
        NotaFactory.remover(id);
    }

}]);