# Next.js
A place for me to learn Next.js

Official Next.js docs: https://nextjs.org/docs/app/getting-started/installation

Next.js is developed & maintained by Vercel

## Installation (macOS)
Requirements:
- Homebrew already installed

Install nodejs
```zsh
brew install node@22
```

Check node version
```zsh
node -v
```

Check NPM version
```zsh
npm -v
```

If you get some errors:
```zsh
brew cleanup
```

Then try again

## Create new project
```zsh
npx create-next-app@latest
```

Afterwards some questions about the project will be asked.
You can leave the settings as default.

## Run development server
```zsh
npm run dev
```

Afterwards the site can be accessed in the browser at `http://localhost:3000`.
![New Next.js project](./docs/installation/empty_next_js_app.jpg)


## General structure
The whole app is organzied in multiple folders. THe typescript files for the app are stored in `src/app`.

The code is written in TypeScript.

In `package.json` are the dependencies saved. The Next.js configuration is saved in `next.config.ts`.

Each folder in `app` represents a route of the application, but its only accessable when a `page.js` or `route.js` file is contained.

When a folder is named with `_` as prefix, it will be ignored by the routing and not accessable from within the application.

Folders in parenthesis (Klammern) while not be show in the route. (https://nextjs.org/docs/app/getting-started/project-structure#organize-routes-without-affecting-the-url-path)

Slugs can be defined by creating a folder in brackets [] like [slug].

Basic tutorial: https://www.youtube.com/watch?v=__mSgDEOyv8

By default the code is executed on the server. When you want to change this behavior the following has to be added to the top of the file:
```tsx
'use client';
```

Its possible to render the most parts of an app on the server and some components, like the hover state of the navbar, on the client. Depending on what makes most sense for the application. Thoose components should be move to a separated JS or JSX file.

The main function of the app or just a file is defined by `export default`.

The layout of the app is defined in `layout.js`. The content of `layout.js` is shared between all pages.


## Upgrade to newer Next.js version
```zsh
npx @next/codemod@canary upgrade latest
```
