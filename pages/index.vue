<template>
  <div class="container" id="asi">
    <shop></shop>
    <div class="container gameHolder">
        <div class="subject">
          <img @click="addCookie" id="subject" src="../assets/kgb_subject_boss.jpg">
        </div>
      <div class="information">
        <p>Information cathered: {{$store.state.counter}}</p>
        <p>Automatic information per second: {{$store.state.perSecond}} </p>
        <p>Hit strength: {{$store.state.perClick}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Upgrades from "../components/Autoclick";
import Subject from "../components/Subject"
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
          let mouse = document.getElementById('subject');
          setTimeout(
            function changeMouse(){
              mouse.style.cursor = 'grab';
            }, 500);
              mouse.style.cursor = 'grabbing';
      },
      addPerSecond(){
          this.$store.dispatch('incrementPerSecond', 1);
          this.$store.dispatch('increment', -10);
      },
  }
}
</script>

<style scoped>
  img{
    position:relative;
    height:400px;
    width:400px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
  #asi{
    position:fixed;
    left:25%;
    height:100%;
    width:100%;
    background-image:url('../assets/kgb_background.jpg');
    background-repeat:no-repeat;
    background-size:cover;
  }
  .information{
    position:relative;
    padding:30px;
    height:20%;
    background-color:black;
  }
  .subject{
    position:relative;
    width:100%;
    height:80%;
    cursor: grabbing;
  }
  .gameHolder{
    width:100%;
    height:100%;
  }
  p{
    color:white;
    font-weight:600;
  }
  body, html{
    background-color:black;
  }
</style>