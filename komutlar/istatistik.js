const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.RichEmbed()
    .setColor("#C71585")
    .setAuthor(`${client.user.username}`, client.user.avatarURL) 
  .setDescription("PRONNOB İstatistik ")
    .setThumbnail(client.user.avatarURL)
  .addField("**Ekli olan sunucu sayısı:**", `${client.guilds.size.toLocaleString()} sunucu`)
  .addField("**Toplam Kullanıcı Sayısı**:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcı`)
  .addField("**Kanal Sayısı:**", `${client.channels.size.toLocaleString()} kanal`)
  .addField("**Ping:**", `${client.ping} ms`)
    .setFooter(`${client.user.username}`, client.user.avatarURL) 
    .setTimestamp()
  message.channel.sendEmbed(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botinfo","bot-bilgi","bot-info"],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'Botun Bilgilerini gösterir.',
  usage: '-botbilgi'
};