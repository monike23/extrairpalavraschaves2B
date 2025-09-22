import ( PALAVRAS_RUINS } from "./palavrasRuins.js";
    
const botaMostraPalavras = document.queryselector ('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave) (
  const texto = document. querySelector ('#entrada-de-texto') .value;
  const campoResultado = document. querySelector ('#resultado-palavrachave');
  const palavraschave = processatexto(texto);

  campoResultado.textContent = palavraschave.join(*, *);
}
function processatexto(texto) (
  let palavras = texto.split(/AP(L)+/u);

  for (let i in palavras) {
    palavras [1] = palavras [1]. toLowerCase();
  
  }

  palavras = tiraPalavrasRuins (palavras);

  const frequencias = contaFrequencias (palavras);

let ordenadas = Object.keys(frequencias). sort(ordenaPalavra);

  function ordenaPalavra(p1, p2) { 
     return frequencias[p2] - frequencias [p1];

  }
   return ordenadas slice(0, 10);
}

 function contaFrequencias(palavras) {
   let frequencias = {};
   for (let i of palavras) {
     frequencias [i] = 0;
   for (let j of palavras) {
       if (i == j) {
frequencias [i]++;
       }
    }
}
   return frequencias;
}

   
