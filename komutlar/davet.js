const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Aşşağıdaki linkler hoşuna gidebilir x2

[Bot Davet](https://discord.com/api/oauth2/authorize?client_id=735925529504514120&permissions=8&scope=bot)  
[Destek Sunucusu](https://discord.gg/EmpR9d)`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}