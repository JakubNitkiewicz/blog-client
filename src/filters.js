export default {
  formatDate: (value) => {
    const date = new Date(value)
    const monthNames = [
      'Stycznia',
      'Lutego',
      'Marca',
      'Kwietnia',
      'Maaj',
      'Czerwca',
      'Lipca',
      'Sierpnia',
      'Września',
      'Października',
      'Listopada',
      'Grudnia'
    ]
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    return `${day} ${monthNames[month]} ${year}`
  }
}
