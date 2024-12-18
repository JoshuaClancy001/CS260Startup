

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



### What does the following line of Javascript do using a # selector?

1. How the # Selector Works
The # symbol is followed by the ID of the element you want to style. Since IDs are unique within an HTML document, the # selector can only be applied to one element.
```HTML
<div id="header">This is the header</div>
<p id="intro">This is the introduction paragraph</p>
```
```CSS
#header {
  background-color: lightblue;
  font-size: 24px;
}

#intro {
  color: green;
  font-style: italic;
}
```
Here, the CSS styles the element with the id="header" and the element with id="intro":

The #header rule sets the background color and font size for the <div>.
The #intro rule changes the text color and style of the paragraph <p>.

2. Key Characteristics of the # Selector
The # selector targets a single element based on its ID, which should be unique within the HTML document.
IDs are case-sensitive, so #header and #Header would refer to different elements if they existed.

### Which of the following are true? (mark all that are true about the DOM)

# Document Object Model

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.

```html
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```

```css
p {
  color: red;
}
```

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

![dom](dom.jpg)

## Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The [DOM Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element) provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through every element in the tree.

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property.

```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

## Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements call the `removeChild` function on the parent element.

```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

## Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first `div` element in the DOM and replaces all the HTML it contains.

```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

```html
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.

## Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called [event listeners] Here is an example of an event listener that gets called when an element gets clicked.

```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events). Here are a few of the more commonly used events.

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

You can also add event listeners directly in the HTML. For example, here is a `onclick` handler that is attached to a button.

```html
<button onclick='alert("clicked")'>click me</button>
```

### By default, the HTML span element has a default CSS display property value of: 

By default, the HTML <span> element has a CSS display property value of inline.

Explanation:
Inline Element: This means that the <span> element does not start on a new line and only takes up as much width as necessary. It can contain text and other inline elements without breaking the flow of content.
Usage: <span> is typically used to apply styles or manipulate small portions of text within a block of text without affecting the surrounding layout.


### How would you use CSS to change all the div elements to have a background color of red?

```CSS
/* styles.css */
div {
    background-color: red;
}
```
### How would you display an image with a hyperlink in HTML?

```HTML
<a href="https://www.example.com">
    <img src="https://via.placeholder.com/150" alt="Placeholder Image" width="150" height="150" title="Click to visit Example.com" />
</a>
```

### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

In the CSS box model, the ordering of the box layers, starting from the inside and working outward, is as follows:

Content: This is the innermost layer that contains the actual content of the element, such as text, images, or other media.

Padding: This layer surrounds the content and provides space between the content and the border. Padding is transparent and can have different values for each side (top, right, bottom, left).

Border: This layer wraps around the padding (if any) and the content. The border can have different styles, widths, and colors. It defines the outer edge of the element.

Margin: This is the outermost layer that creates space between the element's border and other surrounding elements. Like padding, margins are also transparent and can be set individually for each side.


### Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

```CSS
.green-text {
    color: green;
}
```

### What will the following code output when executed using a for loop and console.log?

```js
for (let i = 1; i <= 5; i++) {
    console.log("Current number is: " + i);
}
```

```csharp
Current number is: 1
Current number is: 2
Current number is: 3
Current number is: 4
Current number is: 5
```

### How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Color Example</title>
</head>
<body>

    <p id="byu">This text will change color to green.</p>
    
    <script>
        // JavaScript code to change text color
        const element = document.getElementById("byu");
        element.style.color = "green";  // Change text color to green
    </script>

</body>
</html>
```

### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

Summary of Opening Tags:
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
Second Level Heading: <h2>
First Level Heading: <h1>
Third Level Heading: <h3>

### How do you declare the document type to be html?

Using <!DOCTYPE html>

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML Document</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>
```

### What is valid javascript syntax for if, else, for, while, switch statements?

Pretty much idential to languages like C++ and Java

```js

switch (expression) {
    case value1:
        // code to execute if expression === value1
        break;
    case value2:
        // code to execute if expression === value2
        break;
    default:
        // code to execute if expression doesn't match any case
}
```
### What is the correct syntax for creating a javascript object?

```js

const objectName = {
    property1: value1,
    property2: value2,
    method1: function() {
        // code to execute
    }
};
```

```js
function ObjectName(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
    this.method1 = function() {
        // code to execute
    };
}
```
```js

class ClassName {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
    
    method1() {
        // code to execute
    }
}
```


### Is it possible to add new properties to javascript objects?

YES

Dot Notation: Use object.propertyName to add a new property.
Bracket Notation: Use object["propertyName"] to add a new property, especially useful for dynamic keys.
Object.assign(): Merge properties from one or more objects into an existing object.
Spread Operator: Create a new object that combines properties from existing objects with new properties.


### If you want to include JavaScript on an HTML page, which tag do you use?

```HTML
<script>
   javascript
</script>
```

### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Example</title>
</head>
<body>

    <p id="animal">animal</p>
    <p id="fish">fish</p>
    
    <script>
        // JavaScript to change the text
        const animalElement = document.getElementById("animal");
        animalElement.textContent = "crow"; // Set the text to "crow"
    </script>

</body>
</html>
```

### Which of the following correctly describes JSON?

JSON, which stands for JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. Here are the key characteristics and features of JSON:

1. Data Format
JSON is a text format that is completely language-independent but uses conventions that are familiar to programmers of the C family of languages (including C, C++, C#, Java, JavaScript, Perl, and Python).
2. Structure
Key-Value Pairs: JSON data is represented as key-value pairs, similar to objects in JavaScript.
Objects: Enclosed in curly braces {}. An object contains a collection of key-value pairs.

3. Data Types
JSON supports the following data types:
Strings: Must be enclosed in double quotes.
Numbers: Can be integers or floating-point.
Booleans: true or false.
Null: Represents an empty value.
Objects: As described above.
Arrays: As described above.


### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

1. chmod
Description: Changes the file mode (permissions) of a file or directory.
Usage: chmod [permissions] [file]
Example: chmod 755 myfile.txt changes the permissions of myfile.txt to allow the owner to read, write, and execute, while allowing others to read and execute.
2. pwd
Description: Prints the current working directory (the directory you are currently in).
Usage: pwd
Example: Running pwd might output /home/user/documents, indicating your current location in the filesystem.
3. cd
Description: Changes the current directory to another directory.
Usage: cd [directory]
Example: cd /home/user changes the current directory to /home/user.
4. ls
Description: Lists the files and directories in the current directory.
Usage: ls [options] [directory]
Example: ls -l displays a detailed list of files and directories with permissions, owner, size, and modification date.
5. vim
Description: A powerful text editor that can be used to create and edit files.
Usage: vim [file]
Example: vim myfile.txt opens myfile.txt in the Vim editor.
6. nano
Description: A simple, user-friendly text editor for creating and editing files.
Usage: nano [file]
Example: nano myfile.txt opens myfile.txt in the Nano editor.
7. mkdir
Description: Creates a new directory.
Usage: mkdir [directory]
Example: mkdir new_folder creates a new directory called new_folder.
8. mv
Description: Moves or renames files or directories.
Usage: mv [source] [destination]
Example: mv oldname.txt newname.txt renames oldname.txt to newname.txt. To move a file: mv file.txt /path/to/destination/.
9. rm
Description: Removes (deletes) files or directories.
Usage: rm [options] [file]
Example: rm myfile.txt deletes myfile.txt. To remove a directory: rm -r myfolder.
10. man
Description: Displays the manual page for a command, providing detailed information about its usage.
Usage: man [command]
Example: man ls displays the manual for the ls command.
11. ssh
Description: Connects to a remote machine securely using the SSH (Secure Shell) protocol.
Usage: ssh [user]@[host]
Example: ssh user@192.168.1.1 connects to the machine at that IP address as the specified user.
12. ps
Description: Displays information about running processes.
Usage: ps [options]
Example: ps aux shows detailed information about all running processes.
13. wget
Description: Downloads files from the web using HTTP, HTTPS, or FTP.
Usage: wget [options] [URL]
Example: wget http://example.com/file.zip downloads the file from the specified URL.
14. sudo
Description: Executes a command with superuser (administrator) privileges.
Usage: sudo [command]
Example: sudo apt-get update runs the apt-get update command with superuser privileges, allowing the user to update package lists.


### Which of the following console command creates a remote shell session?

ssh [user]@[host]: This command allows you to securely connect to a remote machine. It establishes an encrypted connection over a network, allowing you to execute commands on the remote system as if you were using a local terminal.


### Which of the following is true when the -la parameter is specified for the ls console command?

1. List All Files and Directories
The -a option includes all files and directories, including hidden ones (those that start with a dot .).
2. Long Format Output
The -l option displays the output in a long listing format, which provides detailed information about each file and directory.
3. Information Included
The long format output includes:
File type and permissions
Number of links
Owner name
Group name
File size (in bytes)
Last modification date and time
File or directory name

### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

1. Top Level Domain (TLD)
click: This is the Top Level Domain (TLD). TLDs are the last segment of a domain name, following the final dot. In this case, click is a generic top-level domain (gTLD).
2. Root Domain
bozo.click: The root domain is often considered the domain name directly beneath the TLD. Here, bozo.click serves as the root domain.
3. Subdomain
fruit.bozo.click: This portion is considered a subdomain of the root domain. Specifically, fruit is a subdomain of bozo.click, and banana is a subdomain of fruit.bozo.click.
Breakdown of the Components
Root Domain: bozo.click
Top Level Domain (TLD): click
Subdomain:
fruit (subdomain of bozo.click)
banana (subdomain of fruit.bozo.click)

#### Is a web certificate is necessary to use HTTPS.

Yes, a web certificate (commonly referred to as an SSL/TLS certificate) is necessary to use HTTPS (Hypertext Transfer Protocol Secure). Here’s why:

1. Encryption
HTTPS encrypts the data exchanged between a user's browser and a web server, protecting sensitive information (like login credentials, payment details, etc.) from eavesdropping and tampering.
2. Authentication
The SSL/TLS certificate verifies the identity of the website, ensuring that users are communicating with the intended server and not a malicious entity. This helps prevent man-in-the-middle attacks.
3. Data Integrity
SSL/TLS certificates ensure that the data sent and received has not been altered or corrupted during transmission. This is critical for maintaining the integrity of the data.
4. Browser Trust
Modern web browsers display warnings when users visit sites without a valid SSL/TLS certificate. This can discourage users from engaging with or providing information to the site, as it raises concerns about security.
Types of SSL/TLS Certificates
Domain Validated (DV): Confirms ownership of the domain. This is the simplest and quickest type of certificate to obtain.
Organization Validated (OV): Requires verification of the organization’s identity along with domain ownership.
Extended Validation (EV): Provides the highest level of trust and requires extensive verification of the organization before issuance.

### Can a DNS A record can point to an IP address or another A record.

A DNS A record (Address Record) can point to an IP address, but it cannot point to another A record. Here’s a detailed explanation:

1. Pointing to an IP Address
An A record is primarily used to map a domain name to an IPv4 address. For example, if you have a domain name like example.com, the A record can point to an IP address such as 192.0.2.1.

2. Cannot Point to Another A Record
An A record cannot directly point to another A record. Each A record must resolve to an IP address. However, you can achieve similar functionality through other DNS records:
CNAME Record: A CNAME (Canonical Name) record can point a domain name to another domain name (including those with A records). For example, if you want www.example.com to point to example.com, you would use a CNAME record.

### Port 443, 80, 22 is reserved for which protocol?

Port 80: Reserved for HTTP.
Port 443: Reserved for HTTPS.
Port 22: Reserved for SSH.

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























---

### **Networking**

1. **Default Ports**:
   - **HTTP**: Port 80  
   - **HTTPS**: Port 443  
   - **SSH**: Port 22  

2. **HTTP Status Code Ranges**:
   - **300** (Redirection): Indicates the client must take additional action to complete the request (e.g., redirect to another URL).
   - **400** (Client Error): Indicates an error in the request (e.g., bad syntax or unauthorized access).
   - **500** (Server Error): Indicates a server-side issue (e.g., an internal server error).

3. **HTTP Header `Content-Type`**:
   - Specifies the media type of the resource or data being sent (e.g., `application/json`, `text/html`). It allows the server and client to interpret the data correctly.

4. **Cookies**:
   - **Secure Cookie**: Sent only over HTTPS, ensuring confidentiality and integrity.
   - **Http-Only Cookie**: Cannot be accessed via JavaScript, reducing the risk of XSS attacks.
   - **Same-Site Cookie**: Restricts cookies to first-party or same-site requests, mitigating CSRF attacks.

---

### **Express.js**

1. **Console Log Output for Middleware**:
   Assuming middleware processes a GET request with the URL path `/api/document`, the specific output depends on what the middleware logs. If middleware logs `req.method` and `req.url`, the output would be:
   ```
   GET /api/document
   ```

2. **Front-End Fetch with Express Service**:
   The response from `fetch` depends on the server-side Express code and what it returns. Typically, the `fetch` function resolves to a `Response` object. If the server responds with JSON, `fetch` would return parsed JSON data after calling `.json()`.

---

### **MongoDB**

1. **Query `{name: "Mark"}`**:
   - Selects all documents in the collection where the `name` field equals `"Mark"`.

2. **Storing User Passwords**:
   - Passwords should always be **hashed and salted** using algorithms like bcrypt, Argon2, or PBKDF2 to ensure security.

---

### **WebSockets**

1. **Front-End Console Log**:
   The specific output depends on the server logic and what the WebSocket sends. Typically, it logs received messages or events.

2. **WebSocket Protocol Purpose**:
   - Provides a persistent, full-duplex communication channel between the client and server for real-time data exchange.

---

### **Acronyms**

- **JSX**: JavaScript XML
- **JS**: JavaScript
- **AWS**: Amazon Web Services
- **NPM**: Node Package Manager
- **NVM**: Node Version Manager

---

### **React**

1. **Generated Text from React Component**:
   - The output depends on the specific React component and its parameters. Generally, it renders content dynamically based on props or state.

2. **Components Including Each Other**:
   - The DOM structure depends on the hierarchy and rendering logic of the components.

3. **React `useState`**:
   - Allows you to add state to functional components.

4. **React Hooks**:
   - **State Hook**: Manages state in a functional component.
   - **Context Hook**: Provides a way to share data between components without prop drilling.
   - **Ref Hook**: Allows direct DOM manipulation or persisting mutable values.
   - **Effect Hook**: Manages side effects (e.g., fetching data, updating the DOM).
   - **Performance Hook**: Optimizes rendering and performance.

---

### **React Router**

- Statements about React Router vary depending on the routing logic. It enables declarative navigation in React applications.

---

### **Node.js and Tools**

1. **`package.json`**:
   - Defines a Node.js project’s metadata, dependencies, and scripts.

2. **`fetch`**:
   - Performs HTTP requests and returns a `Promise` resolving to a `Response` object.

3. **Node.js**:
   - A runtime environment for executing JavaScript server-side.

4. **PM2**:
   - A process manager for Node.js applications that supports load balancing, monitoring, and restarting.

5. **Vite**:
   - A fast build tool and development server optimized for modern JavaScript frameworks like React and Vue.

--- 

Let me know if you'd like further elaboration or examples!