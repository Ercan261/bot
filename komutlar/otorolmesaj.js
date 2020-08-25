const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async function(client, message, args) {
  
    if(!message.member.hasPermission('ADMINISRTRATOR')) return message.channel.send("Yönetici yetkisi gerekli.")

  const mesaj = args.slice(0).join(" ");
  if(!mesaj) message.channel.send("Lütfen bir mesaj yazınız.\n\n`{üyeEtiket}`: Sunucuya giren kişiyi etiketler.\n" +
                                 "`{üyeAd}`: Sunucuya giren kişinin adını gösterir.\n" +
                                 "`{sunucuAd}`: Sunucunun adını gösterir.\n" +
                                 "`{üyeSayısı}`: Sunucudaki üye sayısını gösterir.")
  else {
    await db.set(`otorolMesaj_${message.guild.id}`, mesaj)
    const mesajp = mesaj.replace("{üyeEtiket}", message.author)
    .replace("{üyeAd}", message.author.username)
    .replace("{sunucuAd}", message.guild.name)
    .replace("{üyeSayısı}", message.guild.memberCount)
    const embed = new Discord.RichEmbed()
      .setTitle("Başarılı")
      .setColor("GREEN")
      .setFooter("PRONOOB Oto Rol Sistemi")
      .setDescription(`Mesaj başarıyla ayarlandı.`)
      .addField(`Görünüm`, mesajp)
    message.channel.send(embed)
  }
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'otorol-mesaj',
  usage: 'otorol-mesaj <mesaj>'
}