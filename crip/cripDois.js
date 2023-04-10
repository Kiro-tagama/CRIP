export default function cripDois(params) {
  
  function cripto(msg) {
    // Definir a relação de substituição letra-número
    const letra_num = {
      'A': 11, 'B': 14, 'C': 20, 'D': 29, 'E': 32, 'F': 38, 'G': 47, 'H': 50, 'I': 53,
      'J': 59, 'K': 68, 'L': 72, 'M': 78, 'N': 87, 'O': 90, 'P': 96, 'Q': 105, 'R': 108,
      'S': 114, 'T': 123, 'U': 126, 'V': 132, 'W': 141, 'X': 144, 'Y': 150, 'Z': 159,
      'a': 11, 'b': 14, 'c': 20, 'd': 29, 'e': 32, 'f': 38, 'g': 47, 'h': 50, 'i': 53,
      'j': 59, 'k': 68, 'l': 72, 'm': 78, 'n': 87, 'o': 90, 'p': 96, 'q': 105, 'r': 108,
      's': 114, 't': 123, 'u': 126, 'v': 132, 'w': 141, 'x': 144, 'y': 150, 'z': 159,
      'Á': 11, 'Ã': 11, 'Â': 11, 'À': 11, 'É': 32, 'Ê': 32, 'Í': 53, 'Ó': 90, 'Õ': 90,
      'Ô': 90, 'Ú': 126, 'Ü': 126, 'á': 11, 'ã': 11, 'â': 11, 'à': 11, 'é': 32, 'ê': 32,
      'í': 53, 'ó': 90, 'õ': 90, 'ô': 90, 'ú': 126, 'ü': 126
    };
    let msg_cripto = '';
    for (let letra of msg) {
      // Se for uma letra existente no alfabeto, a letra será trocada pelo correspondente número na relação
      if (letra.match(/[A-Za-zÀ-Úà-ú]/)) {
        msg_cripto += String(letra_num[letra] * 4 - 10)+" ";
      }
      // Caso contrário, manter a letra original
      else {
        msg_cripto += letra+" ";
      }
    }
    return msg_cripto;
  }

// const msg = prompt("Digite a mensagem que você deseja criptografar:");
// console.log("==========================");
// const mensagem_cripto = cripto(msg);
// console.log("Mensagem original:", msg);
// console.log("==========================");
// console.log("Mensagem criptografada:", mensagem_cripto);

  // function descripto(mensagem) {
  //   const num_letra = {
  //     34: 'A',46: 'B',70: 'C',106: 'D',118: 'E',142: 'F',178: 'G',190: 'H',202: 'I',
  //     226: 'J',262: 'K',278: 'L',302: 'M',338: 'N',350: 'O',374: 'P',410: 'Q',422: 'R',
  //     446: 'S',482: 'T',494: 'U',518: 'V',554: 'W',566: 'X',590: 'Y',626: 'Z',34: 'a',
  //     46: 'b',70: 'c',106: 'd',118: 'e',142: 'f',178: 'g',190: 'h',202: 'i',226: 'j',
  //     262: 'k',278: 'l',302: 'm',338: 'n',350: 'o',374: 'p',410: 'q',422: 'r',446: 's',
  //     482: 't',494: 'u',518: 'v',554: 'w',566: 'x',590: 'y',626: 'z',
  //   };

  //   let msg_descripto = '';
  //   for (let letrad of mensagem) {
  //     if (letrad >= '0' && letrad <= '9') {
  //       // Se a letra for um número, trocar pela correspondente letra na relação
  //       msg_descripto += num_letra[letrad] ? num_letra[letrad] : letrad;
  //     } else {
  //       // Caso contrário, manter a letra original
  //       msg_descripto += letrad;
  //     }
  //   }
  //   return msg_descripto;
  // }

// console.log("==========================");
// const mensagem = prompt("Digite a mensagem criptografada: ");
// const mensagem_descripto = descripto(mensagem);
// console.log("==========================");
// console.log("Mensagem descriptografada:", mensagem_descripto);
}