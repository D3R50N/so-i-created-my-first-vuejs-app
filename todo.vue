<template>
  <li :key="todo.id" class="todo" :class="todo.class">
    <div class="left">
      <div class="name">{{ todo.title }}</div>
      <div class="date">{{ todo.date }}</div>
    </div>
    <button @click="remove(todo.id)">Supprimer</button>
  </li>
</template> 

<script >
export default {
  name: 'Todo',
  props: { todo: Object, remove: Function, },
}
</script>   