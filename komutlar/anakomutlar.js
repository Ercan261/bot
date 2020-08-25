const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('PRONOB yardım menüsü')
    .setAuthor(`PRONOOB`, client.user.avatarURL) 
      .setDescription('**[destek sunucumuz](https://discord.gg/rWKtcu8)**')
.setThumbnail(client.user.avatarURL)
      .addField('** Ana Komutlar **', '`l/sayaç`, `l/sayaç-kapat,` `l/otorol-rol`, `l/otorol-kanal`, `l/otorol-mesaj`,  `l/seviye-ekle`, `l/seviye-sil`,   `l/reklamtaraması`, `l/kilit`,`l/çekiliş`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'anakomutlar',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};