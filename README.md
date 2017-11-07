# Emberella Treadmill Demo App

Thanks for stopping by!

This demo app showcases the challenges of listing more than a few dozen records and how to address the problem with the addons [Emberella Treadmill](https://github.com/realityendshere/ella-treadmill) and [Emberella Sparse](https://github.com/realityendshere/ella-sparse).

This example illustrates a relatively extreme scenario of a customer with 30,099 records to manage. Personally, I have successfully applied the strategy of lazily-loading and lazily-rendering records with listing sizes from 100 to 100,000. In other words, it's another user interaction pattern to consider as an alternative to pagination or infinite scroll.

This app was used as part of a talk at the Ember Meetup in Los Angeles on October 18, 2017. The companion slide deck can be found [here](https://github.com/realityendshere/ella-treadmill-demo/blob/master/2017-10-18-Ember-Meetup-LA.pdf).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone https://github.com/realityendshere/ella-treadmill-demo.git` this repository
* `cd ella-treadmill-demo`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

The links in the included slide deck point to corresponding routes at [http://localhost:4200](http://localhost:4200).
