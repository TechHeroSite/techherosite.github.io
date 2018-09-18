var Eris = require('eris');
var bot = new Eris("NDkxNDA3MTY1MDk4Mjk1MzE2.DoHacQ.8R1f7H0Pydu8WU3bM6XLsXsYNMY");

bot.on("ready", () => {
	console.log("Estou pronto.");
});

bot.on("messageCreate", (msg) => {
	if(msg.content.indexOf(">youtube") == 0){
		bot.createMessage(msg.channel.id, "https://www.youtube.com/channel/UCRx7mA0dBdqeW-xE3ftczrA");
	}
});

bot.on("messageCreate", (msg) => {
	if(msg.content.indexOf(">twitter") == 0){
		bot.createMessage(msg.channel.id, "https://twitter.com/TechHero_");
	}
});

bot.on("messageCreate", (msg) => {
	if(msg.content.indexOf(">7") == 0){
		bot.createMessage(msg.channel.id, "https://gamejolt.com/games/helpysadventure/368451");
	}
});

bot.on("messageCreate", (msg) => {
	if(msg.content.indexOf(">gamejolt") == 0){
		bot.createMessage(msg.channel.id, "https://gamejolt.com/@TechHero");
		
	}
});

bot.on("messageCreate", (msg) => {
	if(msg.content.indexOf(">help") == 0){
		bot.createMessage(msg.channel.id, "Lista de comandos:\n\n>youtube - Meu canal do YouTube\n>twitter - Meu Twitter\n>gamejolt - Minha perfil na GameJolt\n~~>7~~");
	}
});

bot.connect();