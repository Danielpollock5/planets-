var planets = [
	{
		planet: "mercury",
		size: "The Size of 1,516 mi",
		info: "is the smallest and fastest planet in the solar system. It is also the closest planet to the sun. It is named after the Roman messenger god Mercury, the fastest Roman god. The planet Mercury was known by ancient people thousands of years ago.",
		image: "img/mercury.png"
	},
	{
		planet: "venus",
		size: "3,760 mi",
		info: "One day on Venus is longer than one year. Due to the slow rotation on its axis, it takes 243 Earth days to complete one rotation. The orbit of the planet takes 225 Earth-days, making a year on Venus shorter on day on Venus. Venus is named after the Roman goddess of love and beauty.",
		image: "img/venus.png"	
	},
	{
		planet: "earth",
		size: "3,959 mi",
		info: "Earth, otherwise known as the World or the Globe, is the third planet from the Sun and the only object in the Universe known to harbor life. It is the densest planet in the Solar System and the largest of the four terrestrial planets.",
		image: "img/earth.png"
	},
	{
		planet: "mars",
		size: "2,106 mi",
		info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the Red Planet because the iron oxide prevalent on its surface gives it a reddish appearance.",
		image: "img/mars.png"
	},
	{
		planet: "jupiter",
		size: "43,441 mi",
		info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined.",
		image: "img/jupiter.png"
	},
	{
		planet: "saturn",
		size: "36,184 mi",
		info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",
		image: "img/saturn.png"
	},
	{	
		planet: "uranus",
		size: "15,759 mi",
		info: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
		image: "img/uranus.png"
	},
	{
		planet: "neptune",
		size: "15,299 mi",
		info: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet",
		image: "img/neptune.png"
	},
	{
		planet: "pluto",
		size: "737.6 mi",
		info: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered. Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered to be the ninth planet from the Sun",
		image: "img/pluto.png"
	}
]


function getInfo() {
	var userInput = document.getElementById("pInput").value
	var userInput = userInput.toLowerCase()

	for (var i = 0; i < planets.length; i++) {
		if (userInput == planets[i].planet) {
			document.getElementById("p").innerHTML = planets[i].planet
			document.getElementById("pSize").innerHTML=planets[i].size
			document.getElementById("pSize").style.visibility = "visible";
			document.getElementById("info").innerHTML = planets[i].info
			document.getElementById("info").style.visibility = "visible";
			document.getElementById("planetImg").src = planets[i].image
			return
		}
		else{
			document.getElementById("pInput").classList.add("showInfo");
			document.getElementById("p").innerHTML = userInput.toLowerCase() + " does not yet exist!";
			document.getElementById("pSize").style.visibility = "hidden";
			document.getElementById("info").style.visibility = "hidden";
			document.getElementById("planetImg").src = "img/unknown.jpg";

		}
	}
}
document.getElementById("pInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button").click();
    }
});









