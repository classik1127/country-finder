const params = new URLSearchParams(window.location.search)

const countrysearch = params.get("country");

const result = document.getElementById("resultname");
result.textContent = countrysearch;

document.addEventListener("DOMContentLoaded", fetch)
// for switching page back to home

function switchpage() {
    window.location.href = "index.html";
}

const notfound = document.getElementById("notfound");
const found = document.getElementById("found");
            found.style.display = "flex";


// for page with result

const continet = document.getElementById("continet");
const countryname = document.getElementById("countryname");
const maplink = document.getElementById("maplink");
const capitalname = document.getElementById("capitalname");
const Population = document.getElementById("Population");
const Area = document.getElementById("Area");
const Timezone = document.getElementById("Timezone");
const Languages = document.getElementById("Languages");
const Currencies = document.getElementById("Currencies");
const Neighborone = document.getElementById("Neighborone");
const Neighbortwo = document.getElementById("Neighbortwo");
const Neighborthree = document.getElementById("Neighborthree");
const Neighborfour = document.getElementById("Neighborfour");

const countryflag = document.getElementById("countryflag");


console.log(countrysearch);
let newcon = countrysearch;
    try {
         fetch(`https://restcountries.com/v3.1/name/${newcon}`)
            .then(Response => Response.json())
            .then(data  => {
                let datainfo = data[0];
                console.log(datainfo)
                console.log(datainfo.currencies)

                
                                countryflag.alt  = datainfo.flags.alt ;
                                
                                countryflag.src  = datainfo.flags.png ;
                continet.textContent = datainfo.continents;
                countryname.textContent = countrysearch;
                // maplink.href = maps.googleMaps;
                capitalname.textContent = datainfo.capital;
                Population.textContent = datainfo.population;
                Area.textContent = datainfo.area;
                Area.textContent = datainfo.area;
                Timezone.textContent = datainfo.timezones[0];
                // Currencies.textContent = datainfo.Currencies.name;
                Neighborone.textContent = datainfo.borders[0];
                Neighbortwo.textContent = datainfo.borders[1];
                Neighborthree.textContent = datainfo.borders[2];
                Neighborfour.textContent = datainfo.borders[3];


            })
    } catch (error) {
        console.error()
    }
