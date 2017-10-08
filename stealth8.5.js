const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('How to use stealth mode?', 'The stealth mode is not like the old stealth, to make it work you have to actually trigger a transaction. How? Sell a car, pick up some money from a ped etc.')
        .addField('Easiest Way:', '1. Go to Recovery>Stealth Mode>Add Money to: (Bank/cash).\n2. Go to Recovery>Stealth Mode>Amount(How much you get per second)\n3. Go to Recovery>Stealth Mode>Status>"Tick it"\n4. Go to Recovery>Stealth Mode>Self Ped Drop>"tick it" \n\nThat\'s it. Now you will get your custom "amount" per second!')
        .addField('Video Guide:', 'https://imgur.com/AhtBnNh')
        .addField('Note:', 'VIP users get 10mil stealth whilst premium users get 5mil.')
    message.delete();

    message.channel.send({
        embed
    })

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'stealth',
    description: 'stealth for 9.2',
    usage: 'stealth'
};
