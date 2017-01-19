'use strict';

const Vue = require('vue');

// [TABS]
const tabs = require('./components/tabs');

// [TASK]
const taskList = require('./components/tasks/task-list');

// [MODAL]
const modal = require('./components/modal');

const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue TODO App',
        todos: [
            { id: 1, text: 'Today task 1', isDone: false, date: 'today' },
            { id: 2, text: 'Today task 2', isDone: false, date: 'today' },
            { id: 3, text: 'Tommorow Task 3', isDone: false, date: 'tommorow' },
            { id: 4, text: 'Tommorow Task 4 Done', isDone: true, date: 'tommorow' }
        ],
        mapTodos: [],
        showModal: false,
        toShow: 'all'
    },
    mounted: function () {
        this.toShow = 'all';
        this.mapTodos = this.todos;
    },
    methods: {
        getLastId: function () {
            console.log('todo len', this.todos[this.todos.length - 1]);
            return this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 0;
        },

        addTask: function (task) {
            this.todos.push(task);
        },

        removeTaskById: function (id) {
            this.mapTodos.forEach(function (element, index) {
                if (element.id === id) this.mapTodos.splice(index, 1);
            }, this);
        },

        renderTasksByDate: function (date) {
            this.mapTodos = this.todos.filter(function (task) {
                if (task.date == date) return true;
                else return false;
            });
        },

        renderTasksByDone: function () {
            this.mapTodos = this.todos.filter(function (task) {
                if (task.isDone == true) return true;
                else return false;
            });
        },

        renderAllTasks: function () {
            this.mapTodos = this.todos;
        }
    }
});
