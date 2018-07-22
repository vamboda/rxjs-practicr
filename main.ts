import { Observable } from "rxjs";
import { load, loadWithFetch } from "./loader";

let output = document.getElementById("output");
let button = document.getElementById("button");
let source = Observable.fromEvent(button, "click");

const renderMovies = movies => {
  movies.forEach(element => {
    let div = document.createElement("div");
    div.innerText = element.title;
    output.appendChild(div);
  });
};
source.flatMap(e => loadWithFetch("movies.json")).subscribe(renderMovies);
