<template>
  <div>
    <img class="img-fluid topbanner" src="./assets/topbanner.jpg" />

    <img class="img-fluid body-img" src="./assets/bg.jpg" />

    <div class="container container-fluid .col-xs">
      <div class="alert alert-success my-3" v-if="status">
        {{ status }}
      </div>
      <ul class="nav nav-tabs my-3">
        <li class="nav-item">
          <button
            class="nav-link "
            aria-current="page"
            v-on:click="WildPath"
          >
            Add Your Char
          </button>
        </li>
        <li class="nav-item">
          <button 
            class="nav-link active" 
            v-on:click="playerList"
          >
            Player List
          </button>
        </li>
      </ul>

     

      <WildPath v-if="page == 'WildPath'" v-on:update-recipe="onEditRecipe" />
      <playerList v-if="page == 'playerList'" v-on:new-recipe-added="onRecipeAdded" />
    </div>
  </div>
</template>

<script>
import playerList from "./components/playerList.vue";
import WildPath from "./components/WildPath.vue";



export default {
  name: "App",
  components: {
    
    WildPath,
    playerList,
  },
  data: function () {
    return {
      page: "WildPath",
      status: "Status1",
    };
  },
  methods: {
    WildPath: function () {
      this.page = "WildPath";
      this.status = "Switch to Wildpath";
      },
    playerList: function () {
      this.page = "playerList";
      this.status = "Showing Player List";
      }
  }
}
</script>

<style>
.topbanner {
  min-width: 100%;
}

.body-img {
  position: relative;
  opacity: 0.3;
}


@media only screen and (max-width: 786px) {
  .container-fluid {
    position: absolute;
    top: 130px;
  }

  }
@media screen and (min-width: 800px) {
  .container-fluid {
    position: absolute;
    top: 470px;
  }

  
}
/* .container-fluid {
  position: absolute;
  top:470px;

} */




</style>
