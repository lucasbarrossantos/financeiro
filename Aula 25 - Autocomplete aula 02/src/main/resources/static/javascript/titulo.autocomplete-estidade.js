var Financeiro = Financeiro || {};

Financeiro.Autocomplete = (function () {

    function Autocomplete () {

    }

    Autocomplete.prototype.iniciar = function () {
      $.ajax({

          type: 'GET',
          url:  '/entidades/filtro?nome=',
          success: function (response) {
              var entidadesServidor = response;
              var entidadesSugestao = {};

              for (var i = 0; i < entidadesServidor.length; i++){
                    entidadesSugestao[entidadesServidor[i].nome] = entidadesServidor[i].flag;
              }

              console.log(entidadesSugestao);

          }

      });
    };

    return Autocomplete;

}());

$(function () {

    var autocomplete = new Financeiro.Autocomplete();
    autocomplete.iniciar();


});