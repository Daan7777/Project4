fetch("https://minecraft-server-status1.p.rapidapi.com/servers/single/full", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "minecraft-server-status1.p.rapidapi.com",
		"x-rapidapi-key": "9b3d94fd5dmsh7a47ad0245605c6p1a2698jsnba06a2a5d08a"
	},
	"body": {
    "host": "mc.hypixel.net",
    "port": 25565,
    "type": "java",
    "legacy": false
  }
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});