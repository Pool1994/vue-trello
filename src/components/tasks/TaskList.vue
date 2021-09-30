<template>
  <div>
    <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item v-for="(item, i) in taskList" :key="i">
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            flat
            dense
            placeholder="escriba su tarea"
            hide-details="auto"
            v-model="title"
            @keyup.enter="addTask"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "task-list",
  props: {
    listId: String,
    taskList: Array,
  },
  data: () => ({
    selectedItem: 0,
    title: "",
  }),
  methods: {
    addTask: function() {
      try {
        if (this.title == "") throw "Ingrese la tarea";
        this.taskList.push({
          id: this.taskList.length + 1,
          text: this.title,
          completd: false,
        });
        this.title="";
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
