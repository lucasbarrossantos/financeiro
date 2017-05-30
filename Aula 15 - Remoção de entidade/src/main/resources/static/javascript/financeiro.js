var Financeiro = Financeiro || {};

Financeiro.DialogoDeRemocao = (function () {

    function DialogoDeRemocao() {
        this.modal = $('#modal-remover-entidade');
        this.botaoRemover = $('.js-remover-entidade-btn');
    }

    DialogoDeRemocao.prototype.iniciar = function () {
      this.botaoRemover.on('click', onModalShow.bind(this));
    };

    function onModalShow(evento){
        evento.preventDefault();
        var botao = $(evento.currentTarget);
        var codigo = botao.data('codigo');
        var nome = botao.data('nome');

        var form = this.modal.find('form');
        var action = form.data('url-remover');
        if(!action.endsWith('/')){
            action += '/';
        }

        form.attr('action', action + codigo);

        this.modal.find('.modal-content span').
        html('Tem certeza que deseja remover <strong> ' + nome + '</strong> ?');
    }

    return DialogoDeRemocao;

}());

$(function () {

    var removerEntidade = new Financeiro.DialogoDeRemocao();
    removerEntidade.iniciar();
});