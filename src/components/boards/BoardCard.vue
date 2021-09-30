<template>
  <v-col cols="12" :md="Col">
    <v-card>
      <v-card-text>
        <div v-text="Name"></div>
        <p class="text-h4 text--primary"></p>
        <p></p>
        <div class="text--primary"></div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
          :to="{ name: 'board', params: { Name, Id } }"
        >
          ir alla
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "board-card",
  props: {
    Name: String,
    Id: Number,
    Col: String,
  },
  data: () => ({}),
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
