<template>
  <div>
    <button @click=" buyFromShop" class="button is-primary" :disabled="$store.state.counter<this.cost">{{this.name}} costs: {{this.cost}}</button>
  </div>
</template>

<script>
    export default {
        name: "Autoclick",
        props: ['name', 'cost', 'cps', 'type', 'buyCount', 'butLimit'],
        methods: {
          buyFromShop(){
            this.buyCount++;
            if(this.type==='automatic')
            {
              this.$store.dispatch('addToCPS', this.cps);
              this.$store.dispatch('buyItem', this.cost);
              this.cost = Math.round(this.cost*1.5);
            }
            else if(this.type==='manual'){
              this.$store.dispatch('buyItem', this.cost);
              this.$store.dispatch('addPerClick', this.cps);
              this.cost = Math.round(this.cost*5);
            }
            else if(this.type==='special'){
              this.cost = Math.round(this.cost*10);
            }
          },
      }
    }
</script>

<style scoped>
  button{
    margin:10px;
  }
</style>
