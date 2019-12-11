<template>
  <aside class="menu has-background-grey-light">
    <p class="menu-label">
      General items:
    </p>
    <ul class="menu-list">
      <upgrades name="Auto click" :type="'automatic'" :cost="10" :cps="1"></upgrades>
      <upgrades name="Grandma" :type="'automatic'" :cost="100" :cps="5"></upgrades>
    </ul>
    <p class="menu-label">
      Upgrade items:
    </p>
    <ul class="menu-list">
      <upgrades name="Double click" :type="'manual'" :cost="10" :cps="1"></upgrades>
    </ul>
    <p class="menu-label">
      Special items:
    </p>
    <ul class="menu-list">
      <upgrades name="Extra spicy yield" :type="'special'" :cost="500" :cps="50"></upgrades>
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
