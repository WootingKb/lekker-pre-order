;(function() {
  var scriptURL =
    'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit()
    } else {
      loadScript()
    }
  } else {
    loadScript()
  }

  function loadScript() {
    var script = document.createElement('script')
    script.async = true
    script.src = scriptURL
    ;(
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(script)
    script.onload = ShopifyBuyInit
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'wooting-na.myshopify.com',
      storefrontAccessToken: '19709fa23016067286c220bb5848a8ab',
    })

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent('product', {
        id: [3972722229359],
        node: document.getElementById('product-component-527947ee585'),
        moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
        options: {
          product: {
            variantId: 'all',
            width: '380px',
            contents: {
              img: false,
              title: false,
              imgWithCarousel: false,
              variantTitle: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false,
            },
            styles: {
              product: {
                'text-align': 'left',
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0',
                  'margin-bottom': '50px',
                },
              },
              button: {
                'background-color': '#fcb51e',
                'font-family': 'Open Sans, sans-serif',
                'padding-left': '88px',
                'padding-right': '88px',
                ':hover': {
                  'background-color': '#e3a31b',
                },
                ':focus': {
                  'background-color': '#e3a31b',
                },
                'font-weight': 'normal',
              },
              variantTitle: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
              title: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'normal',
              },
              description: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
              price: {
                'font-family': 'Open Sans, sans-serif',
                'font-size': '20px',
                'font-weight': 'bold',
              },
              compareAt: {
                'font-size': '17px',
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
            },
            googleFonts: [
              'Open Sans',
              'Open Sans',
              'Open Sans',
              'Open Sans',
              'Open Sans',
              'Open Sans',
            ],
          },
          cart: {
            popup: false,
            contents: {
              button: true,
            },
            styles: {
              button: {
                'background-color': '#fcb51e',
                'font-family': 'Open Sans, sans-serif',
                ':hover': {
                  'background-color': '#e3a31b',
                },
                ':focus': {
                  'background-color': '#e3a31b',
                },
                'font-weight': 'normal',
              },
              footer: {
                'background-color': '#ffffff',
              },
            },
            googleFonts: ['Open Sans'],
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false,
            },
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px',
                },
              },
              button: {
                'background-color': '#fcb51e',
                'font-family': 'Open Sans, sans-serif',
                'padding-left': '88px',
                'padding-right': '88px',
                ':hover': {
                  'background-color': '#e3a31b',
                },
                ':focus': {
                  'background-color': '#e3a31b',
                },
                'font-weight': 'normal',
              },
              variantTitle: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
              title: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'normal',
              },
              description: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
              price: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
              compareAt: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
            },
            googleFonts: [
              'Open Sans',
              'Open Sans',
              'Open Sans',
              'Open Sans',
              'Open Sans',
              'Open Sans',
            ],
          },
          toggle: {
            styles: {
              toggle: {
                'font-family': 'Open Sans, sans-serif',
                'background-color': '#fcb51e',
                ':hover': {
                  'background-color': '#e3a31b',
                },
                ':focus': {
                  'background-color': '#e3a31b',
                },
                'font-weight': 'normal',
              },
            },
            googleFonts: ['Open Sans'],
          },
          option: {
            styles: {
              label: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
                'font-size': '14px',
              },
              select: {
                'font-family': 'Open Sans, sans-serif',
                'font-weight': 'bold',
              },
            },
            googleFonts: ['Open Sans', 'Open Sans'],
          },
          productSet: {
            styles: {
              products: {
                '@media (min-width: 601px)': {
                  'margin-left': '-20px',
                },
              },
            },
          },
        },
      })
    })
  }
})()
