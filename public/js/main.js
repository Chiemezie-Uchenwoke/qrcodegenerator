document.getElementById("generateBtn").addEventListener("click", async () => {
    const inputData = document.getElementById("inputData").value.trim();
    if (!inputData) {
        alert("Please enter a URL or phone number");
        return;
    }

    const response = await fetch(`https://qrcodegenerator-i575.onrender.com/generate?data=${encodeURIComponent(inputData)}`);
    const qrImageUrl = await response.text();

    const qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = `<img src="${qrImageUrl}" alt="QR Code">`;

    // Show the download button
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.style.display = "block";

    // Enable download functionality
    downloadBtn.onclick = () => {
        const link = document.createElement("a");
        link.href = qrImageUrl;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
});
