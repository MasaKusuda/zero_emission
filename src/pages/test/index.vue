<template>
  <div id="example-1">
    <div><v-btn color="primary" @click="counter += 1">Add 1</v-btn></div>
    <div><v-btn color="secondary" @click="counter = 0">reset</v-btn></div>
    <p>The button above has been clicked {{ counter }} times.</p>
    <ul>
      <v-row>
        <v-col v-for="page in pages" :key="page">
          <v-card
            nuxt
            flat
            outlined
            :to="'/test/' + page"
            class="justify-center mx-auto mt-5"
          >
            {{ page }}</v-card
          >
        </v-col>
        <v-col>
          <li>
            <NuxtLink :to="'/'">Homepage</NuxtLink>
          </li></v-col
        >
      </v-row>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data: () => ({
    counter: 0,
    pages: ['dcopy', 'index_copy', 'inspire'],
  }),
}
</script>
