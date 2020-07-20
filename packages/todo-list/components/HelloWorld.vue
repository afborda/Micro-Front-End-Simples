<template>
  <div class="hello">
    <img src="../assets/vue.png" width="300" height="300" alt="logo" />
    <h1>{{ msg }}</h1>
    <form @submit.prevent="add()">
      <input v-model="task" type="text" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="t in tasks" :key="t">{{ t }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      task: "",
      tasks: []
    };
  },
  images: [
    {
      url: "../assets/vue.png",
      name: "Vue"
    }
  ],
  methods: {
    add() {
      if (this.task.trim()) {
        this.tasks.push(this.task);
        this.task = "";
      }
    }
  }
};
</script>
