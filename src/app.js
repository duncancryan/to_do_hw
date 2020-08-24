import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el: "#app",
      data: {
          tasks: ["Walk Thandi", "Cook Dinner", "Do Homework"],
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