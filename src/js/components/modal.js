const Vue = require('vue');
module.exports = Vue.component('modal', {
  template: '#modal-template',
  data: function () {
    return {
      taskText: '',
      taskDate: '',
    };
  },
  computed: {
    validateForm: function () {
      if (this.text === '' || this.taskDate === '') return false;
      else return true;
    }
  },
  methods: {
    addTask: function () {
      let newTask = {
        id: this.$parent.getLastId() + 1,
        text: this.taskText,
        date: this.taskDate,
        isDone: false
      }

      if (this.validateForm) {
        this.$parent.addTask(newTask);
        this.$root.showModal = false;
      }
    }
  }
});
