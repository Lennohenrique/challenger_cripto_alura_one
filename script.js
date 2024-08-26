const mensagem = document.getElementById("mensagem");
const botaoCripto = document.querySelector(".cripto");
const botaoDescripto = document.querySelector(".descripto");
const aside = document.querySelector("aside");
const textoAside = document.querySelector(".texto_aside");
const notFoundText = document.querySelector(".not_found_text");
const botaoCopiar = aside.querySelector("button");

const chaves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

mensagem.addEventListener("focus", () => {
  mensagem.value = "";
});

mensagem.addEventListener("keypress", (event) => {
  const charCode = event.keyCode || event.which;
  if (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 192 && charCode <= 221) ||
    (charCode >= 224 && charCode <= 250) ||
    (charCode >= 252 && charCode <= 255)(
      charCode >= 33 && charCode <= 126 && charCode !== 32
    )
  ) {
    event.preventDefault();
    alert("Opa! Digite apenas letras minúsculas e sem acento.");
  }
});

botaoCripto.addEventListener("click", () => {
  const texto = mensagem.value.toLowerCase();
  const textoCriptografado = criptografar(texto);
  exibirResultado(textoCriptografado);
});

botaoDescripto.addEventListener("click", () => {
  const textoCriptografado = mensagem.value;
  const textoDescriptografado = descriptografar(textoCriptografado);
  exibirResultado(textoDescriptografado);
});

function criptografar(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    if (chaves[letra]) {
      resultado += chaves[letra];
    } else {
      resultado += letra;
    }
  }
  return resultado;
}

function descriptografar(texto) {
  let resultado = texto;
  for (const chave in chaves) {
    const valor = chaves[chave];
    resultado = resultado.replaceAll(valor, chave);
  }
  return resultado;
}

function exibirResultado(texto) {
  textoAside.textContent = texto;
  textoAside.classList.remove("invisivel");
  textoAside.classList.add("visivel");
  botaoCopiar.classList.remove("invisivel");
  botaoCopiar.classList.add("visivel");
  notFoundText.style.display = "none";
  botaoCopiar.addEventListener("click", () => {
    copiarTexto(texto);
  });
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto);
}
