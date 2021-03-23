function* numberMaker(min, max) {
  let index = 0
  while (true) {
    const number = Math.floor(Math.random() * (max - min) + min);
    const created = new Date();
    const createdAt = `${created.getDay()}/${created.getMonth() + 1}/${created.getFullYear()} ${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`
    index++
    yield {
      indice: index,
      numero: number,
      fyh: createdAt
    }
  }
}

const showJSON = obj => JSON.stringify(obj, null, 2)

const gen = numberMaker(1, 10);
console.log(showJSON(gen.next().value));
console.log(showJSON(gen.next().value));
console.log(showJSON(gen.next().value));
console.log(showJSON(gen.next().value));
console.log(showJSON(gen.next().value));