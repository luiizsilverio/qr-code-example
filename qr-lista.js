const main = document.querySelector('main.container');

main.innerHTML = '';

var create_qrcode = function(text) {
    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(text);
    qr.make();
//  return qr.createTableTag();
//  return qr.createSvgTag();
    return qr.createImgTag();
};

for (let i = 1000; i < 1250; i++) {
/*
  const randomNumber = Math.floor(Math.random() * 200) + 1; // gera um número aleatório entre 1 e 100
  const text = randomNumber.toString();

  const qr = QRCode(0, 'L'); // cria um novo código QR
  qr.addData(randomNumber.toString()); // adiciona o número aleatório como dados do QR
  qr.make(); // gera o código QR

  // const qrImage = qr.createDataURL(); // converte o código QR em uma imagem em formato base64
  // faça algo com a imagem, como salvá-la em um arquivo ou exibi-la em uma página da web
*/

    const text = i.toString().padStart(4,'0');
    const div = document.createElement('div');
    div.classList.add('qrcode');
    div.innerHTML = create_qrcode(text);
    main.appendChild(div);
}
