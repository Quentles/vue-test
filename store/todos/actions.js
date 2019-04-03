export default {
  addTodo({ commit }, text) {
    console.log("add todo action called" + text);
    commit("ADD_TODO", text);
  },
  removeTodo({ commit }, index) {
    console.log("removeTodo " + index);
    commit("REMOVE_TODO", index);
  },

  async completeTask({ commit }, todo) {
    commit("COMPLETE_TASK", todo);
    const response = await this.$axios
      .$patch("https://jsonplaceholder.typicode.com/todos/" + todo.id, {
        completed: !todo.completed
      })
      .catch(error => {
        //s'il y a une erreure sur le serveur => rétablir la checkbox
        commit("COMPLETE_TASK", todo);
      });
  },
  async fetchTodos({ commit }) {
    const data = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    //console.log("fetch todo action");
    commit("SET_TODOS", data);
  }
};
