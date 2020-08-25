const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('PRONOB yardım menüsü')
    .setAuthor(`PRONOOB`, client.user.avatarURL) 
      .setDescription('**[destek sunucumuz](https://discord.gg/BR9Rtjy)**')
.setThumbnail(client.user.avatarURL)
      .addField('** Kullanıcı Komutlar **', '`l/korkut`, `l/zula-deste-aç,` `l/alkış`, `l/aşkölçer`,    `l/yazı-banner`, `l/atla`, `l/espri`,`l/kelime-tahmini`,`l/öp``l/mcödül`')
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
    name: 'eğlence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};