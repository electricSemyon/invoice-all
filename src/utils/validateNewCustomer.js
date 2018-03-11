export default (name, phone, address) => {
  console.log(name, phone, address)
  if (!name || !phone || !address) {
    return 'Field required'
  }
}