<template>
  <div class="container" id="asi">
    <shop></shop>
    <div class="container">
      Cookies owned: {{$store.state.counter}}
      <img @click="addCookie" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/1280px-2ChocolateChipCookies.jpg">
      <p>Auto clicks per second: {{$store.state.perSecond}} </p>
    </div>
  </div>
</template>

<script>
import Upgrades from "../components/Autoclick";
export default {
    components: {Upgrades},
    mounted(){
      setInterval(()=> {
          this.$store.dispatch('increment',this.$store.state.perSecond);
      }, 1000);
    },
  methods: {
      addCookie(){
          this.$store.dispatch('increment', this.$store.state.perClick);
      },
      addPerSecond(){
          this.$store.dispatch('incrementPerSecond', 1);
          this.$store.dispatch('increment', -10);
      }
  }
}
</script>

<style scoped>
  img{
    height:200px;
    width:200px;
  }
  #asi{
    position:fixed;
    left:50%;
    transform:translate(-50%,0);
  }
</style>