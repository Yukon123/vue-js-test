export default {
  setNotice() {
    console.log('setNotice')
  },
  foo() {
    this.setNotice()
    console.log('foo')
  }
}
