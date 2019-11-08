<template>
  <div>
    <button @click="buyAutoClick" class="button is-primary" :disabled="$store.state.counter<this.cost" >{{this.name}} This costs: {{this.cost}}</button>
  </div>
</template>

<script>
    export default {
        name: "autoclick",
        props: ['name', 'cost', 'cps'],
        methods: {
            buyAutoClick(){
                this.$store.dispatch('buyAutoClick', this.cps);
                this.$store.dispatch('buyItem', this.cost);
          },
      }
    }
</script>

<style scoped>

</style>
