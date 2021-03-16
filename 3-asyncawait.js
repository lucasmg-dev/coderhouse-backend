const sleep = ms => new Promise((res, rej) => setTimeout(() => rej('ups! fallo'), ms));

const withThen = () => {
  console.log('init')
  sleep(2000)
    .then(() => {
      console.log('Promesa resuelta')
    })
    .catch(() => {
      console.log('Promesa rechazada')
    })
  console.log('finish')
}

const withAwait = async () => {
  console.log('init')
  try {
    await sleep(5000)
    console.log('Promesa resuelta')
  } catch(err) {
    console.log(err)
  }
  console.log('finish')
}

// withThen()
withAwait()