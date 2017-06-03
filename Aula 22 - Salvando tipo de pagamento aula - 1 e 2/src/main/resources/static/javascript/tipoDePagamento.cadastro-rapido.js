var Financeiro = Financeiro || {};

Financeiro.TipoDePagamentoNovo = (function () {

    function TipoDePagamentoNovo(){
        this.modal = $('#modal-cadastro-rapido-tipo-de-pagamento');
        this.botaoSalvar = $('.js-novo-tipo-de-pagamento-btn');
        this.botaoAbrirModal = $('.js-abrir-modal-noto-tipo');
        this.comboTipoDePagamento = $('#comboTipoDePagamento');
        this.inputNovoPagamento = $('#input-descricao-do-novo-tipo-de-pagamento');
        this.form = this.modal.find('form');
        this.containerMensagemErro = $('.js-mensagem-de-erro');
        this.url = this.form.attr('action');
    }

    TipoDePagamentoNovo.prototype.iniciar = function () {
        this.form.on('submit', function (evento) {evento.preventDefault()});
        this.botaoSalvar.on('click', onBotaoSalvarClick.bind(this));
        $('select').on('pagamentoSalvo', function () {

            // Atualizar o combo
            $(this).material_select();
        });
    };

    function onBotaoSalvarClick() {
        var descricaoPagamento = this.inputNovoPagamento.val().trim();
        
        $.ajax({
            url: this.url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({descricao : descricaoPagamento}),
            error: onErroSalvandoPagamento.bind(this),
            success: onPagamentoSalvo.bind(this)
        });
        
    }

    function onErroSalvandoPagamento(objeto) {
        
    }
    
    function onPagamentoSalvo(tipoDePagamento) {
        var $selectDropdown = this.comboTipoDePagamento;

        var value       = tipoDePagamento.codigo;
        var descricao   = tipoDePagamento.descricao;

        $selectDropdown.append(
            $('<option></option>')
                .attr('value', value)
                .text(descricao)
        );

        $('#comboTipoDePagamento').find('option[value="' + tipoDePagamento.codigo + '"]').prop('selected', true);

        $selectDropdown.trigger('pagamentoSalvo');
        $('#modal-cadastro-rapido-tipo-de-pagamento').modal('close');
        this.inputNovoPagamento.val('');
    }
    
    
    
    return TipoDePagamentoNovo;

}());

$(function () {
    var novoTipoDePagamentoNovo = new Financeiro.TipoDePagamentoNovo();
    novoTipoDePagamentoNovo.iniciar();
});