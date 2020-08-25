const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const dba = require("quick.db");
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

// EMOJİLİ MESAJ \\
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selam') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamun Aleyküm') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamun Aleykum') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamün Aleyküm') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selamün Aleykum') {
        let vUser = msg.member.id;

        const embed = new Discord.RichEmbed()
     .setColor("#76ebed")
    .setAuthor(client.user.username,client.user.displayAvatarURL)
    .setDescription(`<@${vUser}>, Aleyküm Selam Hoşgeldin :)`,true)
    .setTimestamp()
    .setFooter(`KURALLARA UYMAYI UNUTMAYINIZ.!`)
    msg.channel.send(embed);
  }
});
// EMOJİLİ MESAJ \\

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on(`guildMemberAdd`, async member => {
    const e = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setImage(`https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif`)
    .addField(` Sunucumuza Hoşgeldin :) `, `ProNoob`)
    .setFooter(`Hoşgeldin Sistemi`)
    member.send(e);
});
// SEVIYE \\
const db = require('quick.db');
client.on("message", async msg => {
      const emoji = client.emojis.get(':5221_MEE6_LEVLEUP:');
      let guncelseviye = await db.fetch(`seviye_${msg.author.id + msg.guild.id}`,);

      const seviyeatlama = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`
      ${emoji} **Level Atlayan:** <@${msg.author.id}>
      ${emoji} **Level: ** ${guncelseviye}
`);  
  
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    dba.add(`puan_${msg.author.id + msg.guild.id}`, 1);
  }
  
  
  if (dba.fetch(`puan_${msg.author.id + msg.guild.id}`) > 150) {
  
  
  let seviyelog = msg.guild.channels.find(`name`, "「🚨」log");    
  msg.guild.channels.get(seviyelog.id).send(seviyeatlama)
    
    
    dba.add(`seviye_${msg.author.id + msg.guild.id}`, 1);

    dba.delete(`puan_${msg.author.id + msg.guild.id}`);
  }
});
// SEVIYE \\
client.on("guildMemberAdd", async member => {
let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)  
let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)  
if(!sayı || !kanal) return
let sonuç = sayı - member.guild.memberCount
client.channels.get(kanal).send(`${member}, katıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı.`)
})
client.on("guildMemberRemove", async member => {
let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)  
let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)  
if(!sayı || !kanal) return
let sonuç = sayı - member.guild.memberCount
  
client.channels.get(kanal).send(`${member}, ayrıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı.`)
return
})
//otorol
client.on('guildMemberAdd', async(member) => {
  const otorolkanalid = await db.fetch(`otorolkanal_${member.guild.id}`)
  const otorolrolid = await db.fetch(`otorol_${member.guild.id}`)
  const otorolmesaj = await db.fetch(`otorolMesaj_${member.guild.id}`)
  if(!otorolmesaj) {
    const otorolrol = member.guild.roles.get(otorolrolid)
    const otorolkanal = member.guild.channels.get(otorolkanalid);
    otorolkanal.send(`${member} Sunucuya hoşgeldiniz! ${otorolrol.name} adlı rol başarıyla verildi! Sunucunuza özel mesaj ayarlamak için -otorol-mesaj yazabilirsiniz.`)
    member.addRole(otorolrol)
  }
  else {
    const otorolrol = member.guild.roles.get(otorolrolid);
    const otorolkanal = member.guild.channels.get(otorolkanalid);
    const mesajp = otorolmesaj.replace("{üyeEtiket}", member)
    .replace("{üyeAd}", member.user.username)
    .replace("{sunucuAd}", member.guild.name)
    .replace("{üyeSayısı}", member.guild.memberCount)
    otorolkanal.send(mesajp)
    member.addRole(otorolrol)
  }

})
//otorol
//hgbb
client.on("guildMemberAdd", async member => {
 let kanal = await db.fetch(`gelenH_${member.guild.id}`)
 let mesaj = await db.fetch(`hgmesaj_${member.guild.id}`)
  if(!kanal) return;
  if(member.user.bot === true) {
 client.channels.get(kanal).send(`:loudspeaker: :robot: Hoşgeldin! ${member} Sen bir botsun! Seninle beraber **${member.guild.memberCount}** kişiyiz`)    
   } else {
client.channels.get(kanal).send(`:loudspeaker: :inbox_tray: Hoşgeldin! ${member} Seninle beraber **${member.guild.memberCount}** kişiyiz`)
  }
})

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`baybayK_${member.guild.id}`)
  let mesaj = db.fetch(`hgmesaj_${member.guild.id}`)
  if(!kanal) return;
client.channels.get(kanal).send(`:loudspeaker: :outbox_tray: Baybay! **${member.user.username}** sunucudan çıktı. Şuan **${member.guild.memberCount}** kişiyiz`)
}
);
//hgbb
//reklam
client.on("message", async msg => {

    if(msg.author.bot) return;

    if(msg.channel.type === "dm") return;

        

    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`) 

          if (i == 'acik') {

              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];

              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {

                try {

                  if (!msg.member.hasPermission("MANAGE_GUILD")) {

                    msg.delete();                   

                    let embed = new Discord.RichEmbed()

                    .setColor(0xffa300)

                    .setFooter('PRONOOB BOT  -|-  Reklam engellendi.', client.user.avatarURL)

                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)

                    .setDescription("PRONOOB BOT Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")

                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)

                    .addField('Engellenen mesaj', msg.content, true)

                    .setTimestamp()                   

                    msg.guild.owner.user.send(embed)                       

                    return msg.channel.send(`${msg.author.tag}, Burda Reklam Yasak Dostum !`).then(msg => msg.delete(25000));

                  }             

                } catch(err) {

                  console.log(err);

                }

              }

          }

          if (!i) return;

  });
//reklam
//küfür
client.on('message', async message => {
  let ke = await db.fetch(`kufur_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let küfür = ["amk", "amcık", "yarrak", "sik", "amına koyduğum", "kaltak", "yavşak", "orospu", "piç", "ananı sikim", "sikik", "göt", "pezevenk", "gavat", "meme"]
    if (küfür.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Kurucuya gönderdim!!! Bir daha küfür etme!")
        message.guild.owner.send("Sunucunuzda bir kişi küfür etti. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
    
  }
})
//küfür