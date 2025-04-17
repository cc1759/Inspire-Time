import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import data from './quotes.json' with { type: "json"}



// ---PREPORATION PAGE---

// function 



//make HTML
const StartHTMl: FC = () => {
  return (
    <html lang="en-US">
      <head>
        <title>Inspire Time!</title>
      </head>
      <body style="background:#801818">
        <h2 style="text-align:center; font-size:40px; color:white"><big>Are You Ready to be INSPIRED!?!</big></h2>
        <hr></hr>
        <p style="text-align:center; font-size:30px">
          <a href="http://localhost:3000/quote" style="color:red">IM READYYYY!</a>
        </p>
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
    <html lang="en-US">
      <head>
        <title>Inspire Time!</title>
      </head>
      <body style="background:#801818">
        <h1 style="text-align:center; font-size:30; color:white">Here's your quote!<br></br><br></br>{GenerateRandomQuote()}</h1>
        <hr></hr>
        <h3 style="text-align:center; color:white">Still Need Motivation?</h3>
        <p style="text-align:center;">
          <a href="http://localhost:3000/quote" style="color:red">Hit Me Again!</a>
        </p>
        <h1>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </h1>
        <p style="color:white">(click here if your lame)</p>
        <a href="http://localhost:3000/Lamos-Only:(" style="color:red">I'm Lame</a>
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
  return c.json({ message: `Here's is your quote you lamo, '${GenerateRandomQuote()}'` })
})



// ---SERVER SIDE STUFF---
serve({
  fetch: app.fetch,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})



// TODO: look into this more
// //tried using css to make coloring text and background less tedius, but i couldn't get it working.
// <style>
// body {
//   <background-color>black</background-color>
// }
// h1 {
//   <color>white</color>
// }
// a {
//   <color>blue</color>
// }
// </style>