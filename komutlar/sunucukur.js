const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "541195486288150528") {
        
        message.channel.send(':1234: **Sunucu hazırlanıyor...**');
        
        message.guild.createChannel(':speech_balloon:chat†');
        
        message.guild.createChannel(':hibiscus:bot-commads†');
        
        message.guild.createChannel(':camera_with_flash:ss chat†');
    
        message.guild.createChannel(':gem:partner†');
      
        message.guild.createChannel(':scroll:-kurallar†');
      
        message.guild.createChannel(':loudspeaker:anons†');
      
        message.guild.createChannel(':crescent_moon:| Kurucu Room', 'voice');;
        
        message.guild.createChannel(':trophy:| Genel Yönetim', 'voice');
        
        message.guild.createChannel(':cherry_blossom: | Łádýs', 'voice');
        
        message.guild.createChannel('♧ | Sohbet†', 'voice');
        
        message.guild.createChannel('ϟ | Sohbet†', 'voice');
       
        message.guild.createChannel('♧| Sohbet†', 'voice');

        message.channel.send(':white_check_mark: **Kanallar Kuruldu**');
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu kullanmak için yetkin yok!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazırsunucu',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'hazırsunucu'
};