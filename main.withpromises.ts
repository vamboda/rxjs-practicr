import { Observable } from "rxjs";
import Axios from "./node_modules/axios";

let output = document.getElementById("output");
let button = document.getElementById("button");
let source = Observable.fromEvent(button, "click");

const load = (url: string) => {
  return Observable.create(observer => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        observer.next(data);
      } else {
        observer.error(xhr.statusText);
      }
    });
    xhr.open("GET", url);
    xhr.send();
  }).retryWhen(retryStratergy(3, 1000));
};

const retryStratergy = (attempts, delay) => {
  return errors => {
    return errors
      .scan((acc, value) => {
        return acc + 1;
      }, 0)
      .takeWhile(acc => acc < attempts)
      .delay(delay);
  };
};

const loadWithFetch = url => {
  return Observable.defer(() => {
    return Observable.fromPromise(fetch(url).then(r => r.json()));
  });
};
const renderMovies = movies => {
  movies.forEach(element => {
    let div = document.createElement("div");
    div.innerText = element.title;
    output.appendChild(div);
  });
};
loadWithFetch("movies.json");
source.flatMap(e => loadWithFetch("movies.json")).subscribe(renderMovies);
