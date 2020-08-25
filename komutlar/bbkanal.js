 const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("⛔ Baybay kanalını ayarlamak için **Sunucuyu Yönet** yetkisine sahip olmalısın!")
  
let kanal = message.mentions.channels.first();
  
if(!kanal) return message.channel.send ("	✏️ Baybay Kanalın etiketlemedin! Doğru kullanım: `bbkanal #kanal`")
  
db.set(`baybayK_${message.guild.id}`, kanal.id);

message.channel.send(`☑️ Başarılı! Baybay kanalını ${kanal} olarak ayarladım.`)                                                                                                                                         
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['baybaykanal','bb-kanal'],
permLevel: 0
};
exports.help = {
name: 'bbkanal',
description: 'Baybay kanalını ayarlamaya yarar.',
usage: 'bbkanal #kanal'
};