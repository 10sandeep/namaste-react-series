# React makes our app faster!

its not only react makes our app faster, but also the fact that we are using a virtual DOM, which is a lightweight in-memory and also many packages are making our app faster.

# Package.json

it is a configuration for our npm

npm-it is a package manager that manages package that we install in our project.

bunddler is the most important package in our package.

# what is a bundler

when we have normal html css js file our whole code needs to be bundled before it could send to production,bundler helps to do all these things

vite webpack are bundler

it helps to bundle our code and also helps to minify our code and also helps to make our code faster and also it bundles/ packages our app properly that it can be shipped to production.

when we do createreact app this create react app uses web- pack bundler behind the scene.

to install dependecies we have to command npm install -parcel

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