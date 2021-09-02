<template>
  <div class="container-fluid">
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
        <button class="nav-link" v-on:click="goAddRecipe">Exile Path</button>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
