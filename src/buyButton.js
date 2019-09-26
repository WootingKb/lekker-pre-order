function startBuyButton(countryCode) {
  var s = document.createElement('script')

  const link = document.getElementById('buyButtonLink')
  if (countryCode === 'US' || countryCode === 'CA') {
    s.src = `https://cdn.jsdelivr.net/gh/WootingKb/lekker-pre-order/src/lekkerNa.min.js`
    link.innerHTML = '<u><b>Click here for EU or International</b></u>'
    link.href = '?countryCode=NL'
  } else {
    s.src = `https://cdn.jsdelivr.net/gh/WootingKb/lekker-pre-order/src/lekkerEu.min.js`
    link.innerHTML = '<u><b>Click here for US or CA</b></u>'
    link.href = '?countryCode=US'
  }
  document.getElementById(iframeId).appendChild(s)
}

const iframeId = 'd053a7e3-e770-4626-9048-b347b8c134e1'
const usId = 'product-component-a9f54d95b46'
const euId = 'product-component-527947ee585'
document.getElementById(iframeId).innerHTML += `
<div id="${usId}"></div>
<div id="${euId}"></div>
<br>
<a id="buyButtonLink"></a>`

const countryCode = window.location.search
  ? window.location.search.includes('countryCode')
    ? window.location.search
        .split('&')
        .reduce(param => param.includes('countryCode'))
        .split('=')[1]
    : ''
  : ''

if (countryCode) {
  startBuyButton(countryCode)
} else {
  fetch(
    'https://kx9zt94vq1.execute-api.us-east-1.amazonaws.com/dev/countryCode'
  )
    .then(response => response.text())
    .then(countryCode => startBuyButton(countryCode))
    .catch(console.error)
}
