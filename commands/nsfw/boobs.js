const superagent = require("snekfetch");
const Discord = require('discord.js')

const rp = require('request-promise-native');


exports.run = async (client, message, args, level) => {
  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {
    message.channel.sendFile(res);
});
}