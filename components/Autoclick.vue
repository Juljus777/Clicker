<template>
  <div>
    <button @click="buyAutoClick" class="button is-primary" :disabled="$store.state.counter<this.cost" >{{this.name}}</button>
  </div>
</template>

<script>
    export default {
        name: "autoclick",
        props: ['name', 'cost', 'cps'],
        methods: {
            buyAutoClick(){
                this.$store.dispatch('buyAutoClick', cps);
                this.$store.dispatch('buyItem', cost);
          },
      }
    }
</script>

<style scoped>

</style>
