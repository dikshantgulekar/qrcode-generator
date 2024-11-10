const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');
const getLinkBtn = document.getElementById('getLink');
const downloadBtn = document.getElementById('downloadBtn');
const showLinkContainer = document.getElementById('showLink');

let qrCodeUrl = '';

function generateQR(event) {
    event.preventDefault(); 
    console.log('Generating QR code');
    
    if (qrText.value.trim() === '') {
        alert("Please enter a valid text or URL.");
        return;
    }
    
    qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    qrImage.src = qrCodeUrl;
    console.log(qrCodeUrl);

    getLinkBtn.style.display = 'block';
    showLinkContainer.innerHTML = ''; 
    document.getElementById('qrText').innerHTML = '';

}

getLinkBtn.onclick = function() {
    showLinkContainer.innerHTML = `QR Code Link: <a href="${qrCodeUrl}" target="_blank">${qrCodeUrl}</a>`;
};
