console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({

    autoReconnect: true,
    max_message_cache: 0
});
const moment = require('moment');
moment.locale('pt-BR');

const prefix = "-"
const token = process.env.token;

var pornimagens = ["https://i.imgur.com/uimbQhg.jpg", "https://i.imgur.com/GM0ak1Z.jpg", "https://i.imgur.com/UGiY3eM.gif", "https://i.imgur.com/s9WdGZ8.jpg", "https://i.imgur.com/Xtm6mWH.jpg", "https://i.imgur.com/Xtm6mWH.jpg", "https://i.imgur.com/loGAW3x.jpg", "https://i.imgur.com/t0eyCvk.jpg", "https://i.imgur.com/pDwMceQ.jpg", "https://i.imgur.com/eQ3mWm5.jpg", "https://i.imgur.com/IPpcN5W.jpg", "https://i.imgur.com/KHLsHry.jpg", "https://i.imgur.com/upqNF1J.jpg", "https://i.imgur.com/dqUKkf0.jpg", "https://i.imgur.com/klaRXVs.jpg", "https://i.imgur.com/Jn7TKaB.jpg", "https://i.imgur.com/qcHRMWh.jpg", "https://i.imgur.com/eaZiGKk.jpg", "https://i.imgur.com/tkKI9Gw.jpg", "https://i.imgur.com/U9cJlg9.jpg", "https://i.imgur.com/XGq9jgO.jpg", "https://i.imgur.com/M0mTM4k.jpg", "https://i.imgur.com/WLw3MUc.jpg", "https://i.imgur.com/K4IAhyy.jpg", "https://i.imgur.com/LFbXZG1.jpg", "https://i.imgur.com/6xp9ZzW.jpg", "https://i.imgur.com/wphpIeT.jpg", "https://i.imgur.com/1eKB4OR.jpg", "https://i.imgur.com/mrY4THg.jpg", "https://i.imgur.com/3dM3yR2.jpg", "https://i.imgur.com/dvNdOq2.jpg", "https://i.imgur.com/mqJp4Yc.jpg", "https://i.imgur.com/BjPS6n8.jpg", "https://i.imgur.com/ssihdHn.jpg", "https://i.imgur.com/ZIb9RjU.jpg", "https://i.imgur.com/znEe7jC.jpg", "https://i.imgur.com/cZfYPlu.jpg", "https://i.imgur.com/Fq2KuoU.jpg", "https://i.imgur.com/f4D5iGG.jpg", "https://i.imgur.com/UQMJUti.jpg", "https://i.imgur.com/OJFzAlH.jpg", "https://i.imgur.com/QLNkXZB.jpg", "https://i.imgur.com/eqr3L8q.jpg", "https://i.imgur.com/i1VcEOK.jpg", "https://i.imgur.com/uVeYLc6.jpg", "https://i.imgur.com/ZPVSdck.jpg", "https://i.imgur.com/GkkeZpv.jpg", "https://i.imgur.com/pxoq0uC.jpg", "https://i.imgur.com/Myn9adI.jpg", "https://i.imgur.com/4O73FQb.jpg", "https://i.imgur.com/NPTv0E5.jpg", "https://i.imgur.com/FytS8jB.jpg", "https://i.imgur.com/TMWPAJw.jpg", "https://i.imgur.com/kZrYfcr.jpg", "https://i.imgur.com/ILr4jKr.jpg", "https://i.imgur.com/Gfe4LNW.jpg", "https://i.imgur.com/Pb1h8F4.jpg", "https://i.imgur.com/VMixbuR.jpg", "https://i.imgur.com/PYB5Gtd.jpg", "https://i.imgur.com/z1UeNx7.jpg", "https://i.imgur.com/JBVobBs.jpg", "https://i.imgur.com/MmRqPkS.jpg", "https://i.imgur.com/tlqGyAX.jpg", "https://i.imgur.com/amdSvYi.jpg", "https://i.imgur.com/nnXRB02.jpg", "https://i.imgur.com/5pUTfuq.jpg", "https://i.imgur.com/dsJXRAB.jpg", "https://i.imgur.com/wnBgWtH.jpg", "https://i.imgur.com/1SLzJBv.jpg", "https://i.imgur.com/UzTV6u4.jpg", "https://i.imgur.com/Anbxmgy.jpg", "https://i.imgur.com/jnflwKy.jpg", "https://i.imgur.com/C3I8ykC.jpg", "https://i.imgur.com/kD8JQQ6.jpg", "https://i.imgur.com/bSP6gv2.jpg", "https://i.imgur.com/XcoxRWk.jpg", "https://i.imgur.com/KMxZgmJ.jpg", "https://i.imgur.com/3kPyQP8.jpg", "https://i.imgur.com/n9BKQaj.jpg", "https://i.imgur.com/utboNrm.jpg", "https://i.imgur.com/vpRdyKm.jpg", "https://i.imgur.com/pNo3ydp.jpg", "https://i.imgur.com/uRPE2OO.jpg", "https://i.imgur.com/9tgJ4NV.jpg", "https://i.imgur.com/slK4Dhb.jpg", "https://i.imgur.com/1EbV3St.jpg", "https://i.imgur.com/hWG9ivd.jpg", "https://i.imgur.com/fNqOr0M.jpg", "https://i.imgur.com/MxHix5V.jpg", "https://i.imgur.com/GdQ7WyA.jpg", "https://i.imgur.com/fLs9cyN.jpg", "https://i.imgur.com/DTgpiAo.jpg", "https://i.imgur.com/SUnwArN.jpg", "https://i.imgur.com/TDK9CsU.jpg", "https://i.imgur.com/B6N2Zc9.jpg", "https://i.imgur.com/80cb0Cj.jpg", "https://i.imgur.com/TNrmMf0.jpg", "https://i.imgur.com/rTR97UD.jpg", "https://i.imgur.com/uU4tns7.jpg", "https://i.imgur.com/1hHS2Wn.jpg", "https://i.imgur.com/OAT1FvX.jpg", "https://i.imgur.com/dGOT978.jpg", "https://i.imgur.com/NzH9Hcd.jpg", "https://i.imgur.com/TExVOhB.jpg", "https://i.imgur.com/JlU4Phb.jpg", "https://i.imgur.com/pS60Nop.jpg", "https://i.imgur.com/YL2I3Rp.jpg", "https://i.imgur.com/9Wr97Uh.jpg", "https://i.imgur.com/DYl1u7W.jpg", "https://i.imgur.com/zldDJXE.jpg", "https://i.imgur.com/w7THCJR.jpg", "https://i.imgur.com/AZ0Wmsk.jpg", "https://i.imgur.com/QdX5NU3.jpg", "https://i.imgur.com/S6kNY83.jpg", "https://i.imgur.com/kJFURya.jpg", "https://i.imgur.com/xT0rXLa.jpg", "https://i.imgur.com/jjIi3Sl.jpg", "https://i.imgur.com/epfWPdV.jpg", "https://i.imgur.com/pYpsYM7.jpg", "https://i.imgur.com/yZ7kUG6.jpg", "https://i.imgur.com/edLJIVB.jpg", "https://i.imgur.com/jbWohll.jpg", "https://i.imgur.com/QDfBkb3.jpg", "https://i.imgur.com/qmrn49C.jpg", "https://i.imgur.com/mZMRusj.jpg", "https://i.imgur.com/imzKeUv.jpg", "https://i.imgur.com/cjrpEzW.jpg", "https://i.imgur.com/wsv3x1j.jpg", "https://i.imgur.com/STcluSu.jpg", "https://i.imgur.com/mdKU5xR.jpg",] 
var porngifs =    ["http://78.media.tumblr.com/tumblr_m9t033r5h81rpancno1_500.gif", "http://78.media.tumblr.com/41b4b734f18238987927b3a25efda33d/tumblr_nzyiw35izz1uuya3go1_500.gif", "http://78.media.tumblr.com/c62af3cd8e6eef339cd7678f11d7bb5c/tumblr_nzqo3fgqU81ux5p3po1_500.gif", "http://78.media.tumblr.com/69b5d774925b3c0abf0c0763d71e083e/tumblr_nzqo9u4th31ux5p3po1_500.gif", "http://78.media.tumblr.com/48998ac9c3e6946b190479a8a2e28a8b/tumblr_nznptuL5Lr1rx5y5ko1_500.gif", "http://78.media.tumblr.com/5908b99ac9728a3eca66df0e3343b22a/tumblr_nzu56usoxs1u2s3z9o1_500.gif", "http://78.media.tumblr.com/effdf778b93e41d10359a4937d3ffb8a/tumblr_nxviazcVVL1uhm7wco1_500.gif", "http://78.media.tumblr.com/fae53b85268e4c11eb821e721653d4b6/tumblr_nj4hsbY6Pa1s3ogwto1_500.gif", "http://78.media.tumblr.com/abb1e0bc2a936f49c5695bd676212efe/tumblr_nzuftomWps1umggj7o1_500.gif", "http://78.media.tumblr.com/23571d026f8bf50d876cdbd9faf88071/tumblr_nzufut6PwH1umggj7o1_400.gif",] 

client.on("ready", () => {

    let string = ''
    for (var i = 0; i < client.guilds.size; i++) {

       string += "     - " + client.guilds.array()[i].name + " ( " + client.guilds.array()[i].members.size + " usuários ),\n";
    }

    const servidores = string
    var statusIDO = ["dnd", "online", ]
    var jogando = [`Brasil Porn ™ ${client.users.size} usuários, Em  ${client.guilds.size} Servidores.`, `Digite -help para ver meus comandos, estou em fase de desenvolvimento.`, `Entre em meu servidor de suporte, use: -convite`,]

    
    
    console.log(`Conectado !`)
    setTimeout(function() {
        console.log(`                   ---== Brazil +18 ==---                 \n\Servidores: (${client.guilds.size}):\n\n${servidores}`);
    }, 2000)
    client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/zmarciogod");
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    setInterval(() => {
        client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/zmarciogod");
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)
    
});

client.login(token)

const comandos = {
    brporn: {
        desc: 'Envia uma imagem pornô',
        nsfw: true,
        exec: (message) => {
            return message.channel.send({
                files: [pornimagens[Math.round(Math.random() * pornimagens.length - 1)]]
            });
        }
    },
    brgif: {
        desc: 'Envia um GIF pornô',
        nsfw: true,
        exec: (message) => {
            return message.channel.send({
                files: [porngifs[Math.round(Math.random() * porngifs.length - 1)]]
            });
        }
    },
    convite: {
        desc: 'Envia o convite para meu servidor',
        nsfw: false,
        exec: (message) => {
            return message.member.send("```Entre em meu servidor de suporte```: https://discord.gg/swacvgR");
          }
    },
    invite: {
        desc: 'me convida para seu servidor.',
        nsfw: false,
        exec: (message) => {
            return message.member.send("```Me adicione em seu servidor:``` https://discordapp.com/oauth2/authorize?client_id=429844304823844874&scope=bot&permissions=8");
         }
    },
    help: {
        hidden: true,
        nsfw: false,
        exec: (message) => {
            return message.channel.send({
                embed: {
                   description: `${'ㅤ'.repeat(7)}**Comandos**${'ㅤ'.repeat(7)}\n${Object.keys(comandos).filter(k => !comandos[k].hidden).map(k => `\`${prefix}${k}\` - ${comandos[k].desc}`).join('\n')}`,
                    color: 16711680,
                    thumbnail: {
                        url: 'https://i.imgur.com/TPEgoSy.jpg'
                    }
                }
            });
        }
    }
};

client.on("message", (message) => {
    if (message.author && message.author.bot) return;
    
    if (message.content.startsWith(prefix)) {
        let name = message.content.split(' ')[0].slice(prefix.length),
            suffix = message.content.split(' ').slice(1).join(' ');
        if (name in comandos || (Object.keys(comandos).find(k => comandos[k].aliases || []).includes(name))) {
            if (message.guild && !message.channel.nsfw && comandos[name].nsfw !== false)
                return message.reply('Esse comando só pode ser usado em canais NSFW');
            return comandos[name].exec(message, suffix);
        }
    }
});
