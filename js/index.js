var expandByDefault = false;
var defaultFilter = [];
var roadmapTasks = [
{
  name: 'Filesize Increase',
  tags: ['frontend'],
  text: 'Description yadda yadda **important details**',
  subtasks: [
  { name: 'Subtask 1', text: 'detail detail asdf', progress: 100 },
  { name: 'Subtask 2', text: 'detail detail asdf', progress: 30, workDone: 3 },
  { name: 'Subtask 3', text: 'detail detail asdf', progress: 0, workDone: 0 }] },


{
  name: 'Payment Gateway',
  tags: ['backend', 'frontend'],
  text: 'Description yadda yadda **important details**',
  subtasks: [
  { name: 'Subtask 1', text: 'detail detail asdf', progress: 100 },
  { name: 'Subtask 2', text: 'detail detail asdf', progress: 30, workDone: 3 },
  { name: 'Subtask 3', text: 'detail detail asdf', progress: 0, workDone: 0 }] },


{
  name: 'Multifile Uploads',
  tags: ['frontend'],
  text: 'Description yadda yadda **important details**',
  subtasks: [
  { name: 'Subtask 1', text: 'detail detail asdf', progress: 100 },
  { name: 'Subtask 2', text: 'detail detail asdf', progress: 30, workDone: 3 },
  { name: 'Subtask 3', text: 'detail detail asdf', progress: 0, workDone: 0 }] },


{
  name: 'Revenue Beta-Testing',
  tags: ['backend'],
  text: 'Description yadda yadda **important details**',
  progress: 50 },

{
  name: 'Scaling solution',
  tags: ['backend', 'iota'],
  text: 'Description yadda yadda **important details**' },

{
  name: 'Dezentralized Apps',
  tags: ['shell', 'iota'],
  text: 'Description yadda yadda **important details**' }];



Vue.component('progress-bar', {
  template: '#progress-template',
  props: {
    progress: Number },

  computed: {
    progressClass: function progressClass() {
      if (this.progress === 0) {
        return 'queued';
      } else if (this.progress === 100) {
        return 'finished';
      } else {
        return 'wip';
      }
    } } });



Vue.component('roadmap-task', {
  mixins: [SmoothHeight],
  template: '#task-template',
  props: {
    task: Object },

  mounted: function mounted() {
    this.$smoothElement({
      el: this.$refs.expandContainer });

  },
  methods: {
    toggleExpand: function toggleExpand(task) {
      if (task.filtered) {
        return;
      }

      task.expanded = !task.expanded;
    } } });



new Vue({
  el: '#roadmap',
  data: function data() {
    return {
      progress: 50,
      tags: [],
      filterTags: defaultFilter.slice(),
      tasks: [] };

  },
  created: function created() {
    var tasks = roadmapTasks;
    this.tasks = this.preProcess(tasks);
    this.filterTasks();
  },
  methods: {
    preProcess: function preProcess(tasks) {var _this = this;
      var totalProgress = 0;

      tasks = tasks.map(function (task, index) {
        var workdone = 0;
        var progress = 0;

        task.id = index;
        task.filtered = false;
        task.expanded = task.expanded || expandByDefault;
        task.text = marked(task.text);
        if (task.tags) {
          task.tags.forEach(function (t) {
            if (_this.tags.indexOf(t) < 0) {
              _this.tags.push(t);
            }
          });
        }

        if (task.subtasks && task.subtasks.length > 0) {
          task.subtasks.forEach(function (st) {
            workdone += st.progress || 0;
          });
          task.progress = Math.floor(workdone / task.subtasks.length);
        } else {
          task.progress = task.progress || 0;
        }

        totalProgress += task.progress;
        return task;
      });

      this.tags = this.tags.sort();
      this.filterTags = this.tags.slice();
      this.progress = Math.floor(totalProgress / tasks.length);
      return tasks;
    },
    toggleAll: function toggleAll(d) {
      if (d) {
        this.filterTags = [];
      } else {
        this.filterTags = this.tags.slice();
      }
    },
    getNthTasks: function getNthTasks(n) {var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var tasks = [];

      for (var i = offset; i < this.tasks.length; i += n) {
        tasks.push(this.tasks[i]);
      }

      return tasks;
    },
    filterTasks: function filterTasks() {var _this2 = this;
      var tasks = this.tasks.slice();

      tasks.forEach(function (task) {
        if (!task.hasOwnProperty('tags')) {
          return;
        }

        task.filtered = !task.tags.some(function (tag) {
          return _this2.filterTags.indexOf(tag) >= 0;
        });
        task.expanded = task.filtered ? false : task.expanded;
      });

      tasks = tasks.sort(function (a, b) {
        if (a.filtered === b.filtered) {
          return a.id - b.id;
        }

        return a.filtered ? 1 : -1;
      });

      this.tasks = tasks;
    },
    toggleTag: function toggleTag(tag) {
      var tags = this.filterTags.slice();
      var index = tags.indexOf(tag);

      console.log(tags, 'L', tags.length, 'i', index);
      if (index < 0) {
        console.log('add filter', tag);
        tags.push(tag);
      } else {
        console.log('unfilter', tag);
        for (var i = index, j = tags.length - 1; i < j; i++) {
          tags[i] = tags[i + 1];
        }
        tags.length--;
      }
      this.filterTags = tags;
      this.filterTasks();
    },
    isFiltered: function isFiltered(tag) {
      return this.filterTags.indexOf(tag) >= 0;
    } } });