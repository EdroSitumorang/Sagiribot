const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  try {

    const bicon = client.user.displayAvatarURL();
    const botembed = new Discord.MessageEmbed()
      .setColor(client.warna.kato)
      .setThumbnail(bicon)
      .addField("Nama", "Wutt")
      .addField("Tanggal Lahir", "23 November")
      .addField("Pemilik", "Wutt#5987")
      .addField("Bahasa", "Discord.JS dengan NodeJS")
      .addField("Motto", "Bagi Steam Wallet")
      .addField("Terima Kasih Kepada", "LOG Server yang udah bantu buat")
      .addField("Tim Pengembang", "LOG Family  ")
      .setFooter("Stable Release | Wutt#5987")
      .setAuthor(message.guild.name, message.guild.iconURL())
    message.channel.send(botembed);
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["kato"],
  cooldown: 5
}

exports.help = {
  name: 'about',
  description: 'melihat tentang Kato-Bot',
  usage: 'k!about',
  example: 'k!about'
}