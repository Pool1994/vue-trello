<template>
  <div>
    <v-app>
      <app-menu-left></app-menu-left>
      <app-header></app-header>
      <v-main>
        <router-view></router-view>
      </v-main>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMenuLeft from "@/components/AppMenuLeft";


export default {
  name: "App",
  components:{AppHeader,AppFooter,AppMenuLeft},
  data: () => ({
    //
  }),
};
</script>
