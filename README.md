"Surfing-App".

A user-friendly interactive web application that enables surfers to calculate the recommended surfboard volume (in liters) based on their weight and skill level. This project is developed using HTML, CSS, and JavaScript.


Features:

Calculate the volume of a surfboard using the following criteria:

-User weight

-Skill level (Beginner, Intermediate, Advanced)

-Adjustable surfing calculator panel

-Skill-level feedback messages

-A responsive design featuring a surfing theme

Technologies Used: 

•	HTML5

•	CSS3 

•	JavaScript 

Project Structure:

project-folder/

│

├── index.html     

├── style.css       

├── script.js       

└── Images/ 
    
    └── surfing - main pic
    
    └── surfing - favicon-32x32.png

How the Application Works:

1. User Inputs

The user enters:

•	Their name 

•	Weight in kilograms 

•	Surfing skill level
   
2. Skill Factor Selection
   
Each skill level has a different volume multiplier:

-Skill Level: Beginner, Intermediate, Advanced

-Factor: 0.6; 0.3; 0.1

3. Board Volume Calculation

The app calculates the board volume using:

Board Volume = Weight × Skill Factor

Example: 60kg × 0.3 = 18 liters 

HTML summary (index.html):

The HTML file includes:

•	A wrapper container for the surfing calculator 

•	Form inputs for: 

 - Name 

 - Weight 

 - Skill level 

•	Results display section 

•	Control buttons: 

 - Move right &  Move left 

 - Close a page

The Key Elements:

<form onsubmit="handleForm(event)"> - Handles form submission by using JavaScript.

<div id="results"> - Shows the calculated board volume.

<button onclick="moveRight()">
<button onclick="moveLeft()"> - Moves the calculator box to the right or left side of the screen.
