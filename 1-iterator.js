function createIterator(array) {
  let index = 0;

  const next = () => {
    if (index < array.length) {
      return {
        value: array[index++],
        done: false
      }
    } else {
      return {
        done: true
      }
    }
  }

  return {
    next: next
  }
}

// {
//   next: () => {
//    value: 1,
//    done: true/false
//   } 
// }

const iterator = createIterator(['lucas', 'jose', 'juan'])
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().done)

let item
do {
  item = iterator.next()
  if (item.value) console.log(item.value)
} while(!item.done)
