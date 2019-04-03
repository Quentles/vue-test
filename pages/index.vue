<template>
  <section class="container">
      <Todo/>
  </section>
</template>
<script>
import Vue from "vue";
import Todo from "~/components/Todo";
export default {
  watchQuery: true,
  components: { Todo },
  
};
</script>

<style scoped>
</style>