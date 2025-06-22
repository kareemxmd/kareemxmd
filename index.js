const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'],
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan the QR Code above with WhatsApp!');
});

client.on('ready', () => {
    console.log('✅ Bot is ready!');
});

client.on('message', message => {
    if (message.body === '!menu') {
        message.reply('👋 Hello Kàrèèm_Wèst💔! Hii ni menu yako ya commands:\n\n1. !menu\n2. !info\n3. !status');
    } else if (message.body === '!info') {
        message.reply('🔧 Hii ni sample WhatsApp bot made by XMD_TECH!');
    } else if (message.body === '!status') {
        message.reply('✅ Bot iko hewani, Karibu!');
    }
});

client.initialize();