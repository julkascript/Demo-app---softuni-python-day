<template>
  <div class="wrapper">
    <div class="card">
      <h1 class="title">Tasks</h1>
      <div class="input-group mb-5">
        <input
          type="text"
          class="form-control p-1"
          placeholder="Create a task"
          aria-label="Create a task"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-primary p-1"
            type="button"
            id="button-addon2"
          >
            Create
          </button>
        </div>
      </div>
      <div class="tasks">
        <div v-for="task in tasks" :key="task.id" class="task">
          <h5 v-if="!task.done" class="task-title">{{ task.name }}</h5>
          <div v-if="!task.done" class="buttons-holder">
            <button class="btn btn-sm btn-danger p-1">remove</button>
            <button class="btn btn-sm btn-success complete-button p-1">
              complete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <h1 class="title">Completed</h1>
      <div class="tasks">
        <div v-for="task in tasks" :key="task.id" class="task">
          <h5 v-if="task.done" class="task-title">{{ task.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      tasks: [
        { name: "walk the dog", done: false },
        { name: "walk the cat", done: true },
      ],
    };
  },
  created() {
    //
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.card {
  width: 500px;
  min-height: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding: 2rem;
}

.title {
  margin-bottom: 2rem;
}

.tasks {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.task {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.4rem;
}

.task-title {
  font-size: 1rem;
}

.input-wrapper {
  position: relative;
  line-height: 14px;
  margin: 0 10px;
  display: inline-block;
}

.complete-button {
  margin-left: 1rem;
}
</style>
