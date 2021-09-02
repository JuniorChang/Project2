<template>
  <div>
    <img class="img-fluid topbanner" src="./assets/topbanner.jpg">

    <div class="container-fluid">
      

      <div class="alert alert-success my-3" v-if="status">
        {{ status }}
      </div>
      <ul class="nav nav-tabs my-3">
        <li class="nav-item">
          <button
            class="nav-link active"
            aria-current="page"
            v-on:click="goRecipes"
          >
            Wild Path
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" v-on:click="goAddRecipe">Wild Exile</button>
        </li>
      </ul>
   
    <!-- <PostComponent /> -->

    <wildpath v-if="page == 'Wildpage'" v-on:update-recipe="onEditRecipe" />
    <AddRecipe v-if="page == 'add'" v-on:new-recipe-added="onRecipeAdded" />

    </div>
  </div>
  
</template>

<script>
// import PostComponent from "./components/PostComponent.vue";
import Wildpath from "./components/WildPath.vue";


export default {
  name: "App",
  components: {
    // PostComponent,
    Wildpath,
  },
  data: function () {
    return {
      page: "WildPath",
      status: "",
    };
  },
};
</script>

<style>
.topbanner {
  min-width: 100% ;
}


</style>
