let api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let userinput = document.getElementById("exampleInputEmail1");
let search = document.getElementById("submit");
let demo = document.getElementById("demo");


search.addEventListener("click", (e) => {
  e.preventDefault();
  let word = userinput.value;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "040f4addaamshe90bb120ff1c0abp135e59jsn055102ec4268",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };

  fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let list = response.list;
      list.forEach(element => {
        demo.innerHTML +=`<div class="jumbotron jumbotron-fluid my-2 container">
        <div class="container">
         <h1 class="display-4" id="h1">Author: ${element.author}</h1>
         <p class="lead" id="lead">Defination: ${element.definition}</p>
         <p class="lead" id="lead">Word: ${element.word}</p>
         <p class="lead" id="lead">Example: ${element.example}</p>
         </div>
        </div>`;
        console.log(element);
      });
      
    
    })
    .catch((err) => console.error(err));
});
