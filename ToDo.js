
/*          ToDo.js
 * Contains the code required to implement a to do list that
 *   performs the following functions:
 * Allows the customer to:
 *  Add a task by typing it into the input line
 *  Toggle the task status (complete / active) clicking the check mark
 *      to the left of the task
 *  Edit a task by double clicking it
 *  Delete a task by clicking on the "X" at the end of the task
 *  Toggle the status of all tasks by clicking the down pointing
 *      chevron to the left of the task input line
 *  View tasks by category by selecting All, Active, or Completed from
 *      the task status line
 */
"use strict";

var app = {
    
    /* 
    * Register the required JQuery event callbacks
    */
    
    init: function (){
        $(".InputTask").keypress(app.checkKeypress);
        $(".TaskList").on("click", ".toggle", app.toggleStatus);
        
    },

    checkKeypress : function(ev) {
       if (ev.which === 13){
           app.addTask();
       }
     },
    
    addTask : function () {

        // Clone a new task from the template
        var newTask = $(".templates li").clone();
        
        // Update the new task text with the input text
//        var inputText= $(".InputTask").val();
        newTask.find("span.TaskText").text( $(".InputTask").val());
      // complete new item if needed
/*
        if(status === 'complete') {
            newItem.addClass('complete');
        }
*/
// append the new task to the list
        newTask.appendTo(".TaskList");
        // Blank out the task input
        $(".InputTask").val('');


    },
    
    toggleStatus : function (ev) {
        
    },
    
    editTask : function () {
    },
    
    deleteTask : function () {
    },
    
    toggleAllStatus : function () {
    },
    
    viewSelectedTasks : function (filterTask) {
    }

}