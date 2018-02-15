app.controller("EditaCtrl",['$scope', '$state', 'NotaFactory' ,function($scope, $state, NotaFactory){
    //lista de notas
   $scope.nota = angular.copy(NotaFactory.get($state.params.id));

   $scope.salvar = function() {
        NotaFactory.update($scope.nota);
        $state.go('listar');
   }
}]);