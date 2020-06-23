const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

/////////////////////////////BOT REAL///////////////////////////////////

const { Client, MessageEmbed } = require("discord.js");
const client = new Client();


function presence(){
    client.user.setPresence({
        status: "online",
        activity:{
            name: "BOT ASISTENTE",
            type: "WATCHING"
        }
    });
}

client.on("ready", () => {
    console.log("Estoy listo!");
    presence();
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("hola")) {
     message.channel.send("¡¡¡Bienvendo al servidor!!!");
   }
 
 });

client.on("message", message => {
    if(message.content.startsWith("/mencion")){
        if (message.channel.id === "708047772405727272"){
          message.delete();
            let user = message.mentions.users.first();
            user.send(message.author.username)
          user.send("Te a mencionado en el servior, alomejor necesita ayuda")
            message.channel.send("Enviando mensaje....").then(msg => msg.delete({timeout: 3000}));
          
          message.channel.send("Mensaje enviado!").then(msg => msg.delete({timeout: 4000}));

        }
         else {
             message.channel.send("No se puede mencionar a nadie en este canal").then(msg => msg.delete({timeout: 5000}));
             message.delete();
         } 
    
    }   
});
 


client.on("message", message => {
    if(message.content.startsWith("/participo")){
        message.member.roles.add("708048261424087047");
        message.delete();
        message.channel.send("Peteción recibida ;D").then(msg => msg.delete({timeout: 5000}));
        let user = message.mentions.users.first();
        user.send("Seras avisado si eres apto pronto. Espera con paciencia.");

    }
});
 


  client.on("message", message => {
      if(message.content.startsWith("/aviso")){
        message.member.roles.add("724389058876407828");
        message.delete();
          let user = message.mentions.users.first();
          message.channel.send("El usuario <@"+ user.id + "> sera avisado por mala conducta").then(msg => msg.delete({timeout: 5000}));
          user.send("Un usuario a reportado tu mala conducta. Quedas avisado que a la proxima te pueden expulsar del servidor. (Si el reporte es falso contacta con los moderadores por el soporte)")
      }

  });

client.on("message", (message) => {
    if(message.content.startsWith("/yt mario")) {
      message.channel.send("https://www.youtube.com/channel/UC0eusF5cQQLmCffvV2H2OxA");
    }
  
  });

client.on("message", (message) => {
    if(message.content.startsWith("Hola")) {
      message.channel.send("¡¡¡Bienvendo al servidor!!!");
    }
  
  });

 client.on("message", message => {
      if(message.content.startsWith("/invitacion")){
         message.channel.send("Invitacion: https://discord.gg/V6Xteg")
      }
  });

 client.on("message", message =>{
      if(message.content === ("-embed")){
          const embed =new MessageEmbed()
          .setTitle(" INFORMACIÓN DEL BOT")
          .setAuthor(message.member.displayName, message.author.displayAvatarURL())
          .setColor(0xE964ED)
          .setDescription("Descripcion de las caracteristicas del bot")
          .addField("Version del Bot", "1.1.2")
          .addField("Creador de Bot", "Sergio Gutiérrez")
          .addField("Nueva Actualizacion", "Lunes 29 de Junio de 2020");
          message.channel.send(embed);
      }
  });

 client.on("message", (message) => {
    if(message.content.startsWith("!info")) {
      message.channel.send("-embed").then(msg => msg.delete({timeout: 1}));
    }
  
  });


 
 client.login("NzIzOTIyNjcxMjkyNjQ1NDE5.Xu4tAg.JJtoQpCvqq0wkNarMdCTf2H3QbQ");
