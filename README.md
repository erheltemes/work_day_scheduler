# work_day_scheduler

## Description
App allows users to save notes to day-time hours, to easily schedule their current day. App saves to local storage and highlights the current hour.

## Usage
Open index.html in browser or visit deployed link. Saves are local so will not be seen by others.

## Installation
Nothing to be installed, bootstrap, fontawesome, googleapi and JQuery are called in html.

## PAGE CONSTRUCTION
* displayed current day using "moment" JS Library
* created rows by iterating over array filled with time values.
* set class attributes of past present and future, by comparing "moment" hour value with index of array
* Relaoded past,present and future classes by, every five seconds, checking current hour with a hourOnLoad value saved when intial past, present, and future classes where set. If it is different they are reloaded and a new varible for hourOnLoad is saved

## LOCAL STORAGE MANAGEMENT
* Pulled local storage JSON and parsed it, if nothing was in storge, create and empty array
* loaded local storage data into text area defined by IDs of index value by iterating over the array
* set up button on entire element that only triggeres when clicking the div with class "saveBtn", traversed from the clcik target to the respective text area and grabbed its value. Placed that value to repective index value in savedText array. Set it all to local storage.

![Alt text](./assets/imgs/scheduler_1.PNG?raw=true "Preview image of Scheduler")

SITE LINK: https://erheltemes.github.io/work_day_scheduler/

 
