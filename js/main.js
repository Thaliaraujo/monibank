import ehUmCPF from "./validarCPF.js";
import maiorIdade from "./validaIdade.js";

const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach( (campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    
});

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    };

    if (campo.name == "aniversario" && campo.value != "") {
        maiorIdade(campo);
    };

    console.log(ValidityState);
};
