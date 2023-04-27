// Função para verificar se um número é primo
function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

// Função para calcular o maior divisor comum
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Função para calcular o inverso modular
function modInverse(a, m) {
  let m0 = m;
  let y = 0;
  let x = 1;

  if (m === 1) {
    return 0;
  }

  while (a > 1) {
    let q = Math.floor(a / m);
    let t = m;
    m = a % m;
    a = t;
    t = y;
    y = x - q * y;
    x = t;
  }

  if (x < 0) {
    x = x + m0;
  }

  return x;
}
// Função para gerar chaves
function generateKeys() {
  // Escolhendo dois números primos aleatórios
  let p = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  while (!isPrime(p)) {
    p = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  }

  let q = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  while (!isPrime(q) || p === q) {
    q = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  }

  // Calculando n e phi
  const n = p * q;
  const phi = (p - 1) * (q - 1);

  // Escolhendo um número aleatório e calculando o inverso modular
  let e = Math.floor(Math.random() * (phi - 2 + 1)) + 2;
  while (gcd(e, phi) !== 1) {
    e = Math.floor(Math.random() * (phi - 2 + 1)) + 2;
  }
  const d = modInverse(e, phi);

  // Retornando as chaves pública e privada
  const publicKey = [n, e];
  const privateKey = [n, d];

  return [publicKey, privateKey];
}

// Função para criptografar uma mensagem usando a chave pública
function encrypt(publicKey, message) {
  // const encryptedMessage = message.split('').map(char => {
  //   const charCode = char.charCodeAt(0);
  //   const code = BigInt(charCode) ** BigInt(e) % BigInt(n);
  //   console.log(code);
  //   return code;
  // });
  // return encryptedMessage;
  const n = publicKey[0];
  const e = publicKey[1];
  const encryptedMessage = message.split('').map(char => {
    const charCode = char.charCodeAt(0);
    let result = BigInt(1);
    let base = BigInt(charCode) % BigInt(n);
    let exponent = BigInt(e);
    while (exponent > 0) {
      if (exponent % BigInt(2) === BigInt(1)) {
        result = (result * base) % BigInt(n);
      }
      base = (base * base) % BigInt(n);
      exponent = exponent / BigInt(2);
    }
    return result;
  });
  return encryptedMessage;
}

// Função para descriptografar uma mensagem usando a chave privada
function decrypt(privateKey, message) {
  const n = privateKey[0];
  const d = privateKey[1];
  const decryptedMessage = message.map(char => {
    const charCode = Number(BigInt(char) ** BigInt(d) % BigInt(n));
    return String.fromCharCode(charCode);
  });
  return decryptedMessage.join('');
}

// Gerando as chaves
const [publicKey, privateKey] = generateKeys();

export function cripTres(message){
  return encrypt(publicKey, message)
}
export function decripTres(encryptedMessage){
  return decrypt(privateKey, encryptedMessage)
}

/*
// Mensagem a ser criptografada
const message = "abc";

// Criptografando a mensagem
const encryptedMessage = encrypt(publicKey, message);

// Imprimindo a mensagem criptografada
console.log("Mensagem criptografada:");
console.log(encryptedMessage);

// Descriptografando a mensagem
const decryptedMessage = decrypt(privateKey, encryptedMessage);

// Imprimindo a mensagem descriptografada
console.log("Mensagem descriptografada:");
console.log(decryptedMessage);
*/