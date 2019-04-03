<template>
  <div class="container">
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Titre</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todosFromStore" :key="todo.id">
          <th scope="row">{{todo.id}}</th>
          <td>
            <p v-if="todo.id != editTodoId">{{todo.title}}</p>
            <textarea class="form-control" v-else v-model="updateTodo.title"></textarea>
          </td>
          <td>
            <button v-on:click="onDelete(todo.id)" class="btn btn-danger btn-sm">
              Supprimer
            </button>
            <button @click="edit(todo)" v-if="todo.id != editTodoId" class="btn btn-warning btn-sm">
              Modifier
            </button>
            <button @click="submit(todo)" v-else class="btn btn-success btn-sm">
              Enregistrer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store/store.js";
export default {
  name: "My-todos",

  async created() {
    this.$store.dispatch("fetchTodos");
  },

  computed: {
    todosFromStore() {
      return store.state.todos;
    }
  },
  methods: {
    onDelete(id) {
      this.$store.dispatch("removeTodo", id);
    },
    edit(todo) {
      this.editTodoId = todo.id;
      this.updateTodo = {
        body: todo.body,
        title: todo.title
      };
    },
    submit(todo) {
      this.$store.dispatch("editTodo", { ...todo, ...this.updateTodo });
      this.editTodoId = null;
      this.updateTodo = {
        body: "",
        title: ""
      };
    }
  },
  data() {
    return {
      editTodoId: null,
      updateTodo: {
        body: "",
        title: ""
      }
    };
  }
};
</script>
<style scoped>
textarea {
  width: 100%;
  height: 200px;
}
</style>
