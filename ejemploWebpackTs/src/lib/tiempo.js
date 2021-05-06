function getTime() {
  return {
    fyh: new Date().toLocaleDateString(),
    timestamp: Date.now()
  }
}

export {
  getTime
}