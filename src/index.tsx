import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import data from './quotes.json' with { type: "json"}



// ---PREPORATION PAGE---
//make HTML
const StartHTMl: FC = () => {
  return (
    <html>
      <head>
        <title>Inspire Time!</title>
      </head>
      <body>
        <h2>Are You Ready to be INSPIRED!?!<br></br></h2>
        <a href="http://localhost:3000/quote">IM READYYYY!</a>
      </body>
    </html>
  )
}

//display HTML
const app = new Hono()
app.get('/', (c) => {
  return c.html(
    <StartHTMl></StartHTMl>
  )
})



// ---QUOTE PAGE---
//collect the quotes
const quotes = data.Funny_Insperational_Quotes

//randomly genereates a quote
let n_old: number = -1
function GenerateRandomQuote(): string {
  //make it so you can't generate the same number(quote) twice in a row
  let n: number = Math.floor(Math.random() * 34)
  while (n == n_old) {
    // console.log("repeted numb " + n)
    n = Math.floor(Math.random() * 34)
  }
  n_old = n
  // console.log(n)
  return quotes[n]
}

//make HTML
const QuoteHTML: FC = () => {
  return (
    <html>
      <head>
        <title>Inspire Time!</title>
      </head>
      <body>
        <h1>{GenerateRandomQuote()}</h1>
        <h3>Still Need Motivation?</h3>
        <a href="http://localhost:3000/quote">Hit Me Again!</a>
        <h1>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        </h1>
        <p>(click here if your lame)</p>
        <a href="http://localhost:3000/Lamos-Only:(">I'm Lame</a>
      </body>
    </html>
  )
}

//display HTML
app.get('/quote', (c) => {
  return c.html(
    <QuoteHTML></QuoteHTML>
  )
})



// ---LAMOS ONLY PAGE---
//display quote as JSON 
app.get('/Lamos-Only:(', (c) => {
  return c.json({ message: `Here's is your quote you lamo, ${GenerateRandomQuote()}` })
})



// ---SERVER SIDE STUFF---
serve({
  fetch: app.fetch,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})