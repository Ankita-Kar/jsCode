// function reqListener() {
//     console.log(this.responseText);
//   }
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "http://www.example.org/example.txt");
//   req.send();


//---------------------------------------------------------------


//   const firstRequest = new XMLHttpRequest();
//   firstRequest.addEventListener('load', () => {
//     console.log("WORKED");
//   });
//   firstRequest.addEventListener('error', () => {
//     console.log("FAILED");
//   });

//   firstRequest.open("GET", "https://swapi.dev/api/planets/");
// firstRequest.send();
// console.log("request sent")


//------------------------------------------------------------------


//   const firstRequest = new XMLHttpRequest();
//   firstRequest.addEventListener('load', function () {
//     console.log("WORKED");
//     const data = JSON.parse(this.responseText);
// for(let planet of data.results){
//     console.log(planet.name);
// }
//   });
//   firstRequest.addEventListener('error', () => {
//     console.log("FAILED");
//   });

//   firstRequest.open("GET", "https://swapi.dev/api/planets/");
// firstRequest.send();
// console.log("request sent")