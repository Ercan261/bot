const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async(client, message, args) => {
  
    if(!message.member.hasPermission('ADMINISRTRATOR')) return message.channel.send("Yönetici yetkisi gerekli.")

const kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send("Lütfen bir kanal etiketleyin.")

db.set(`otorolkanal_${message.guild.id}` , kanal.id)
  
  message.channel.send(`Otorol kanalı başarıyla ${kanal} olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'otorol-kanal',
  usage: 'otorol-kanal #kanal'
}