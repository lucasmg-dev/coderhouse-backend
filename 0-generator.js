function* idMaker() {
  let index = 0;
  while(index < 5)
    yield index++; // index = index + 1 
}

// {
//   next: () => {
//    value: 1,
//    done: true/false
//   } 
// }

var gen = idMaker();

//console.log(gen)
for (let i = 0; i < 8; i++) {
  console.log(gen.next());
}

