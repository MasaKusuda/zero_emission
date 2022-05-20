<template>
  <v-container fluid class="my-1">
    <v-row
      class="blue-grey lighten-5"
      style="height: 40px"
      justify="center"
      align-content="center"
    >
      <v-col>
        <div class="text-h5" style="text-align: center">{{ title_string }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    title_string: {
      type: String,
      default: () => 'Title String',
      required: true,
    },
  },
  data: () => ({}),
}
</script>
