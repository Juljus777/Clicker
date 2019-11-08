<template>
  <aside class="menu has-background-grey-light">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <upgrades name="Autoclick" :cost="10" :cps="1"></upgrades>
    </ul>
  </aside>
</template>

<script>
    import Upgrades from "./Autoclick";
    export default {
        name: "SideBar",
        components: {Upgrades}
    }
</script>

<style scoped>
  aside{
    position:fixed;
    padding:70px;
    height:100%;
  }
</style>
