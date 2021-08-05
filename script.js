
// recebe o texto original
let texto = document.querySelector('.demo').innerHTML;

// reduz o numero de caracteres do texto para a qtd definida.
let texto_red = texto.substr(0 , 96);

// array guarda cada palavra separada por espaço em suas posições
let arr = texto_red.split(' ');

// exlui última palavra do arr. Últil caso a última palavra ter sido quebrada bugado
arr.pop();

// transforma o arr novamente em uma string separando os itens por espaço e adiciona ... no final
let texto_final = arr.join(' ')+'...';

// insere o texto final no elemento 
document.querySelector('.demo').innerHTML = texto_final;

