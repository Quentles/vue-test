export default {
  todos: state => state.todos,
  completed: state => state.todos.filter(todo => todo.completed),
  user8: state => state.todos.filter(d => d.userId == "8")
};
