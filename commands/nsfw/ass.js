const superagent = require("snekfetch");
const Discord = require('discord.js')

const rp = require('request-promise-native');


exports.run = async (client, message, args, level) => {
  return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.obutts.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {
    message.channel.sendFile(res);
});
}