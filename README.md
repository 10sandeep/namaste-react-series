# React makes our app faster!

its not only react makes our app faster, but also the fact that we are using a virtual DOM, which is a lightweight in-memory and also many packages are making our app faster.

# npm add to our project

by writing command npm init in terminal.It will generate a file named package.json


# Package.json

it is a configuration for our npm

npm-it is a package manager that manages package that we install in our project.

bundler is the most important package in our package.

# what is a bundler

when we have normal html css js file our whole code needs to be bundled before it could send to production,bundler helps to do all these things

vite webpack are bundler

it helps to bundle our code and also helps to minify our code and also helps to make our code faster and also it bundles/ packages our app properly that it can be shipped to production.

when we do createreact app this create react app uses web- pack bundler behind the scene.

to install dependecies we have to command npm install -D parcel

npm-is the command/package manager
install-installing 
-D- Dev dependecy
parcel-package name

there are two types of dependecies that an app can have:
1.dev-dependecies
2.normal dependecies

dev-dependecies-it is generally used in our development phase
normal dependecies-it is used in production also

package-lock.json-it keeps the track of its exact version

package.json- when we have a new version of parcel come it will update it to that version "^2.3.8" or it is a configuration file for our npm

^ symbol known as caret,it upgrades the version of parcel to the latest version of parcel that is compatible with the version of parcel.
but package-lock.json- it lock that version and keeps the track of that version

node module- it is a folder where all our dependecies are stored or it is like database that stores all the data and dependecies of those packages that our project needs.

integrity-it is basically a hash,sometime we face an issue that the code version  run in the local but not in production so to avoid that issue we need hash.


if you have package.json you can re-create all the node module.

to ignite our app we should use npx parcel index.html

npx-Node Package Executor/ it execute our package
parcel- it is a bundler
index.html- it is the entry point of our app

when we use this basically parcel gives us a server and the app is available in localhost:1234

npm-installing a package
npx-executing a  package

 npm i is the short form of npm install

 we have installed the react dependecies before now we will install react-dom by running the command npm install react-dom

 after this we no longer need cdn

 we can re run our app by running npx parcel index.html

But it will throw an error that React is not defined because we only installed React. We need to define it by using the import keyword in the App.js file.

import React from "react" this means we are importing react from our node modules

like this we also need react-dom to be imported in our App.js file.

After this it will also throw an error that browser scripts cannot imports and exports.

because browser considering it as a normal javascript and normal javascript does not have import export  in it.

so we have to defined its type as module
 
# Parcel

-dev build
-Local Server
-HMR= Hot module replacement
-parcel using file watching algorithm-written in C++
-Caching -Faster Builds
-image Optimization
-Minification
-bundle
-Compressing
-Consistant hashing
-Code Splitting
-Differential Bundling - support older browser
-Error handling
-HTTPs
-Diagnostics- give beautiful error
-Tree shaking algorithm - remove unused code

# dist
when we execute parcel or when we do npx parcel index.html it generate development build of your project and hosted on 1234,when it generates development build it puts it into dist folder.Then all the code coming from that dist folder .And when we refresh the code or save it,it was using parcel-cach and dist to update using HMR.

When you do the project production build by running npx parcel build index.html it will generate production build and it will be in dist file.

you have to remove main:"App.js" from the package.json file.

When your project is in production phase 3 files goes to it html,css and js.

.parcel-cach is used for development build and it is not used in production build.

it helps to reduce the time of development build.


# Make our app compatible for older version of different browsers

to make our app comaptible for older version pf different version of browser we use something known as browserslist
we will cofigure it in package.json file.

"browserslist":[
    "last 2 chrome version",
    "last 2 safari version",
    "last 2 firefox version",
]
it takes an array of browsers.


npx parcel index.html means you are executing an npm  package parcel and give a source file as index.html.


npx parcel index.html is used for development phase and npx parcel build index.html is used for production phase.

so we have to command two different commands for development and production phase.so we can use a script in package.json file to make it easy.

 "start":"parcel index.html",/ it will run our project in development phase.
"build": "parcel build index.html", / it will run our project in production phase.

we can command it by running npm run start to start the project in developement phase.
like that we can command npm run build to build the project for production phase.

DOM element-dom elements are the elements that are created by the browser and are part of the document object model.
ex-html,body etc.

<!-- React Element -->

const heading=React.createElement("h1",{},"Namaste React")

React Element at the end is a object.
when we render this element on to the dom it becomes a html element.

JSX is not a part of react
we can build our project without using jsx
JSX makes our code more readable and easier to write.
JSX is not HTML,It is HTML like syntax.
JSX is a syntax extension for JavaScript.

const jsxheading=<h>hello Namaste Javascript</h>
js engine does not understand jsx,js engine understands es6.

const jsxheading=<h>hello Namaste Javascript</h> is transpiled to the code that react/browser can understand.It is transpiled by Parcel.It is transpiled by a package names as babel.

babel is the javascript compiler/transpiler.

React.creatElement is a react element or javascript object it is rendered to html code by babel to the code that browser can understand.
babel takes JSX code and converts into react.createElement into reactelement or javascript object and rendered as html element.

if you want to give an attribute the you have to give it in camelcase.

When you are writing jsx code if you write it in single line then its okay if you wrting it in multiple line then you have to put it inside a parenthesis because babel need to understand it.


# React Component

Everythig in react is a component.
There are two types of components in react.
1.Class Based Components-
*its a old way of writing react components.
*It used javascript Classes.
2.Functional Based Components-
*.its a new way of writing react components.
*.Class based components uses javascript functions.






 