import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el: "#app",
      data: {
          tasks: [
            {name: "Walk Thandi", completed: true},
            {name: "Cook Dinner", completed: false},
            {name: "Do Homework", completed: true}
        ],
          newTask: ""
      },
      methods: {
        saveNewTask: function () {
            this.tasks.push(this.newTask);
            this.newTask = "";
        }
      }
  });
});