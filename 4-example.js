const sum = (...args) => {
    const result = args.reduce((acc, el) => acc+=el, 0)
    return [result]
}

console.log(sum(1,2,3,4,5))