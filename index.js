const Discord = require("discord.js")
const intents = New Discord.intents(32767)
const client = new Discord.Client({intents,partials: ["CHANNEL","MESSAGE", "GUILD_MEMBER","REACTION"]})
require("dotenv").config()

module.exports = client

const fs = ('fs')

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

['common_handler'].forEach(handler => {
 require(

client.login(process.env.DISCORD_TOKEN)
