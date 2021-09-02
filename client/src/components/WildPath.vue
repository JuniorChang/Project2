<template>
    <div>
        <h1> Testing </h1>
        <div> 
            <label class="form-label"> Name </label>
            <input class="form-control" type="text" v-model="name" />
        </div>
        <div>
            <label class="form-label"> Server </label>
            <input class="form-control" type="text" v-model="server" />
        </div>
        <button class="mt-3 btn btn-primary" v-on:click="processWildPath">
            Add
        </button>

    </div>
</template>

<script>
// import axios from "axios";

// const API_URL = ""

export default {
    // name: "WildPath",
    // data: function() {
    //     return {
    //         name: "",
    //     };
    // },
    // methods: {
    //     processWildPath: async function () {
    //         await axios.post(API_URL + "/WildPath",{
    //             Name: this.name,
    //             Server: this.server,

    //         });
    //         this.$emit("new-data-added");
    //     }
    // }
}
</script>
