# Purpose

This web API is to bring smiles to all using silly randomly generated quotes. Most quotes were taken from the instagram account **Inspirobot.me**

To run this server, type this command in terminal:

```
cd insperational-quotes
pnpm dev
```



---



# FRAMEWORK

## Hono - pnpm

This project was created by making a quickstarted *Hono* project using the command:

```
pnpm create hono@latest my-app
```

This brings up a menu, asking which templete you want to use, in which we selected *pnpm*.

Then we install all the dependencies for the project using:

```
cd my-app
pnpm i
```

This procces should create a directory that looks something like this:

> - [INSERT FILE NAME]
>   - node_modules
>     - .bin
>     - .pnpm
>     - @hono
>     - tsx
>     - .modules.yaml
>     - .pnpm-workspace-state
>   - src
>     - index.ts
>   - .gitignore
>   - package.json
>   - pnpm-lock.yaml
>   - README.md
>   - tsconfig.json

## Added COMPILER OPTIONS

Two compiler options where added into the *tsconfig.json* file:

```
"resolveJsonModule": true,
"esModuleInterop": true
```

These compiler options help make it so you can easily import json files into your typescript file.

## JSX Support

The *index.ts* file was changed to be *.tsx* and *hono/jsx* was imported into it so you can use JSX syntax for writing HTML.

_\*note\* had to make sure to change the file \*index.ts\* name in \*package.json\* so \*pnpm dev\* command still works._



---


# DEVELOPMENT

The two important are *quotes.json* and *index.tsx*.

## quotes.json

*quotes.json* is the json file where all the quotes are stored.

## index.tsx

*index.tsx* is the script the server is running. The script is split up into 4 main sections, the **"Preporation Page"**, the **"Quote Page"**, the **"Lamos Only Page"**, and the **"Server Side Section"**.

Each section is denoted in the script buy using:

> // ---[INSERT SECTION NAME]---


### The Preporation Page

The preporation page section creates the page (idk what to call it. where it listens to a certain port for the right req.)(located at: http://localhost:3000).  

It start by first creating the HTML interface of the page, then sends a get req for \**/*\* (which IG also accepts the req of nothing (not litterally nothing but yn)) and returns the HTML if it detects it.

*from this page, you can go to the "Quotes Page" by pressing a link.*

### The Quotes page

The quotes page section creates the page where the random quote will be genreated (located at: http://localhost:3000/quote)

It starts by first making a random quote generating function, then creating the HTML interface, then lastly sending a get req for \**/quotes*\* which retunrs the HTML if it detects the desired req.

*from this page, you can press a link to either reload this page, generating a new quote, or go to the "Lamos Only Page".*

### The Lamos Only Page

This page also generates a random quote, but this time as a json message (because it was in the requirements but i wanted to learn HTML to make the interface look good so I still had to add it)(located at: http://localhost:3000/Lamos-Only:()

This only has one part, and that's sending a get req for \**/Lamos-Only:(*\* (idk if the :( has the possibility of ruining other things...). If it sees that req then it returns a json that says a little message and then your randomly generated quote (quote generated using function in "quote page")

*from this page yu cannot do anything. How lame :(*

### Server Side Section

This section sets up a server, defines its fetch function, then logs in the console where the server is running.



---



# ???

idk how this got here. Did it auto generate? I assume so....

```
npm install
npm run dev
```

```
open http://localhost:3000
```
