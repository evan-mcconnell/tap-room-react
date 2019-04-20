# Tap Room in React

#### React Tap Room project for Epicodus

_Published_ **April 19 2019**<br>
_Authors_  **Kim McConnell**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Target Audience/Users](#target-audience/users)
1. [User Stories](#user-stories)
1. [Product Requirements](#product-requirements)
1. [Non-technical Requirements](#non-technical-requirements)
1. [Component Map](#component-map)
1. [Development Specs](#development-specs)
1. [Stretch Goals](#stretch-goals)
1. [Installation](#installation)
1. [Issues and Questions During the Process](#issues-and-questions)
1. [Technologies Used](#technologies-used)
1. [License](#license)

## Description
An app that shows the state of a taproom of kegs, with features to add, remove, and edit. Built in React. 
####  _Some Notes on Angular vs React after Week 1 React_
The textbook difference between Angular and React is that one is a library and is a framework. In practice, that means that Angular has more _Angular-specific_ terminology and structure, and you need to understand at least a solid slice of both to get started. React has far less specifics, and although there are many "best ways" of doing things suggested by the React developers, there are always many more solutions that others have created. React lends itself well to this diversity by having a looser defenition of components themselves. While Angular compnents are a little more like what a layman might refer to as modules (I mean, they are pretty modular), React's version of components aren't tied to having a html chunk and a class chunk. They can be little units of both, sure, but they can also be more _functional_ based, and can alter and render  other components on a smaller scale than angular. 
Data flow/binding is also quite different since React is (at least suggested) to be unidirectional in its data flow. Data is always (or usually always, because React) passed down, unlike Angular where services can take and hold data to insert whereever it needs to go. 
I'm sure there are many more differences that I'll be discovering and exploring in the weeks to come.


## Learning Objective
Use React to build out the UI (Week 1) and use state with class componets to build interactive features (Week 2)

## Target Audience/Users
* The buisness selling the contents of the kegs for tracking, and the customer so that they may see what is available at any given time. 

## User Stories
**As a** customer,<br>
**I want** to easily see what drinks are avialale to me, along with ABV, price, and type<br>
**So that** I can make the right decision for my budget.

**As an** employee<br>
**I want** to be able to see how much is left in a keg, remove when empty, and add another full keg<br>
**So that** I can make my buisness more efficient.

## Product Requirements
* Display all avialable kegs
* Display the amount left in each keg
* Display price, ABV, type

## Non-technical Requirements
* Make it look good

## Component Map
#### First Draft of Component map 
![Component Map First Draft](./src/assets/images/plan.jpg)

### Development Specs
Specification | Input | Output
------------- | ----- | ------
 |  | 



## Stretch Goals
#### For Week 1 // Next Steps
* Fuctionality to remove kegs
* Fuctionality to Edit kegs
* Show Preview of new Keg while creating it
* Error handing when not filling out all parts of form
* Admin user that had access to edit and create
* Deploy on Firebase
* Hook up to actually database

## Installation
* Clone from https://github.com/kimmcconnell/tap-room-react.git
* Run `$ npm install`
* Run `$ npm run start`
* Navigate to http://localhost:8080/ in your browser to see the page. 


## Issues and Questions
#### These are some questions and issues that arose during the development process
* How to style those darn Link tags

_I knew I couldn't style them directly by calling them Link in the css (using style jsx), so first I wrapped them in an `<a>` tag and tried to style that. That was not working, so I tried css object to style the `<a>` tag. That didn't work. Eventually I found that css object styling for the Link tag itself did work. 

* How to change the class dynamically on looped child components

_I was originally thinking of this in Angular terms, trying to figure out how to bind a specific class. The solution was actually similar but required thinking in more Javascript terms- just use an if statement! I ran into some trouble initially when trying to return inside the render, which stopped the rest of the "real" render from happening._
* How to change the value of the total fill of the keg without changing the "Keg" component to a stateful one

_First I thought I had figured this out by making the fill indicator it's own component, but then realized that was also making too much of the application stateful. I made a control component for handling attribute and it solved the problem_
* Making the keg fill indicator actually change when the state changed

_I knew the click was working because of my console logs, but the kegfill component wouldn't re-render to show it. After reading a bit about lifecycles, I realized I had simply forgot to use the setState method, which quickly fixed the problem_

## Technologies Used
* React
* Webpack w/ Babel, Hot Module Replacement
* jsx 
* CSS

### License
[MIT](./LICENSE.txt)

Copyright (c) 2019 Kim McConnell