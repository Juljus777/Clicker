<template>
    <div class="subject">
        <img @click="addCookie" src="../assets/kgb_subject_boss.jpg">
    </div>
</template>

<script>
    export default {
        name: "Subject",
        props: ['name']
    }
</script>

<style scoped>
  .subject{
    position:relative;
    width:100%;
    height:80%;
  }
</style>
