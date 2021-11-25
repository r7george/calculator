# JavaScript calculator
### Author - Reuben George
A simple calculator made with HTML, CSS and JavaScript

## General Info
This calculator was made during the third week of my _nology course where we were taught how to use arrow functions and event listeners to interact with objects on the webpage (DOM).

### Technologies used
HTML, CSS, SCSS, JavaScript

### Design Inspiration
I used a similar layout to the Apple phone calculator but modified the colour scheme based on a different colour palette. The main aim of the task was to focus on a functional calculator, hence the design aspect of the calculator didn't take precident.

## How it works

The basis of how my calculator works is by attaching event listeners to each button within the keypad based on their class. I'll give a brief description of the global variables used, pure functions and *handle* functions I use below.

### Global Variable
- `firstNumber`: this is the first number processed within the calculator but stored as a string so it can be concatenated for larger numbers and for the calculator display.
- `operator`: this is the main operator that dictates the function the calculator performs, stored as a string too for similar purposes as `firstNumber`.
- `secondNumber`: this is the second (and final) number processed within the calculator, stored as a string for similar purposes as above.

### Pure (helper) Functions
- `getValue()`: used to get the value of DOM element passed
- `getId()`: used to get the value of DOM element passed
- `resetVariable()`: used to reset whichever variable passed

### Handle Functions
- `handleNumClick()`: used by the event listeners attached to the number buttons to set the `firstNumber` and `secondNumber` variables, update the display's innerHTML, and concatenate the numbers on the display
- `handleMainClick()`: used by the event listeners attached to the main operator buttons to set the `operator` variable and update the display's innerHTML
- `handleSubClick()`: used by the event listeners attached to the sub operator buttons to carry out the required function based on the button (AC, +/- or %)
- `handleEqualClick()`: used by the event listener attached to the equal button to carry out the calculator operation based on the operator and update the output's innerHTML

## Future implementation
The next natural step from here would have been to implement more functions found in a scientific calculator given more time.