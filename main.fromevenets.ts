// import { Observable } from "rxjs";
// import axios = require('axios');

// let circle = document.getElementById("circle");

// let source = Observable.fromEvent(document, "mousemove")
//   .map((e: MouseEvent) => {
//     return {
//       x: e.clientX,
//       y: e.clientY
//     };
//   })
//   .filter(value => value.x < 500).delay(500);

// // class MyObserver implements Observer<number> {
// //   next(value) {
// //     console.log(`Value:${value}`);
// //   }

// //   error(e) {
// //     console.log(`error: ${e}`);
// //   }

// //   complete() {
// //     console.log(`complete`);
// //   }
// // }

// const onNext = value => {
//   circle.style.left = value.x;
//   circle.style.top = value.y;
// };
// source.subscribe(
//     onNext,
//   e => {
//     console.log(e);
//   },
//   () => {
//     console.log("create Complete");
//   }
// );
