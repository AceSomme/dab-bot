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
            let names = ["rg1ymsn.jpeg", "F5kvlmc.gif", "bz7oWlZ.jpeg", "cW3586q.jpeg", "C5OLoOt.png"]
        let random = Math.floor(Math.random() * Math.floor(names.length))
        const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle('I love dabbing')
            .setURL('https://i.imgur.com/'+names[random])
            .setImage('https://i.imgur.com/'+names[random])
        message.channel.send(exampleEmbed)
        }
    }
})

client.login(config.token)