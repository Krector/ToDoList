
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
    
    init: function () {
        $(".InputTask").keypress(app.checkKeypress);
        $(".TaskList").on("click", ".toggle", app.toggleStatus);
        $(".TaskList").on("dblclick", ".TaskText", app.editTask);
        $(".TaskList").on("click", ".delete", app.deleteTask);
        $(".TaskList").on("mouseenter mouseleave", "li", app.toggleXDisplay);
        $(".toggleAll").click(app.toggleAllStatus);   
    },

    checkKeypress : function(ev) {
        
        //When the "Enter" key is input add the new task
        if (ev.which === 13){
           app.addTask();

        }
     },
    
    addTask : function () {

        // Clone a new task from the template
        var newTask = $(".templates li").clone();
        
        // Update the new task text with the input text
        newTask.find("span.TaskText").text( $(".InputTask").val());       

        // Append the new task to the list
        newTask.appendTo(".TaskList");
        
        // Blank out the task input
        $(".InputTask").val('');
        
    },
    
    toggleStatus : function(ev) {
        
        // When the checkmark to left of task is clicked, toggle
        // (add or remove) the complete class 
        $(ev.target).closest(".TaskLine").toggleClass("complete");
        
    },

    toggleAllStatus : function() {
        
        // When the Chevron on the input line is clicked, toggle
        // (add or remove) the complete class for all tasks
        $('li.TaskLine').toggleClass("complete");
        
    },

    toggleXDisplay : function(ev) {
        // When the mouse enters or leaves a task line toggle display of
        // the "delete" X
        var deleteTask = $(ev.target).closest(".TaskLine");
 
        deleteTask.find("span.TaskDelete").toggleClass("hide");
    },
    
    editTask : function () {
    },
    
    deleteTask : function () {
    },
    
    viewSelectedTasks : function (filterTask) {
    }

}