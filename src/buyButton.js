function startBuyButton(countryCode) {
  var s = document.createElement('script')

  const link = document.getElementById('buyButtonLink')
  if (countryCode === 'US' || countryCode === 'CA') {
    s.src = `https://cdn.jsdelivr.net/gh/WootingKb/lekker-pre-order/src/lekkerNa.min.js`
    link.innerHTML = '<u><b>Click here for EU or International</b></u>'
    link.href = '?countryCode=NL'
    document.getElementById(euId).style.display = 'none'
  } else {
    s.src = `https://cdn.jsdelivr.net/gh/WootingKb/lekker-pre-order/src/lekkerEu.min.js`
    link.innerHTML = '<u><b>Click here for US or CA</b></u>'
    link.href = '?countryCode=US'
    document.getElementById(usId).style.display = 'none'
  }
  document.getElementById(iframeId).appendChild(s)
}

const iframeId = 'd053a7e3-e770-4626-9048-b347b8c134e1'
const usId = 'product-component-a9f54d95b46'
const euId = 'product-component-527947ee585'
document.getElementById(iframeId).innerHTML += `
<div id="${usId}"><div
style="    width: 100%;
max-width: 280px;
display: inline-block;"
>
<div style="padding:5px">
  <label
    style="font-family: Open Sans, sans-serif;
  font-weight: bold;
  font-size: 14px;"
    >Language layout</label
  >
  <div
    style="    border: 1px solid #d3dbe2;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    background: #fff;
    overflow: hidden;
    vertical-align: bottom;"
  >
    <select
      style="font-family: Open Sans, sans-serif;
    font-weight: bold;    font-size: inherit;
padding: 7px 10px;
padding-right: 32px;
border: 0;
width: 100%;
background: transparent;
-webkit-appearance: none;"
    >
      <option selected="" value="United States - US ANSI"
        >United States - US ANSI</option
      >
    </select>
    <svg
      style="    cursor: pointer;
    display: block;
    fill: #798c9c;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -6px;
    pointer-events: none;
    width: 12px;
    height: 12px;
    vertical-align: middle;"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z"
      ></path>
    </svg>
  </div>
</div>
<div style="padding:5px">
  <label
    style="font-family: Open Sans, sans-serif;
  font-weight: bold;
  font-size: 14px;"
    >Switch type</label
  >
  <div
    style="    border: 1px solid #d3dbe2;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    background: #fff;
    overflow: hidden;
    vertical-align: bottom;"
  >
    <select
      style="font-family: Open Sans, sans-serif;
    font-weight: bold;    font-size: inherit;
padding: 7px 10px;
padding-right: 32px;
border: 0;
width: 100%;
background: transparent;
-webkit-appearance: none;"
    >
      <option selected="" value="United States - US ANSI"
        >Lekker - Linear65</option
      >
    </select>
    <svg
      style="    cursor: pointer;
    display: block;
    fill: #798c9c;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -6px;
    pointer-events: none;
    width: 12px;
    height: 12px;
    vertical-align: middle;"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z"
      ></path>
    </svg>
  </div>
</div>
</div></div>
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
