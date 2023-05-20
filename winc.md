# 11. Classes vs functions

Up til now, you have been writing components by using functional components that return some JSX. However, there is another way to write components in React, which was the standard in the first couple years: class components.

We recommend that you write functional components, as that has become the new standard since the introduction of React hooks in 2019, and they are less verbose. However, when you start working in a company that has been using React for a while, chances are that you will encounter class components that were written a while ago, so it is important to have a basic grasp of how they work. There are also a few use cases where classes are still the best way to go.

## Learning goals

After this lesson you will:
- Know what class components are and what the difference between a functional components is.
- Get a basic understanding of JavaScript classes.
- Be able to convert a class component to a function component.

## JavaScript classes

In JavaScript, a class is a way to create objects in a standard way with certain properties and possible behavior. 

For our purpose of understanding React class components, there are two features of JavaScript classes we must understand. 


- ▶︎  First, we create an object from a class by using the `new` keyword. This generates a JavaScript object with the properties and behavior defined in the class. We call this object an instance of the class.

Inside the class, we use the keyword `this` to refer to the instance, so if you have a class with a count property, inside the methods (a function inside a class is a method) of that class, you can access this count property with this.count. This concept (this) is notoriously difficult to grasp.

**NOTE** It is not necessary to fully understand it, but if you are curious and want to learn more, we recommend the MDN docs. 

- ▶︎ Second, a class can have and usually has a constructor method. This constructor can set up some of the properties on the class, and is run at the very beginning when you create an instance.

A class generally has some other methods as well, to get some behavior that we can attach to the objects created from the class.

- ▶︎  There is one final thing about classes you need to know. Classes can also extend other classes. This ensures that the class has all the properties and methods the original class has.

_Let’s say we have an Animal class and a Dog class, which extends the Animal class. Instances of the Dog class then have all the properties of both. If we then access a property or method on the instance, JavaScript first looks inside the Dog class, and if it cannot find it, it looks inside the Animal class. Inside the Dog class constructor, we can access the Animal class constructor with `super()`._

## Exercise: JavaScript classes

At the end of this exercise, you will have a basic understanding of JavaScript classes. 

**Description**

Copy the following code by pressing the button in the top right and run it locally:

                    class Animal {
                       constructor(species, legs) {
                           this.species = species;
                           this.legs = legs;
                       }

                       identify() {
                           console.log(
                               `This animal is a ${this.species}, and has ${this.legs} legs.`
                           );
                       }
                    }

                    class Dog extends Animal {
                       constructor() {
                           super('dog', 4); // a dog has 4 legs
                       }

                       bark() {
                           console.log('Woof!');
                       }
                    }

                    const human = new Animal('human', 2);
                    human.identify();

                    const dog = new Dog();
                    dog.bark();
                    console.log(dog.legs);
                    dog.identify();


**NOTE** ⚠️ How to run a JS file locally again?
Use the command node and then the filename in the terminal: node classExercise.js

The Animal class has two properties, the species and the number of legs. It also has an identify method, where you can see on line 9 that we have to access the previously mentioned properties by prefixing it with this.

The Dog class does not have its own properties, but it extends the Animal class, which means that we can still have a species and a number of legs on them. You can see this in the constructor, where we use super() to call the constructor of the Animal class with the correct arguments. The dog class does have another method, which the Animal class doesn’t have: bark(). It does something specific to dogs, so it should belong to the Dog class.

Now it’s time to play around a bit with the code. 


Item 2 - JavaScript classes
Item 3 of 5
Exercise: JavaScript classes
At the end of this exercise, you will have a basic understanding of JavaScript classes. 

Description

Copy the following code by pressing the button in the top right and run it locally:



⚠️ How to run a JS file locally again?
–
Use the command node and then the filename in the terminal: node classExercise.js

The Animal class has two properties, the species and the number of legs. It also has an identify method, where you can see on line 9 that we have to access the previously mentioned properties by prefixing it with this.

The Dog class does not have its own properties, but it extends the Animal class, which means that we can still have a species and a number of legs on them. You can see this in the constructor, where we use super() to call the constructor of the Animal class with the correct arguments. The dog class does have another method, which the Animal class doesn’t have: bark(). It does something specific to dogs, so it should belong to the Dog class.

Now it’s time to play around a bit with the code. 

## Steps

- Try to make the human bark. Read the error message carefully. 

- Write a fetch method on the Animal class, which logs: “I don’t want to fetch.”.

- Write a 'fetch' method on the Dog class, which takes 1 argument (the thing to fetch), and logs that it is fetching the thing. Test out what the human does when it fetches, and if you can make the dog fetch a ball.

- Add a name prop to the Animal and give it a value in the constructor (much like the species and legs props). Then let the Dog class constructor also accept a name and make sure that the prop is properly set. Ensure it is working properly by giving `human` and `dog` a name, and logging those out (`console.log(human.name);`).

- Add a `call` method that takes one name argument, and responds with `Yes, this is ${name}` if the name matches to its own name. Create another dog with a different name, and see if the dogs respond only to their own name. Ensure that the human also responds.

- Add a 'Cat' class, and write two methods, one to make it meow, the other to make it scratch something. Note that cats do not listen to their name, so the call method should probably just ignore the caller.

## Resources 

[mozilla classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=de)

[mozilla thi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this?retiredLocale=de)

[mozilla bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind?retiredLocale=de)

check for [solutiton](index.js)

## Class components in React

In React, the features of classes we talked about are used in class components. Class components must always extend React’s Component class, which comes with a lot of methods and some properties. A class component must have a render method, which returns the JSX. Constructors are used to handle state, among other things. 

We will show you two equivalent components to get used to class components. The first one is a functional component from earlier in this module:


                  import { useState } from 'react';

                  export const DrinkButtons = () => {
                      const [drinkSelected, setDrinkSelected] = useState(false)

                      const clickHandler = () => {
                          setDrinkSelected(true);
                      };

                      return (
                          <>
                          <div className="Button-group">
                              <button className="Button" onClick={clickHandler}>
                                  Tea
                              </button>
                          </div>
                          </>
                          );
                  };

Now we have the exact same functionality, but written as a class component:

                  import { Component } from 'react';

                  export class DrinkButtons extends Component {
                      constructor(props) {
                          super(props);
                          this.state = {drinkSelected: false};
                          this.clickHandler= this.clickHandler.bind(this);
                      }

                      clickHandler(){
                          this.setState({ drinkSelected: true });
                      }

                      render(){
                          return (
                              <>
                                  <div className="Button-group">
                                      <button className="Button" onClick={this.clickHandler}>
                                          Tea
                                      </button>
                                  </div>
                              </>
                              );
                      }
                  }

You can immediately see that the functional component is much smaller and easier to grasp. One thing that is almost identical between the two is the JSX that is returned (from the function component and from the render method on the class component). There is one key difference: instead of just having `onClick={clickHandler}`, we instead have to add `this.`. 

The handling of the state is much more elegant in the function component. However, this does mean that a lot of the magic of what is happening is hidden away from the developer. In the class component, we assign the initial state inside the constructor on line 6. Setting any property inside the constructor always has to come after forwarding the props to `super`. 

Whereas with the `useState` hook, we always got a setter function along with the state, in the case of class components, there is a default `setState` method that you can use to set the state. See line 11. 

One peculiarity you have with class components is that you have to bind your event handlers (line 7). You will see this often in class components, which has to do with how classes work. In general, you can say that if you want to refer to a method without calling it directly (as in `this.clickHandler` on line 18), you have to bind it inside the constructor. When writing class components, this is easy to forget and it can become the source of lots of frustrating bug hunts. 

## Exercise: Convert class component to function component

At the end of this exercise, you can convert a class component to a function component.

**Description**

The following is a class component from the documentation of React. Your task is to convert this to a function component!

                  import { Component } from 'react';

                  export class Toggle extends Component {
                     constructor(props) {
                         super(props);
                         this.state = { isToggleOn: true };
                         this.handleClick = this.handleClick.bind(this);
                     }

                     handleClick() {
                         this.setState((prevState) => ({
                             isToggleOn: !prevState.isToggleOn,
                         }));
                     }

                     render() {
                         return (
                             <button onClick={this.handleClick}>
                                {this.state.isToggleOn ? 'ON' : 'OFF'}
                             </button>
                         );
                     }
                  }

## Steps

- Create a Toggle.jsx file in an existing or new project and paste in this code. Render it somewhere on the page so you can see it working.

- Rename the class to ToggleOld. Create a new function called Toggle and export it. 

- Try to copy all the exact same functionalities.

check the [solution](Toggle.jsx)

**Documentation**
- [React.Component](https://qag99.online/school/hvtrs8%2F-rgaaths%2Copg-dmcq%2Fpeccv-aoopmngnv.jtol)

- Function and class components

- Converting a function to a class

- Handling events


