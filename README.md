# Challenge Purpose & Goals
In this challenge, candidates exercise a variety of event handling techniques (clicks, context menu, key presses, change listeners), accept an array of props, manage two-dimensional array state (involving pushing, splicing and unshifting) and fulfill a variety of written requirements. Tests are also fairly verbose and require some thorough reading and understanding to make the most of (although the challenge can certainly be finished without doing so).
<p>The challenge also prompts the candidate to offer a brief written response about future features they'd like to add to the app, ideas for improving testing or usability issues in the current design.</p>

---
### Difficulty Estimates
Intermediate Difficulty, **1 Hour 50 Minutes** Estimated Time

---
# Candidate Instructions

---
## Overview
Oftentimes, processes can be represented as a series of stages. The concept of an assembly line can be a useful way to organize production logic, lists of tasks in varying degrees of completion, or track individuals progressing through a series of milestones.
Here's a simple diagram of the major stages that could be in a software assembly line:

<img src="images\line-diagram.jpg" width="800" height="200">
<br>
For this challenge, you'll write an Angular component that is an initial prototype of an organizational tool for personal and business use based on the assembly line concept.
After you finish coding, you'll complete a written response (details are provided at the bottom of the instructions).

## Functional requirements

This section contains the specifications for the component. Feel free to skip ahead momentarily to the demo screen capture at the bottom of these instructions, which offers a concrete depiction of the behavior you'll be creating and might help to shed light on the written descriptions.
### Props and item name input
The ```AssemblyLineComponent``` will accept an array of string ```stages``` as ```@Input``` which correspond to the names of sequentially-ordered lists which items will move through as they progress through the virtual assembly line. Each stage is a list because it can contain more than one item at once. Items can be added to the first stage of the assembly line by means of an input box which can be submitted with the ```Enter``` key.
### Moving items between stages
Once added, items can be left-clicked by the user to be moved to the next stage. If an item is in the last stage and is left-clicked, it is deleted entirely. Conceptually, you could think of an item which progresses beyond the last stage as a task having been finished or a product which was deployed.

Items can also be right-clicked, moving them backwards to the previous stage, and are deleted if they are moved backwards past the first stage. Conceptually, moving an item backwards to the point of deletion could represent an idea that was rejected or a product that was defective and never made it through the assembly process.

Items cannot skip stages or be deleted midway through the line--they have to be moved all the way beyond one edge or another in order to be removed from the assembly line.

Furthermore, when an item is moved backwards to the previous stage, it should be appended to the list of items currently at that stage. When an item is moved forward to the next stage, it should be prepended to the list for its new stage.
### Rendering and behavior
The component must render a number of elements for the testing suite to use, all of which will be accessed by the ```data-test``` attribute and index (specifically, the test code will retrieve the n-th stage or the n-th item in a stage by the ```data-test``` attribute). Here is the complete list of elements that must be rendered along with their behavioral specifications:

 - An HTML element ```<input data-test="assembly-add-item"/>``` should be provided for input. The testing suite will call ```onChange``` to add text and ```onKeyPress``` with the ```Enter``` key to submit the value. The input field's value, upon Enter being pressed, will be added to the beginning of the first stage's item list and the ```assembly-add-item``` element will be cleared. Items can be added at any time.
 - A series of ```<div data-test="assembly-stage"></div>``` children should be provided, each representing the corresponding n-th stage in the assembly line as defined by ```@Input() this.stages```. The number of stages will be equal to the length of ```stages``` provided to the component and will be fixed throughout one mount cycle. ```stages[0]``` is the name of the first stage and is the entry point for any items newly reated by ```assembly-add-item```, while ```stages[stages.length-1]``` is the name of the last stage. You may assume that stages will never be given as an empty array. The testing suite will not check that these stage name strings were rendered, but it's recommended to do so to help identify stages as you work.
 - A series of ```<button data-test="assembly-item"></button>```elements, which represent the items residing in a particular ```stage``` element. The text content of an ```assembly-item``` will be a string from a previous ```assembly-add-item``` submission. As described above, this button accepts left- and right-click (context menu) events, which move it forwards or backwards, respectively, through the stages of the assembly line. As with stages, the n-th ```assembly-item``` child of a list should correspond to the n-th item in that list conceptually.

<br>For additional clarification, visit the testing code in the ```src/app/assemblyline/assemblyline.component.spec.ts``` file. This file contains all the tests for this challenge and can be used to support the behavioral specification. You're welcome to make modifications to this file to verify that your component works, although the original test code will be restored automatically upon submission.

---
## Demo
Here's a screen capture illustrating the functionality of the component. Note the difference between left-clicking (moving an item to the next list) and right-clicking an item (moving an item to the previous list), as well as the location items move to when moving (previous moves append, while next moves prepend).
This particular instance of the component was created with:
```html
<assemblyline 
  stages="[
    'Idea', 
    'Development', 
    'Testing', 
    'Deployment'
  ]"
/>
```

![Alt Text](images/demo.gif)

## Written response
After you finish coding, please take 10-15 minutes to write a brief written response in [```./candidate-written-response.md```](./candidate-written-response.md). This file contains the prompt you'll be responding to.

## Resources
Feel free to consult documentation at [Angular](https://angular.io/docs) if you get stuck.
