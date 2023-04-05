// Função para criptografar

export default function cripUm() {
    
  function cripto(mensagem, chave) {
    let mensagem_cripto = "";
    for (let letra of mensagem) {
        if (letra.match(/[a-z]/i)) {
            let num_letra = letra.charCodeAt(0) + chave;
            // Aplicando a técnica de criptografia cifra de César
            if (letra.match(/[a-z]/)) {
                if (num_letra > 'z'.charCodeAt(0)) {
                    num_letra -= 26;
                } else if (num_letra < 'a'.charCodeAt(0)) {
                    num_letra += 26;
                }
            } else {
                if (num_letra > 'Z'.charCodeAt(0)) {
                    num_letra -= 26;
                } else if (num_letra < 'A'.charCodeAt(0)) {
                    num_letra += 26;
                }
            }
            let nova_letra = String.fromCharCode(num_letra);
            mensagem_cripto += nova_letra;
        } else {
            mensagem_cripto += letra;
        }
    }
    return mensagem_cripto;
  }

  /*
  let mensagem = prompt("Digite a mensagem a ser criptografada: ");
  let chave = 4;
  let mensagem_cripto = cripto(mensagem, chave);
  console.log("////////////////");
  console.log("Mensagem original:", mensagem);
  console.log("Mensagem criptografada:", mensagem_cripto);
  console.log("Chave de criptografia:", chave);
  console.log("////////////////");
  console.log("Guarde essa chave e só passe ela para o destinatário, pois essa chave será essencial para descriptografar a mensagem!");
  */

  // Função para descriptar
  export function descripto(mensagem_cripto_2, chave_2) {
    let mensagem_descripto = "";
    for (let letraDes of mensagem_cripto_2) {
        if (letraDes.match(/[a-z]/i)) {
            // Aplicando a técnica de criptografia cifra de César
            let num_letra_2 = letraDes.charCodeAt(0) - chave_2;
            if (letraDes.match(/[a-z]/)) {
                if (num_letra_2 > 'z'.charCodeAt(0)) {
                    num_letra_2 += -26;
                } else if (num_letra_2 < 'a'.charCodeAt(0)) {
                    num_letra_2 -= -26;
                }
            } else {
                if (num_letra_2 > 'Z'.charCodeAt(0)) {
                    num_letra_2 += -26;
                } else if (num_letra_2 < 'A'.charCodeAt(0)) {
                    num_letra_2 -= -26;
                }
            }
            let letra_original = String.fromCharCode(num_letra_2);
            mensagem_descripto += letra_original;
        } else {
            mensagem_descripto += letraDes;
        }
    }
    return mensagem_descripto;
  }

  /*
  console.log("////////////////");
  let mensagem_cripto_2 = prompt("Digite a mensagem criptografada: ");
  let chave_2 = parseInt(prompt("Digite a chave de criptografia: "));
  let mensagem_descripto = descripto(mensagem_cripto_2, chave_2);
  console.log("//////////");
  console.log("Mensagem descriptografada:", mensagem_descripto);
  */

}