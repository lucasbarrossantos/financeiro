package com.crud.financeiro.controller;

import com.crud.financeiro.model.Entidade;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/entidades")
public class EntidadesController {

    private static final String INDEX = "entidade/CadastrarEntidade";

    @RequestMapping(value = "/novo")
    public String novo(){
        return INDEX;
    }

    @RequestMapping(value = "/novo", method = RequestMethod.POST)
    public String salvar(Entidade entidade){

        System.out.println("Entidade: " + entidade.toString());

        return novo();
    }

}
