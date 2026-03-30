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
const loading = document.getElementById("loading");
const found = document.getElementById("found");
            found.style.display = "none";


// for page with result

const continet = document.getElementById("continet");
const countryname = document.getElementById("countryname");
const maplink = document.getElementById("maplink");
const capitalname = document.getElementById("capitalname");
const Population = document.getElementById("Population");
const Area = document.getElementById("Area");
const stats = document.getElementById("stats");
const Timezone = document.getElementById("Timezone");
const Languages = document.getElementById("Languages");
const Currencies = document.getElementById("Currencies");
const symbol = document.getElementById("symbol");
const Neighborone = document.getElementById("Neighborone");
const region = document.getElementById("region");
const coatofarm = document.getElementById("coatofarm");
const startOfWeek = document.getElementById("startOfWeek");
const fifa = document.getElementById("fifa");
const unMember = document.getElementById("unMember");
const independent = document.getElementById("independent");


const countryflag = document.getElementById("countryflag");



let newcon = countrysearch;
    try {
         fetch(`https://restcountries.com/v3.1/name/${newcon}`)
            .then(res => {
                if (!res.ok) {
                    console.log("fuck")
                    found.style.display = "none";
                    notfound.style.display = "block";
                    return;
                }

                loading.style.display = "none";
                found.style.display = "block";
                return res.json()
            })
            .then(data  => {
                let datainfo = data[0];

                
                countryflag.alt  = datainfo.flags.alt ;
                countryflag.src  = datainfo.flags.svg ;

                coatofarm.src  = datainfo.coatOfArms.png ;

                continet.textContent = datainfo.continents;
                countryname.textContent = countrysearch;
                // maplink.href = maps.googleMaps;
                capitalname.textContent = datainfo.capital;
                startOfWeek.textContent = datainfo.startOfWeek;
                Population.textContent = datainfo.population.toLocaleString();
                Area.textContent = `${datainfo.area.toLocaleString()}km²`;
                unMember.textContent = datainfo.unMember;
                region.textContent = datainfo.subregion;
                fifa.textContent = datainfo.fifa;
                stats.textContent = datainfo.status;
                Languages.textContent = Object.values(datainfo.languages)[0];
                let currenciesobj = Object.values(datainfo.currencies)[0];
                symbol.textContent = currenciesobj.symbol;
                Currencies.textContent = currenciesobj.name;
                landlocked.textContent = datainfo.landlocked;
                independent.textContent = datainfo.independent;
                Timezone.textContent = datainfo.timezones[0];
                



            })
    } catch (error) {
    }
