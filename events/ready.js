const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  client.user.setStatus("online");
  var oyun = ["!language - 2 Languages!", "!help - !yardım", "!invite - !davet", "Guard BOT | Always Service!"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * oyun.length+0);
    client.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
};
