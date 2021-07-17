const formularioElement = $("#formulario");
const inputElement = $("#superhero-input");
const requestSection = document.getElementById("request-section");

console.log(formularioElement);

function renderSuperhero(superhero) {
    const imagen = document.getElementById("imagen");
    const nombre = document.getElementById("nombre");

    const publicadopor = $("#publicadopor");
    const ocupacion = $("#ocupacion");
    const aparicion = $("#aparicion");
    const altura = $("#altura");
    const peso = $("#peso");
    const alianza = $("#alianza");

    imagen.setAttribute("src", superhero.image.url);
    nombre.innerHTML = `Nombre: ${superhero.name}`;

    publicadopor.html(superhero.biography.publisher);
    ocupacion.html(superhero.work.occupation);
    aparicion.html(superhero.biography["first-appearance"]);
    altura.html(`${superhero.appearance.height[0]} - ${superhero.appearance.height[1]}`);
    peso.html(`${superhero.appearance.weight[0]} ${superhero.appearance.weight[1]}`);
    alianza.html(`${superhero.biography.aliases.join("-")}`);



    window.onload = function () {

        var options = {
            title: {
                text: "Superhero Grafict"
            },
            subtitles: [{
                text: "As of November, 2017"
            }],
            animationEnabled: true,
            data: [{
                type: "pie",
                dataPoints: [
                    {
                        label: "Inteligencia",
                        y: Number.parseInt(superhero.powerstats.intelligence)
                    },
                    {
                        label: "Fuerza",
                        y: Number.parseInt(superhero.powerstats.strenght)
                    },
                    {
                        label: "Velocidad",
                        y: Number.parseInt(superhero.powerstats.speed)
                    },
                    {
                        label: "Durabilidad",
                        y: Number.parseInt(superhero.powerstats.durability)
                    },
                    {
                        label: "Poder",
                        y: Number.parseInt(superhero.powerstats.power)
                    },
                    {
                        label: "Combate",
                        y: Number.parseInt(superhero.powerstats.combat)
                    },
                ],
            },
            ],
        };      
    
    $("#chartContainer").CanvasJSChart(options);
        
        
    };    
}


formularioElement.submit(function (event) {
    event.preventDefault();

    const idDelSuperHeroe = inputElement.val();

    $.ajax({
        type: "GET",
        dataType: "json",
        url: `https://www.superheroapi.com/api.php/4316299581725921/${idDelSuperHeroe}`,
    }).done(function (data) {
        renderSuperhero(data);

    });
});
