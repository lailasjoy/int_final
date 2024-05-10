
const APP_TOKEN = 'ZS0G3LdhMixXvpu8quJIaPzVY'; // <- Replace this with your app token
const DATASET_IDENTIFIER = 'gfqj-f768'; // <- Replace this with the ID for the data resource that you want to look up
const LIMIT = 30; // <- Replace this with the number of records you want to pull

// Construct the URL that we need to make requests
const url = `https://data.cityofnewyork.us/resource/${'gfqj-f768'}.json?$limit=${30}&$$app_token=${'ZS0G3LdhMixXvpu8quJIaPzVY'}`;

// This URL pulls in far fewer rows so it should render faster
// const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%2C%0A%20%20%60%3A%40computed_region_efsh_h5xi%60%2C%0A%20%20%60%3A%40computed_region_f5dn_yrer%60%2C%0A%20%20%60%3A%40computed_region_yeji_bk3q%60%2C%0A%20%20%60%3A%40computed_region_92fq_4b7q%60%2C%0A%20%20%60%3A%40computed_region_sbqj_enih%60%0AWHERE%0A%20%20starts_with(%60descriptor%60%2C%20%22Loud%20Music%2FParty%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222022-04-07T22%3A58%3A53%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222023-04-06T22%3A58%3A53%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20LAST`;

console.log(`Fetching url - ${'https://data.cityofnewyork.us/resource/${gfqj-f768}.json?$limit=${30}&$$app_token=${ZS0G3LdhMixXvpu8quJIaPzVY'}`)
var data;
var paragraphs=[];
var but=document.getElementById("update-squirrel");
fetch(url)
  .then((response) => response.json())
  .then((json) => {
      data=json;
      for(let i = 0; i < json.length; i++){
        console.log(json[i]["note_squirrel_park_stories"]);
        const para = document.createElement("p");
para.innerHTML = `<span>${json[i]["date"].slice(0, 2) + "/" + json[i]["date"].slice(2, 4)+"/"+json[i]["date"].slice(4)+"   "}</span>`+json[i]["note_squirrel_park_stories"];
document.getElementById("squirrel-container").appendChild(para);
para.style.display="none";
paragraphs.push(para);
      }
      squirrelstory();
      but.onclick=()=>{squirrelstory();};
  });


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function squirrelstory(){
const number=getRandomInt(data.length);
for(let i = 0; i < paragraphs.length; i++){
  if(number==i){
    paragraphs[i].style.display="block";
  }
  else{
    paragraphs[i].style.display="none";
  }

      }
}
 

// let demoSq = {};

// const sqLinks = document.querySelectorAll(".squirrel-link");
// const sqContainer = document.querySelector("#squirrel-container");
// const button=document.querySelector("#update-squirrel");

// // let's max out number of possibilities to 1000
// const totalSquirrels = 999;
// const randomInteger = Math.floor(Math.random() * totalSquirrels);

// const apiURL = `https://data.cityofnewyork.us/resource/gfqj-f768.json/${randomInteger}`;

// button.onclick=function() {
//   getSquirrel();
// }

// function getSquirrel(){
// const totalSquirrels = 999;
// const randomInteger = Math.floor(Math.random() * totalSquirrels);

// const apiURL = `https://data.cityofnewyork.us/resource/gfqj-f768.json/${randomInteger}`;


// fetch(apiURL).then(response => {
//   return response.json();
// })
// .then(response => {  
  
//   console.log("demoResponse: ", response);
//   demoSquirrel.name = response.name;
//   demoSquirrel.abilities = response.abilities;
//   demoSquirrel.forms = response.forms;
//   demoSquirrel.moves = response.moves;
  
//   // display demo links & content
//   let pokeDOM = `
//     <div class="pokemon">
//       <h2>
//         Name: ${demoSquirrel.name.charAt(0).toUpperCase() + demoSquirrel.name.slice(1)}
//       </h2>`;
  
     
//   // add list of abilities
//   // console.log(demoPokemon.abilities);
//   squirrelDOM += `<h3>Abilities:</h3>
//       <ul class="abilities">`;
//   demoSquirrel.abilities.forEach((ability,index) => {
//     pokeDOM += `<li>${demoPokemon.abilities[index].ability.name}</li>`;
//   });
//   // close out abilities ul
//   pokeDOM += `</ul>`;
  
//   // add list of moves
//   // console.log(demoPokemon.moves);
//   pokeDOM += `
//       <h3>Moves:</h3>
//       <ul class="moves">`;
//   demoPokemon.moves.forEach((move,index) => {
//     pokeDOM += `<li>${demoPokemon.moves[index].move.name}</li>`;
//   });
//   // close out moves ul
//   pokeDOM += `</ul>`;
  
//   // finish up pokeDOM
//   pokeDOM += `</div>`;
  
//   // add pokeDOM to pokemonContainer
//   pokemonContainer.innerHTML = pokeDOM;
// })
// .catch(error => {
//   console.error(error);
// });
// };
