<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-9">Glauber Fontora</div>
        <div class="col-sm-3">
          <svg
            v-svg
            symbol="logo"
            size="0 0 143 30"
          ></svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .footer {
    background-image: linear-gradient(to right, #bbb, #ccc);
    color: white;
    min-height: 300px;
    padding: 20px;
    svg {
      fill: #fff !important;
    }
    .stop-1,
    .stop-2 {
      stop-color: #fff !important;
    }
  }
</style>
