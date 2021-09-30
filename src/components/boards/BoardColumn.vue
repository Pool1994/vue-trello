<template>
  <v-col cols="12" :md="column" :id="id">
    <v-card tile>
      <v-list flat>
        <v-subheader>{{ name }}</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <task-list :taskList="items" listId=""></task-list>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</template>
<script>
import TaskList from "@/components/tasks/TaskList";
export default {
  name: "board-column",
  components: { TaskList },
  props: {
    name: String,
    id: String,
    column: String,
  },
  data: () => ({
    selectedItem: "",
    items: [
    ],
  }),
};
</script>
