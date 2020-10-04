const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  
  const ownerID = '480397313567752193'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:check:762328940059951135> Added ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
  name:"add",
  aliases: ["am"]
}
