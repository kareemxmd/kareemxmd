
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('✅ QR Code ready. Scan it now with your WhatsApp.');
});

client.on('ready', () => {
    console.log('🤖 Kàrèèm_Wèst💔-XMD-TECH🌍 BOT is ready!');
});

client.on('message', async (message) => {
    const msg = message.body.toLowerCase();

    if (msg === 'menu') {
        message.reply(`🌍 *Kàrèèm_Wèst💔-XMD-TECH🌍 Command List*

1. *menu* - Angalia list ya commands zote
2. *msaidie* - Pata msaada wa kutumia bot hii
3. *hali* - Bot itakuambia hali yake
4. *link* - Inatoa link muhimu
5. *msaada* - Maelekezo ya bot
6. *nani* - Inaelezea bot hii ni ya nani
7. *owner* - Inakuonyesha jina la developer
8. *about* - Maelezo mafupi ya bot hii
9. *time* - Inaonyesha saa na tarehe
10. *grouplink* - Inatoa link ya group
11. *random* - Inatoa ujumbe random wa motisha

_Bot made by: Kàrèèm_Wèst💔-XMD-TECH🌍_
        `);
    } else if (msg === 'nani') {
        message.reply('Mimi ni bot ya WhatsApp iliyotengenezwa na Kàrèèm_Wèst💔-XMD-TECH🌍');
    } else if (msg === 'owner') {
        message.reply('👤 Owner: Kàrèèm_Wèst💔-XMD-TECH🌍');
    } else if (msg === 'time') {
        const now = new Date();
        message.reply('🕒 Sasa ni: ' + now.toLocaleString());
    }
});

process.on('unhandledRejection', error => {
    console.error('🚨 Unhandled Rejection:', error);
});

client.on('auth_failure', msg => {
    console.error('❌ AUTHENTICATION FAILURE:', msg);
});

client.on('disconnected', reason => {
    console.log('⚠️ DISCONNECTED:', reason);
});

client.initialize();
