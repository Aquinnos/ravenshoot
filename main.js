import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="container">
      <h1>Hello Vite!</h1>
      <p>Start editing to see some magic happen!</p>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
