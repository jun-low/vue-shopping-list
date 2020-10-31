<template>
  <div id="app">
    <shopping-list msg="Welcome to my shopping list app"/>
    <footer>
      Illustration by Kathy Dong. Code and Design by <a href="https://jun-low.github.io/">Jun Low</a>. Made with 🛒 in M'sia.
    </footer>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList'

export default {
  name: 'App',
  components: {
    ShoppingList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne&display=swap');

#app {
  font-family: 'Syne', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer{
  border-top: 2px solid;
  padding: 24px;
  width: 50%;
  margin: 10% auto 0 auto;
}
</style>
