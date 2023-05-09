$(document).ready(function(){

    $("#pgprincipais").click(function(){
        $("#Pratosprincipais").show()
        $("#Bebidas").hide()
        $("#Sobremesas").hide()
    })

    $("#pgsobremesas").click(function(){
        $("#Sobremesas").show()
        $("#Pratosprincipais").hide()
        $("#Bebidas").hide()      
    })

    $("#pgbebidas").click(function(){
        $("#Bebidas").show()
        $("#Pratosprincipais").hide()
        $("#Sobremesas").hide()
    })

    $("#mostrarNome").click(function(){
        alert("Olá " + $("#nome").val())
    })
})