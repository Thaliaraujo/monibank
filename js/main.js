const camposFormulario = document.querySelector("[required]");

camposFormulario.forEach( campo => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {

};