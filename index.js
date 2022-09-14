// @ts-check

const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(
    'https://www.cotodigital3.com.ar/sitios/cdigi/producto/-cerveza--quilmes-bajo-cero-botella-1-l/_/A-00238859-00238859-200'
  )
  const title = await page.textContent('[class="product_page"]')
  const price = await page.textContent('[class="atg_store_newPrice"]')

  console.log(title, price)

  const quilmes = await {
    title: title?.trim(),
    price: price?.trim()
  }

  console.log(quilmes)

  await browser.close()
})()
