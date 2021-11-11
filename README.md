# JavaScript calculator
# Author - Reuben George
A simple calculator made with HTML, CSS and JavaScript

## General Info
This calculator was made during the third week of my _nology course where we were taught how to use arrow functions and event listeners to interact with objects on the webpage (DOM).

### Technologies used
HTML, CSS, SCSS, JavaScript

### Design Inspiration
I used a similar layout to the Apple phone calculator but modified the colour scheme based on a colour scheme I'd found online. The main aim was to create something with aesthetic colour combinations.


## How it works

The basis of how my calculator works is by attaching an event listener to every button, regardless of class, calling the function known as **buttonClassDetermining()** when any button is clicked.

This class is used to determine the class of the button that's been pressed, and based on whether it's *.calculator__keypad__number*, *.calculator__keypad__sub-operator*, *.calculator__keypad__main-operator* or *.calculator__keypad__equals*, it'll call the relevant function (displayed below).

### Basic structure within the code

Variables:
- *firstNumber*: first number entered into the calculator
- *secondNumber*: second number entered into the calculator after the operator
- *operator*: either add, subtract, times and divide

If:
- className = *.calculator__keypad__number*: **setVariable()**
- className = *.calculator__keypad__sub-operator*: **subOperators()**
- className = *.calculator__keypad__main-operator*: **setVariable()**
- className = *.calculator__keypad__equals*: **pressingEqual()**

Classes and what they do:
- **setVariable()**: sets variables *firstNumber*, *secondNumber* and *operator* based on if/else-if statements using the className of the button clicked and combinations of the content of the variables as the conditions to determine 
- **pressingEqual()**: called by the event listener within the equals button to determine what action to carry out based on the operator selected by **setVariable()**
- **subOperators()**: called by any sub-operator button to carry out the desired function


### Here are some bugs I found & fixed (ish)
- Numbers stretched the screen: used CCS property **"overflow:hidden"** & setting a width
- Pressing two operators after a number caused them both to show up in the display: used an else if loop within *.setVariable* to reset the operator on the screen