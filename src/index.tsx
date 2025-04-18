import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import data from './quotes.json' with { type: "json"}



// ---PREPORATION PAGE---
// function 
// TODO: add color changing text

//make HTML
const StartHTMl: FC = () => {
  return (
    <html lang="en-US">
      <head>
        <title>Inspire Time!</title>
      </head>
      <body style="background:#eb990e">
        <h2 style="text-align:center; font-size:40px; color:white"><big>Are You Ready to be INSPIRED!?!</big></h2>
        <hr></hr>
        <p style="text-align:center; font-size:30px">
          <a href="http://localhost:3000/quote" style="color:00fffd">I'M READYYYY!</a>
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

// makes list of possible colors
const colors = [
  "#f7992f",
  "#f680d0",
  "#fad86b",
  "#8bc961",
  "#2ee1a6",
  "#2ff737",
  "#4ec8e4",
  "#c67df2",
  "#2f46f7"
]


//generates a random number without allowing for the same numb twice
function RandNumbGenerator(n_old: number, length: number): number {
  let n: number = Math.floor(Math.random() * length)
  while (n == n_old) {
    // console.log("repeted numb " + n)
    n = Math.floor(Math.random() * length)
    console.log("same")
  }
  return n;
}

//randomly genereates a quote
let n_quote_old: number = -1
function GenerateRandomQuote(): string {
  const n = RandNumbGenerator(n_quote_old, quotes.length)
  n_quote_old = n
  return quotes[n]
}

//generates ran
let n_col_old: number = -1
function GenerateRandomColor(): string {
  const n = RandNumbGenerator(n_col_old, colors.length)
  n_col_old = n
  return "text-align:center; font-size:40; color:" + colors[n]
}


//make HTML
const QuoteHTML: FC = () => {
  return (
    <html lang="en-US">
      <head>
        <title>Inspire Time!</title>
      </head>
      <body style="background:#801818">
        <h1 style="text-align:center; font-size:30; color:white">Here's your quote!<br></br></h1>
        <h1 style={GenerateRandomColor()}>{GenerateRandomQuote()}</h1>
        <hr></hr>
        <h3 style="text-align:center; font-size:30; color:white">Still Need Motivation?</h3>
        <p style="text-align:center; font-size:25">
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