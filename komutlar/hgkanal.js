const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(" ❗Hoşgeldin kanalını ayarlamak için yeterli yetkin yok")
  let kanal = message.mentions.channels.first();
  
  if(!kanal) return message.channel.send ("	✏️ Baybay kanalını etiketlemedin! Doğru Kullanım: `p!hgkanal #kanal`")
  
  db.set(`gelenH_${message.guild.id}`, kanal.id);
  
  message.channel.send(`☑️ Başarılı! Hoşgeldin kanalını ${kanal} olarak ayarladım.`)
                                                                         
                                                                         
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hgkanal',
  description: 'Hoşgeldin kanalını ayarlamaya yarar',
  usage: 'p!hgkanal #kanal'
};