package com.crud.financeiro.service;

import com.crud.financeiro.model.Entidade;
import com.crud.financeiro.repository.Entidades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EntidadesService {

    @Autowired
    private Entidades entidades;

    public void salvar(Entidade entidade){
        entidades.save(entidade);
    }

}
