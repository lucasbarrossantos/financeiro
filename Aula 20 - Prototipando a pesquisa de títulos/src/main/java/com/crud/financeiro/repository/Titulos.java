package com.crud.financeiro.repository;

import com.crud.financeiro.model.Titulo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Titulos extends JpaRepository<Titulo, Long> {

}
