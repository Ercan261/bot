const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('LEGEND yardım menüsü')
    .setAuthor(`LEGEND`, client.user.avatarURL) 
      .setDescription('**[destek sunucumuz](https://discord.gg/BR9Rtjy)**')
.setThumbnail(client.user.avatarURL)
      .addField('** Kullanıcı Komutlar **', '`p!mute`, `p!ban` `p!kick`, `p!unban`,    `p!duyuru`, `p!duyuru-kanal-ayarla`, `p!uyar`,`p!reklam-engelleme`,`p!küfür-engel,`p!seviye-ekle`,`p!seviye-sil`')
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
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};