const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('PRONOB yardım menüsü')
    .setAuthor(`PRONOOB`, client.user.avatarURL) 
      .setDescription('**[destek sunucumuz](https://discord.gg/BR9Rtjy)**')
.setThumbnail(client.user.avatarURL)
      .addField('** Kullanıcı Komutlar **', '`p!sıralama`, `p!davet-sıralması`, `p!davet-sayım`, `p!seviye`,    `p!davet-sayım`, `p!botbilgi`, `p!rolinfo`,`p!hava`,`p!davet`')
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
    name: 'kullanıcı',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};