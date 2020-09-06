# Next.js dynamic routes

Next.js built-in dynamic routes proof of concept

## The problem

The main idea was to have an optional parameter at index level (in our case called **sponsor tag**): `/:sponsorTag?`

- A **Dashboard Page** should render whether `sponsorTag` is present or not. Empty `sponsorTag` means we're at a **Admin Level**.

- Different routes can be appended to the `sponsorTag` parameter, keeping the same condition as before: Empty `sponsorTag` means we're at a **Admin Level**. In our example we are using `/:sponsorTag?/programs` route.

- Global routes not dependant of `sponsorTag` can exist. In our example is `/sign-in` and `/callback` (custom Auth0 required routes).

## The solution

**Global routes**

1. Create a new page called `sign-in` and treat it as a usual Next.js page.
2. Create a new page called `callback` and treat it as usual Next.js page.

**Dashboard Page**

1. Create a dynamic route page folder with an `index.jsx`: `pages/[sponsorTag]/index.jsx`. This route will serve all pages with `sponsorTag` in them.
2. Create an `index.jsx` at the root of `pages` folder. This file should only import the dynamic route page and export it: `import { default } from 'pages/[sponsorTag]/index.jsx'`. This page will handle routes with no sponsorTag in the URL that belongs to an Admin View.

**Programs Page (or any other page)**

1. Create a route page folder with an index.jsx inside the dynamic route folder: `pages/[sponsorTag]/programs/index.jsx`. This route will serve all pages with `sponsorTag` in them.
2. Create an `programs` folder with an `index.jsx` at the root of the `pages` folder. This file should only import the dynamic route page and export it: `import { default } from 'pages/[sponsorTag]/programs/index.jsx'`. This page will handle routes with no sponsorTag in the URL that belongs to an Admin View.

**Extra**

Let's say we want to use the URL to pass an ID and do something with it:

1. Create a dynamic route folder `id` inside `programs` with an `index.jsx`: `pages/[sponsorTag]/programs/[id]/index.jsx`. This route will serve all pages with `sponsorTag` plus `id` param for `programs`.
2. Create a dynamic route folder `id` inside programs with an `index.jsx`. This file should only import the dynamic route page and export it: `import { default } from 'pages/[sponsorTag]/programs/[id]/index.jsx'`. This page will handle routes with no sponsorTage in the URL that belongs to an Admin View.

Notice that the process is similar in all "dynamic" cases: We should first create the sponsorTag route, and the create the "Admin View" page (usually at pages root) and just use the import for that file: in this case the `sponsorTag` param will be null.

## Prerequisites

Install dependencies

```
npm install
```

## Getting Started

Starts the development server

```
npm run dev
```

Builds the app for production

```
npm run build
```

Runs the built app in production mode

```
npm run start
```

## Built With

* [Next.js](https://nextjs.org/) - The react framework

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
