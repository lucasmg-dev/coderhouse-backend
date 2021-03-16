const exampleList = ['6**2', '**', '3**3', '4**', '4**5', '8**2**', '4*=5']

const exponentiationResults = list => {
  if (exampleList.includes('**')) {
    const filteredList = exampleList.filter(item => {
      const splited = item.split('**')
      return (
        splited.length == 2 &&
        splited[0] &&
        splited[1] &&
        !isNaN(splited[0]) &&
        !isNaN(splited[1])
      )
    })

    // console.log(filteredList)

    return filteredList.map(item => {
      const splited = item.split('**')
      return splited[0] ** splited[1]
    })
  }
}

console.log(exponentiationResults(exampleList))

// array.filter(item => true/false)
// '6**2' --> [6, 2]
// '**' ---> []
// '3**3' --> [3, 3]
// '4**' --- > [4, '']
// '8**2**' ----> [8, 2, '']
// '4*=5' ---> ['4*=5']

// isNumber() 
// !isNaN(X) 