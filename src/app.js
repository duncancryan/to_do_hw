import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el: "#app",
      data: {
          tasks: [
            {name: "Walk Thandi", highPriority: true},
            {name: "Cook Dinner", highPriority: false},
            {name: "Do Homework", highPriority: true}
        ],
          newTask: ""
      },
      methods: {
        saveNewTask: function () {
            this.tasks.push({
                name: this.newTask,
                highPriority: false
            });
            this.newTask = "";
        }
      }
  });
});