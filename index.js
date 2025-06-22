
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Kàrèèm_Wèst💔-XMD-TECH🌍 BOT is ready!');
});

client.on('message', async (message) => {
    if (message.body.toLowerCase() === 'menu') {
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
    } else if (message.body.toLowerCase() === 'nani') {
        message.reply('Mimi ni bot ya WhatsApp iliyotengenezwa na Kàrèèm_Wèst💔-XMD-TECH🌍');
    } else if (message.body.toLowerCase() === 'owner') {
        message.reply('👤 Owner: Kàrèèm_Wèst💔-XMD-TECH🌍');
    } else if (message.body.toLowerCase() === 'time') {
        const now = new Date();
        message.reply('🕒 Sasa ni: ' + now.toLocaleString());
    }
});
client.initialize();
