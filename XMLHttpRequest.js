// function reqListener() {
//     console.log(this.responseText);
//   }
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "http://www.example.org/example.txt");
//   req.send();

  const firstRequest = new XMLHttpRequest();
  firstRequest.addEventListener('load', () => {
    console.log("WORKED");
  });
  firstRequest.addEventListener('error', () => {
    console.log("FAILED");
  });

  firstRequest.open("GET", "https://swapi.dev/api/planets/");
firstRequest.send();
console.log("request sent")