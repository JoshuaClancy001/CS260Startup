

###HTML Websites
 - MDNWebDocs
 - W3Schools.com

Elastic IP for Server
   - 52.21.62.117
   

Midterm Questions
### In the following code, what does the link element do?
The <link> element in HTML is used to define a relationship between the current document and an external resource. It is most commonly used to link to external stylesheets, but it can also be used for other purposes such as connecting to icons, alternate formats, or preloading resources.

Here are key attributes of the <link> element:

rel: Specifies the relationship between the current document and the linked resource (e.g., stylesheet, icon, preload).

Example: <link rel="stylesheet" href="styles.css">

href: Provides the URL of the linked resource (like the path to the external file).

type: Specifies the type of the linked resource, such as text/css for a stylesheet (this is often optional as it can be inferred from the rel attribute).

media: Specifies the media for which the linked resource is designed (e.g., screen, print).

Example: <link rel="stylesheet" href="print.css" media="print">

### In the following code,  what does a div tag do?
The <div> element in HTML is a generic container used to group together content or other elements for styling and layout purposes. It doesn't inherently carry any semantic meaning, but it serves as a flexible container that you can style using CSS or manipulate with JavaScript.

Here are the main features of the <div> element:

Block-Level Element: The <div> is a block-level element, meaning it takes up the full width available and starts on a new line by default.

No Default Styling: Unlike semantic elements like <header>, <footer>, or <article>, the <div> itself has no default style or meaning, making it a blank canvas for CSS.

Used for Grouping: The primary use of the <div> is to group related content or elements together, which allows you to apply styles or JavaScript actions to the group as a whole.

Class and ID: The <div> is often used in conjunction with class or id attributes to apply specific styles or behaviors.

Flexible Layout Tool: In modern web development, the <div> is often styled using CSS Flexbox or Grid to create complex page layouts. For example, you might use a <div> to define a section of a webpage that holds multiple columns.

### In the following code, what is the difference between the #title and .grid selector?

The difference between #title and .grid in CSS lies in what they select and how they are used:

1. #title Selector (ID Selector)
What it selects: It selects an element with the exact ID of title.

Usage: The # symbol is used to target elements by their unique ID. An ID should be unique within an HTML document, meaning you can only have one element with the same ID on a page.

2. .grid Selector (Class Selector)
What it selects: It selects all elements that have the class grid.

Usage: The . symbol is used to target elements by their class. A class can be applied to multiple elements on the page, so any element with the class grid will be selected.

### In the following code, what is the difference between padding and margin?

1. Padding
What it does: Padding is the space inside the element, between the content and the element's border. It increases the space around the content within the element itself.

Location: Inside the element, between the content and the border (if the element has a border).
Effect: Padding enlarges the clickable area (for elements like buttons), but it keeps the element's background color (if any) visible inside the padding.

2. Margin
What it does: Margin is the space outside the element, between the element's border and the surrounding elements. It creates space between the element and other elements on the page.

Location: Outside the element, between the border (or edge of the element) and adjacent elements.
Effect: Margins create separation between elements, but they don't affect the size of the element itself or its background.

### Given this HTML and this CSS how will the images be displayed using flex?

2. Main Properties of Flexbox
a. display: flex
This property turns the container into a flex container. The direct children of this container become flex items.

b. flex-direction
Defines the direction in which the flex items are placed in the container.

row (default): Items are placed in a horizontal row.

column: Items are placed in a vertical column.

row-reverse: Items are placed in reverse order horizontally.

column-reverse: Items are placed in reverse order vertically.

c. justify-content
Controls how the flex items are distributed along the main axis (which can be horizontal or vertical depending on the flex-direction).

center: Centers the items.

flex-start: Aligns items to the start of the flex container.

flex-end: Aligns items to the end of the container.

space-between: Distributes items with equal space between them.

space-around: Distributes items with space around them.

d. align-items
Controls the alignment of the flex items along the cross axis (perpendicular to the main axis).

stretch (default): Stretches items to fill the container.

center: Aligns items at the center.

flex-start: Aligns items at the start of the container.

flex-end: Aligns items at the end of the container.

baseline: Aligns items based on their text baseline.

e. flex-wrap
By default, flex items are placed in a single line. flex-wrap allows the items to wrap onto multiple lines if necessary.

nowrap (default): All flex items are placed in one line.

wrap: Flex items will wrap onto multiple lines if they overflow the container.

wrap-reverse: Flex items wrap onto multiple lines, but in reverse order.

3. Flex Property for Flex Items
The flex property is shorthand for three properties that define how a flex item grows and shrinks within its container:

flex-grow: Defines how much a flex item will grow relative to the other items if extra space is available.
flex-shrink: Defines how much a flex item will shrink relative to the other items if space is tight.
flex-basis: Defines the initial size of the flex item before growing or shrinking.

### What does the following padding CSS do?

1. Basic Padding Usage
You can apply padding to all sides of an element or to specific sides (top, right, bottom, left).

Example: Basic padding for all sides

.box {
  padding: 20px;
}
This will add 20 pixels of padding on all four sides (top, right, bottom, and left) between the element's content and its border.

2. Padding on Specific Sides
You can specify padding for individual sides using the following properties:

padding-top
padding-right
padding-bottom
padding-left

.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 5px;
}

3. Shorthand for Padding
CSS also provides a shorthand for padding values to simplify the code. You can use one, two, three, or four values to control padding:

One Value (applies to all sides):
padding: 20px;

Two Values (first value applies to top & bottom, second to left & right):
padding: 10px 20px;

Three Values (first applies to top, second to left & right, third to bottom):
padding: 10px 20px 15px;

Four Values (applies to top, right, bottom, and left, in that order):
padding: 10px 20px 15px 5px;


### What does the following code using arrow syntax function declaration do?

Arrow functions in JavaScript provide a more concise way to write functions. Introduced in ES6 (ECMAScript 2015), they offer a shorter syntax and behave differently than traditional functions in terms of the this keyword.

1. Basic Syntax
The arrow function syntax looks like this:

const functionName = (parameter1, parameter2) => {
  // Function body
  return parameter1 + parameter2;
};
Or, for single-expression functions, you can omit the curly braces and the return keyword:

const sum = (a, b) => a + b;

Features:
No return keyword needed: If the function body contains a single expression, that expression is implicitly returned.
Parentheses around parameters: For a single parameter, the parentheses can be omitted.

const square = x => x * x;  // Single parameter, no parentheses needed
const noParam = () => console.log('No parameters');
const multiply = (a, b) => a * b;  // Multiple parameters, parentheses required

# JavaScript arrow function

Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the `arrow` syntax was created. This syntax replaces the need for the `function` keyword with the symbols `=>` placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

```js
() => 3;
```

The following two invocations of sort are equivalent.

```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```

Besides being compact, the `arrow` function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

## Return values

Arrow functions also have special rules for the `return` keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

```js
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

## This pointer

Next, arrow functions inherit the `this` pointer from the scope in which they are created. This makes what is known as a `closure`. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript `scope`. For now consider the following example.

The function `makeClosure` returns an anonymous function using the arrow syntax. Notice that the `a` parameter is overridden, a new `b` variable is created, and both `a` and `b` are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

```js
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
```

Next, we declare the variables `a` and `b` at the top level scope, and call `makeClosure` with `a`.

```js
const a = 'a';
const b = 'b';

const closure = makeClosure(a);
```

Now, when we call the `closure` function, it will output the values contained in the scope in which it was created, instead of the current values of the variables.

```js
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```

Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

## Putting it all together

Now that you know how functions work in JavaScript, let's look at an example that demonstrates the use of functions, arrow functions, parameters, a function as a parameter (callback), closures, and browser event listeners. This is done by implementing a `debounce` function.

The point of a debounce function is to only execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will case the time window to reset. This is important in cases where a user can trigger expensive events thousands of times per second. Without a debounce the performance of your application can greatly suffer.

The following code calls the browser's `window.addEventListener` function to add a callback function that is invoked whenever the user scrolls the browser's web page. The first parameter to `addEventListener` specifies that it wants to listen for `scroll` events. The second parameter provides the function to call when a scroll event happens. In this case we call a function named `debounce`.

The debounce function takes two parameters, the time window for executing the window function, and the window function to call within that limit. In this case we will execute the arrow function at most every 500 milliseconds.

```js
window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
```

The debounce function implements the execution of windowFunc within the restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called. The returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the `windowFunc` it sets a timer based on the value of `windowMs`. If the debounce function is called again before the window times out then it resets the timeout.

```js
function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}
```


### What does the following code using map with an array output?


# JavaScript array


JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index. You can create an array with the Array constructor or using the array literal notation shown below.

```js
const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3
```

## Object functions

The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => i < 1)`          |

```js
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```

### What does the following code output using getElementByID and addEventListener?

1. getElementById
The getElementById method is used to select an HTML element by its ID. It returns the first element that matches the specified ID. This method is useful for targeting specific elements in the DOM to manipulate them.

document.getElementById('elementId');

document: Refers to the HTML document.
'elementId': The ID of the HTML element you want to select.

2. addEventListener
The addEventListener method is used to attach an event handler to an element. It allows you to listen for events like clicks, keypresses, or form submissions, and execute a function when the event occurs.

element.addEventListener('event', function, useCapture);

element: The DOM element you want to attach the event to (can be selected using getElementById or other selection methods).
'event': The type of event to listen for (e.g., 'click', 'keydown', 'submit').
function: The function to execute when the event occurs (known as the event handler).
useCapture (optional): A boolean that controls event propagation, typically false (default). This is rarely used unless dealing with event propagation/bubbling.

3. How getElementById and addEventListener Work Together
You often use getElementById to select an element and then use addEventListener to add an event to that element. Here’s a step-by-step explanation:

Select the element: Use getElementById to retrieve the element from the DOM by its ID.
Attach an event listener: Use addEventListener to listen for an event (e.g., click) and define what happens when that event occurs.



What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: 
How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS.
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?
### What will the following code using Promises output when executed?

The rendering process of your HTML executes on a single thread. That means that you cannot take a long time processing JavaScript on the main rendering thread. Long running, or blocking tasks, should be executed with the use of a JavaScript `Promise`. The execution of a promise allows the main rendering thread to continue while some action is executed in the background.
You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of the promise execution is always in one of three possible states.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also in a for loop outside the promise so that both code blocks are running in parallel.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you wait ten seconds and then log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```
