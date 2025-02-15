# My React Journey - Day 2

🚀 **Day 2 of My React Journey: Demystifying Core Concepts & Project Structure!**  

Day 2 was all about peeling back the layers of React to understand its **fundamental flow** and how it interacts with HTML. Here’s a concise breakdown...

# 🔍 Key Takeaways:

# 1️⃣ React & HTML Integration:

1) React manipulates the DOM through a root element (<div id="root"></div>) in index.html. This is where your entire app mounts!

2) Despite abstracting direct DOM interactions, React injects JavaScript (via index.js/main.js) to dynamically render components.

# 2️⃣ SPA Architecture:

Single-Page Applications (SPAs) rely on one index.html file. All "pages" are rendered dynamically within this file using React’s component-based approach.

# 3️⃣ Virtual DOM Magic:

React optimizes performance by comparing the Virtual DOM (a lightweight copy) with the real DOM, updating only what’s necessary.

# 4️⃣ CRA vs. Vite:

1) Create React App hides complexity with react-scripts, auto-injecting JS into HTML.

2) Vite is more transparent, linking JS directly via <script> tags in index.html for faster builds.

3) Both share similar structures (public/ & src/ folders), proving core React concepts remain tool-agnostic.

# 5️⃣ Components & JSX Rules:

Capitalize components (e.g., App.jsx vs app.jsx).

JSX enforces one parent element per component (use <div> or <Fragment>).

# 🐛 Debugging Tips:
Common Pitfalls: Forgetting exports/imports, lowercase component names, or missing root element.

Always check if your component returns valid JSX!

# 💡 Why This Matters:
Understanding React’s core flow—from HTML injection to component rendering—empowers you to adapt to any tool (CRA, Vite, Parcel) with confidence.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
