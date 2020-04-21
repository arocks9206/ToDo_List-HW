import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      todos: [
        {name: "Groom Dog", priority: true},
        {name: "Grocery shopping", priority: true},
        {name: "Drink wine", priority: false},
      ],

      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        const todoToAdd = {
          name: this.newTodo,
          priority: false
        }
        this.todos.push(todoToAdd);
        this.newTodo = "";
      },
      highPriority: function(index){
        this.todos[index].priority = true;
      }
    }
  });
});
