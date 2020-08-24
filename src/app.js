import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el: "#app",
      data: {
          tasks: ["Walk Thandi", "Cook Dinner", "Do Homework"],
          newTask: ""
      },
      methods: {

      }
  });
});