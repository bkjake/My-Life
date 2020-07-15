import Nightmare from 'nightmare';

const proxyNightmare = Nightmare({
  switches: {
    'proxy-server': 'localhost:8080' // set the proxy server here ...
  },
  show: true
});

proxyNightmare
  .authentication('proxyUsername', 'proxyPassword') // ... and authenticate here before `goto`
  .goto('https://www.beerline.com.com')
  .evaluate(() => {
    // eslint-disable-next-line no-useless-escape
    return document.querySelector('b').innerText.replace(/[^\d\.]/g, '');
  })
  .end()
  .then((ip) => { // This will log the Proxy's IP
    console.log('proxy IP:', ip);
  });

// The rest is just normal Nightmare to get your local IP
const regularNightmare = Nightmare({ show: true });

regularNightmare
  .goto('https://www.beerline.com/en/')
  .evaluate(() =>
    // eslint-disable-next-line no-useless-escape
    document.querySelector('b').innerText.replace(/[^\d\.]/g, '')
  )
  .end()
  .then((ip) => { // This will log the your local IP
    console.log('local IP:', ip);
  });