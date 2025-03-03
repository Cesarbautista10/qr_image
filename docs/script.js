function generateQR() {
    let url = document.getElementById("urlInput").value;
    if (url.trim() === "") {
        alert("Please enter a valid URL");
        return;
    }

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 800,
        height: 800
    });
}
