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


const seucomando = message.content.split("!");
if (seucomando[0] == "!add") {
  var fs = require('fs')
  fs.readFile('./images.json', 'utf-8', function(err, data) {
    if (err) throw err
  
    var arrayOfObjects = JSON.parse(data)
    arrayOfObjects.links.push({
      img: [`https://imgur.com/a/QbMZY, https://imgur.com/a/rYbY6`,]
    })
  
    fs.writeFile('./images.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
      if (err) throw err
    })
  })

    message.reply("Imagem adicionada");
 }


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
