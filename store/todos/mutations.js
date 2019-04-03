export default {
  ADD_TODO(state, text) {
    /*
    state.list.push({
      text,
      done: false
    });
    */

    state.todos.unshift({
      title: text,
      completed: false,
      userId: 8,
      id: 42
    });

    console.log("add todo mutation called and text : " + text);
  },
  REMOVE_TODO(state, index) {
    console.log("mutation remove todo with index :" + index);
    state.todos.splice(index, 1);
  },
  COMPLETE_TASK(state, todo) {
    todo.completed = !todo.completed;
  },

  SET_TODOS(state, payload) {
    state.todos = payload;
    //console.table(state.list);
    //console.log("filtering to user 10");
    //console.table(state.todos);
  }
};
