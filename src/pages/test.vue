<template>
  <div id="example-1">
    <button @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <NuxtLink to="/">HomePage</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data: () => ({
    counter: 0,
  }),
}
</script>
