import faker from 'faker'

const mount = (el) => {
  let products = ''

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
  }

  el.innerHTML = products
}
// Context/Situation #1
// We are running this file in development in isolation
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products')
  // assuming our contianer doesnt have an element with id 'dev-products'
  if (el) {
    mount(el)
  }
}

// Context/Situatio #2
// in prod
export { mount }
