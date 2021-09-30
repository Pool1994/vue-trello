<template>
  <v-container>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :to="item.to"
          :disabled="item.disabled"
          :active-class="item.active"
        >
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          outlined
          placeholder="nombre de lista"
          v-model="NameList"
          dense
          @keyup.enter="AddList"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <board-column
        v-for="(list, index) in BoardList"
        :key="index"
        :name="list.name"
        :id="list.id"
        column="3"
      ></board-column>
    </v-row>
  </v-container>
</template>
<script>
import BoardColumn from "@/components/boards/BoardColumn";

export default {
  props: {
    Name: String,
    Id: Number,
  },
  components: { BoardColumn },
  data: () => ({
    NameList: "",
    BoardList: [
      { id: "1", name: "Todos" },
      { id:"2", name: "Agiles" },
      { id: "3", name: "Web" },
      { id: "4", name: "App movil" },
    ],
  }),
  computed: {
    breadcrumbs: function() {
      return [
        {
          text: "Mis paneles",
          disabled: false,
          to: "/",
          active: "",
        },
        {
          text: this.Name,
          disabled: true,
          to: "/peru",
          active: "v-breadcrumbs__item--disabled",
        },
      ];
    },
  },
  methods: {
    AddList: function() {
      try {
        if (this.NameList == "") throw "Ingrese el nombre";
        this.BoardList.push({
          id: this.BoardList.length + 1,
          name: this.NameList,
        });
        this.NameList = "";
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
