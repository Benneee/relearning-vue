const app = Vue.createApp({
  data() {
    return {
      newTaskValue: '',
      tasks: [],
      listIsVisible: true,
    };
  },

  computed: {
    btnLabel() {
      return this.listIsVisible ? 'Hide List' : 'Show List';
    },
  },

  methods: {
    addTask() {
      this.tasks.push(this.newTaskValue);
      this.newTaskValue = '';
    },

    showHideList() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
});

app.mount('#assignment');
