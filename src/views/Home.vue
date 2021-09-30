<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="BoradName" label="Solo" outlined @keyup.enter="Add" dense></v-text-field>
      </v-col>
      <v-col cols="12" md="2"></v-col>
    </v-row>
    <!-- </v-form> -->
    <v-row>
      <board-card
        v-for="(board, index) in ArrayBoard"
        :key="index"
        :Name="board.name"
        :Id="board.Id"
        :Col="'3'"
      >
      </board-card>
    </v-row>
  </v-container>
</template>

<script>
import BoardCard from "@/components/boards/BoardCard";
export default {
  event: Object,
  name: "Home",
  components: { BoardCard },
  data: () => ({
    BoradName: "",
    ArrayBoard: [
      { Id: 1, name: "title 1" },
      { Id: 2, name: "title 2" },
      { Id: 3, name: "title 3" },
      { Id: 4, name: "title 4" },
    ],
  }),
  methods: {
    Add: function() {
      try {
        if (this.BoradName == "") throw "Ingrese una tarea";
        this.ArrayBoard.push({ name: this.BoradName });
        this.BoradName = "";
        
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
