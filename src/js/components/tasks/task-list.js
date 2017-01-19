const Vue = require('vue');
const taskItemComponent = require('./task');

module.exports = Vue.component('todo-list', {
    props: ['todos'],
    components: {
        'todo-item': taskItemComponent
    },
    template: '<ul class="todo-list"><todo-item v-for="item in todos" v-bind:todo="item"  /></ul>'
});