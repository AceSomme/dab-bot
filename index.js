const Discord = require('discord.js')
const client = new Discord.Client
const config = require('./config.json')

client.on('message', message => {
    let word = ['dab', "d a b", "da b", "d ab"]
    let founddab = false;
    for (var i in word){
        if(message.content.toLowerCase().includes(word[i].toLowerCase())) founddab = true;
    }
    if(founddab = true){
        if(message.author.bot){
            return
        }else{
        message.channel.send('I love dabbing')
        let names = ["dab1.jpg", "dab2.gif", "dab3.jpg", "dab4.jpg", "dab5.png"]
        let random = Math.floor(Math.random() * Math.floor(names.length))
        message.channel.send(names[random])
        }
    }
})

client.login(config.token)