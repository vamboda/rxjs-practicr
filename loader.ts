import { Observable } from "rxjs";

export const load = (url: string) => {
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

export const loadWithFetch = url => {
  return Observable.defer(() => {
    return Observable.fromPromise(fetch(url).then(r => r.json()));
  });
};
