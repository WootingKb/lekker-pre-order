fetch(
  'https://kx9zt94vq1.execute-api.us-east-1.amazonaws.com/dev/getLekkerCount'
)
  .then(response => response.text())
  .then(lekkerCount => {
    const lekkerLeft = 1000 - lekkerCount
    function updateLekkerCount(counter) {
      const e = document.getElementById('lekkerCount')

      let diff = 1
      if ((counter - lekkerLeft) / 100 > 1) {
        diff = 100
      } else if ((counter - lekkerLeft) / 10 > 1) {
        diff = 10
      }
      if (counter > lekkerLeft) {
        e.innerHTML = e.innerHTML.replace(
          `Only ${counter}`,
          `Only ${counter - diff}`
        )
        setTimeout(() => updateLekkerCount(counter - diff), 50)
      }
    }
    updateLekkerCount(1000)
  })
