<template>
  <div class="parallax">
    <div class="container">
      <div class="row rocket-content align-items-center">
        <div
          class="col-sm-4"
          v-parallax="-0.4"
        >
          <svg
            v-svg
            symbol="rocket"
            size="0 0 410 628"
          ></svg>
        </div>
        <div class="col-sm-8">
          <h2 v-parallax="0.1">Decole com o digital</h2>
          <p v-parallax="0.1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque fuga similique eaque, magni dicta harum sint voluptas quibusdam, nemo velit repellat! Ipsa rem necessitatibus repellendus saepe voluptatem porro officiis consequatur pariatur molestiae quod sapiente sint, qui, exercitationem eaque sunt!</p>
        </div>
      </div>
      <div class="row desktop-content align-items-center">
        <div class="col-sm-8">
          <h2 v-parallax="0.1">Acesse pelo seu computador</h2>
          <p v-parallax="0.1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque fuga similique eaque, magni dicta harum sint voluptas quibusdam, nemo velit repellat! Ipsa rem necessitatibus repellendus saepe voluptatem porro officiis consequatur pariatur molestiae quod sapiente sint, qui, exercitationem eaque sunt!</p>
        </div>
        <div
          class="col-sm-4"
          v-parallax="-0.2"
        >
          <svg
            v-svg
            symbol="computer"
            size="0 0 531 481"
          ></svg>
        </div>
      </div>
      <div class="row phone-content">
        <div
          class="col-sm-4"
          v-parallax="-0.1"
        >
          <svg
            v-svg
            symbol="phone"
            size="0 0 161 291"
          ></svg>
        </div>
        <div class="col-sm-8">
          <h2>Conheça o nosso aplicativo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque fuga similique eaque, magni dicta harum sint voluptas quibusdam, nemo velit repellat! Ipsa rem necessitatibus repellendus saepe voluptatem porro officiis consequatur pariatur molestiae quod sapiente sint, qui, exercitationem eaque sunt!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .parallax {
    background-color: #4c84cc;
    color: white;
    margin-bottom: 30px;
  }
  .rocket-content {
    text-align: right;
    h2 {
      // color: #d1d1d1;
    }
    p {
      color: #f1f1f1;
    }
  }
  .desktop-content {

  }
  .phone-content {

  }
</style>
