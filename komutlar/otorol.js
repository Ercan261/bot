const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission('ADMINISRTRATOR')) return message.channel.send("Yönetici yetkisi gerekli.")
  
  const otorolrol = message.mentions.roles.first();
  if (!otorolrol) return message.channel.send("Lütfen bir rol etiketleyiniz.")
  else if(otorolrol) {
    db.set(`otorol_${message.guild.id}`, otorolrol.id)
    message.channel.send(`Otorol rolü başarıyla \`${otorolrol.name}\` olarak kaydedildi!`) //rolü etiketlerse insanlar rahatsız olur .d
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'otorol-rol',
  usage: 'otorol-rol @rol'
}