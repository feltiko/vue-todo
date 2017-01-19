const Vue = require('vue');
module.exports = Vue.component('tabs', {
    template: '<div class="tabs"><a href="#" @click="changeState(\'all\')">All Tasks</a> | <a href="#"  @click="changeState(\'today\')">Today Tasks</a> | <a href="#"  @click="changeState(\'tommorow\')">Tommorow Tasks</a> | <a href="#"  @click="changeState(\'done\')">Done</a> | <a href="#" @click="$parent.showModal = true">Add Tasks</a><h3>{{ titleTab }}</h3></div>',
    data: function () {
        return {
            state: 'all'
        }
    },
    computed: {
        titleTab: function () {
            switch (this.state) {
                case 'all': return 'All tasks';
                case 'today': return 'Today tasks';
                case 'tommorow': return 'Tommorow tasks';
                case 'done': return 'Done tasks';
            }
        }
    },
    methods: {
        changeState: function (state) {
            this.state = state;
            // this.$root.setToShow(state);
            switch (this.state) {
                case 'all': 
                    this.$parent.renderAllTasks(); 
                    break;

                case 'today':
                case 'tommorow': 
                    this.$parent.renderTasksByDate(this.state); 
                    break;
                
                case 'done': 
                    this.$parent.renderTasksByDone();
                    break;
            }
        }
    }
});  