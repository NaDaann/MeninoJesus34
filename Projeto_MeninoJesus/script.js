document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

var btn1 = document.querySelector('#cro');
var btn2 = document.querySelector('#proj');
var ocultar1 =  document.querySelector('#cronogram');
var ocultar2 =  document.querySelector('#PETSS');
btn1.addEventListener('click', function(){
    if(ocultar1.style.display === 'none'){
        ocultar1.style.display = 'grid';
        ocultar2.style.display = 'none';
    
    }
    else{
        ocultar1.style.display = 'none';
    }});
    btn2.addEventListener('click', function(){
    if(ocultar2.style.display === 'none'){
        ocultar1.style.display = 'none';
        ocultar2.style.display = 'grid';
    
    }
    else{
        ocultar2.style.display = 'none';
    }});
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

