app.factory("NotaFactory", function() {

    var notas = angular.fromJson(window.localStorage['notas'] || '[]');

    function persist() {
        window.localStorage['notas'] = angular.toJson(notas);
    }

    return {
        list: function() {
            return notas;
        },
        
        get: function(id) {
            for(var i=0; i<notas.length; i++) {
                if(notas[i].id === id) {
                  return notas[i];
                }
              }
        },
        update: function(nota) {
            for(var i=0; i<notas.length; i++) {
                if(notas[i].id == nota.id) {
                  notas[i] = nota;
                  persist();
                  return;
                }
            }
        },
        insert: function(nota) {
            notas.push(nota);
            persist();
        },
        remover: function(id) {
            for(var i=0; i<notas.length; i++) {
                if(notas[i].id == id) {
                  notas.splice(i,1);
                  persist();
                  return;
                }
            }
        }
    }
});