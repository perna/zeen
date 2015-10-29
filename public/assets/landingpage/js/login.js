'use strict';

/**
 * Métodos de Login
 * TODO - refatorar e modularizar
 */

$(function(){


    $('#btn_form_cadastro').on('click', function(){

        var form = $("#form_cadastro").serialize();
        console.log(form);

        $.post('/api/users', $("#form_cadastro").serialize())
            .done(function(data){
                window.location.href = "/dashboard";
            })
            .fail(function(err){
                alert('error' + err);
            });
    });
});