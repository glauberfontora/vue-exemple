<template>
  <div id="app">
    <toast/>
    <Header/>
    <main class="main">
      <Parallax />
      <Table/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Toast from './components/Toast'
import Header from './components/Header'
import Table from './components/Table'
import Parallax from './components/Parallax'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Toast,
    Table,
    Parallax,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main {
  padding-bottom: 20px;
}
h2 {
  color: #f8b64c;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 60px;
  margin-bottom: 25px;
  margin-top: 50px;
}
svg {
  max-width: 100%;
}
</style>
