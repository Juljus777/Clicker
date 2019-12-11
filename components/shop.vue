<template>
  <aside class="menu has-background-grey-light">
    <p class="menu-label">
      General items:
    </p>
    <ul class="menu-list">
      <upgrades name="Increase intimidation" :type="'automatic'" :cost="10" :cps="1"></upgrades>
      <upgrades name="Torture devices in the room" :type="'automatic'" :cost="100" :cps="5"></upgrades>
    </ul>
    <p class="menu-label">
      Upgrade items:
    </p>
    <ul class="menu-list">
      <upgrades name="Double your strength" :type="'manual'" :cost="100" :cps="1"></upgrades>
    </ul>
    <p class="menu-label">
      Subjects to interigate:
    </p>
    <ul class="menu-list">
      <upgrades name="Peter Parker" :type="'special'" :cost="500" :cps="50"></upgrades>
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
    background-image:url('../assets/kgb_background.jpg');
    background-repeat:no-repeat;
    background-size:cover;
  }
</style>
