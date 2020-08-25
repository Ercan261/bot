const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`PRONOOB`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discord.com/api/oauth2/authorize?client_id=735925529504514120&permissions=8&scope=bot) | [DestekSunucu](https://discord.gg/BR9Rtjy)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`PRONOOB - Yardım`, `:white_small_square: | **l/anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **l/eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **l/yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **l/kullanıcı**: Kullanıcılar için komutlar. |`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };