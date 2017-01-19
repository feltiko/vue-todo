const Vue = require('vue');

module.exports = Vue.component('todo-item', {
    props: ['todo'],
    template: '<li class="todo-list_item"  v-bind:class="{ done: todo.isDone }" @click="setDone()"> {{ todo.text }} <span @click="$root.removeTaskById(todo.id)" class="todo-list_item__deletelink">Remove</span></li>',
    data: function() {
        return {
            renderTask: true
        }
    },
    methods:
    {
        setDone: function () {
            this.todo.isDone = !this.todo.isDone;
        }
    }
}); 