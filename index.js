const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#";
client.on("message", function(message) {
	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;
	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	if(command === "doubt"){
	const timeTaken = Date.now() - message.createdTimestamp;
	message.reply('Fill this for (url), you will added to doubt solving channel when our experts will notice your question');

}

});
client.login(process.env.token);

