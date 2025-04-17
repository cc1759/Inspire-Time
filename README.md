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

This procces created a directory that looked something like this:

> *put example here*

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


The *index.tsx




---



idk how this got here. Did it auto generate? I assume so....

```
npm install
npm run dev
```

```
open http://localhost:3000
```
