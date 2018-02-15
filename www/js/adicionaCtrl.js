app.controller("AdicionaCtrl",['$scope', '$state', 'NotaFactory' ,function($scope, $state, NotaFactory){
    //lista de notas
   $scope.nota = {
       id: new Date().getTime().toString(),
       titulo: '',
       descricao: ''
   };

   $scope.salvar = function() {
       if($scope.nota.titulo === '') {
           alert('preencha o campo titulo');
           return false;
       }
       if($scope.nota.descricao === '') {
            alert('preencha o descricao');
            return false;

        }
        NotaFactory.insert($scope.nota);
        $state.go('listar');
   }
}]);