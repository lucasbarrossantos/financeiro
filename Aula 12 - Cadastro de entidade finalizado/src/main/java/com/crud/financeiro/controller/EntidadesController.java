package com.crud.financeiro.controller;

import com.crud.financeiro.model.Entidade;
import com.crud.financeiro.service.EntidadesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

@Controller
@RequestMapping("/entidades")
public class EntidadesController {

    private static final String INDEX = "entidade/CadastrarEntidade";

    @Autowired
    private EntidadesService entidadesService;

    @RequestMapping(value = "/novo")
    public String novo(Entidade entidade){
        return INDEX;
    }

    @RequestMapping(value = "/novo", method = RequestMethod.POST)
    public String salvar(@Valid Entidade entidade, BindingResult result){

        if (result.hasErrors()){
            // TODO: Mostrar mensagem de erro
            return novo(entidade);
        }

        System.out.println("Entidade: " + entidade.toString());
        entidadesService.salvar(entidade);

        return "redirect:/entidades/novo";
    }

}
