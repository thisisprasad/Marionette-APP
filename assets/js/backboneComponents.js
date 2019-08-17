/**
 * 
 * @param {Backbone object} competitve 
 * @param {id of the list (ol/ul) tag to which list items are appended} elementId 
 */
function createCompetitiveEvent(competitve, elementId) {
    competitive.on('addList', function () {
        console.log("Inside the function: " + elementId);
        $(elementId).append("<li id='codeforces'> <a href='https://www.codeforces.com/' target='_blank'>Codeforces</a> </li>");
        $(elementId).append("<li id='codechef'> <a href='https://www.codechef.com/' target='_blank'>Codechef</a> </li>");
        $(elementId).append("<li id='leetcode'> <a href='https://leetcode.com/problemset/all/' target='_blank'>Leetcode</a> </li>");
        $(elementId).append("<li id='geeksforgeeks'> <a href='https://practice.geeksforgeeks.org/explore/?page=1&sortBy=accuracy' target='_blank'>GeeksForGeeks</a> </li>");
    });
}


/**
 * This function binds an event and triggers that event.
 * In this event an list of URLs of competitive/interview-prep algo platforms would be added.
 */
function addCompetitiveList(id) {
    competitive = _.extend({}, Backbone.Events);
    console.log("competitive pobject created");
    var elementId = "#" + id;

    createCompetitiveEvent(competitive, elementId);

    //  Now trigger the event
    competitive.trigger('addList');
}

/**
 * Starting point of execution to add the component.
 * Acts like an API which is public access.
 * @param {id of the list (ol/ul) tag to which list items are appended} id 
 */
function createCompetitiveComponent(id) {
    addCompetitiveList(id);
}


/**
 * A utility function for showing results on console.
 * A facility of switch is provided.
 */
function debug(msg) {
    var debugSwitch = true;
    if (debugSwitch) {
        console.log(msg);
    }
}


/**
 * Model is same as a 'class' in OOPS.
 */
var List = Backbone.Model.extend(function () {
});