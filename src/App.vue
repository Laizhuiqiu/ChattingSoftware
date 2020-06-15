<template>
  <div id="app">
    <div class="navbar">
      <img src="./assets/logo.svg" style="height: 46px;" />
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link">
            <i class="icon-lg fe-x"></i>
          </a>
        </li>
      </ul>
    </div>
    <index v-if="router=1"></index>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

:root {
  --theame: #fff;
  --theme_h: #212121;
  --theme_text: #515151;
}
html {
  overflow: hidden;
  position: relative;
}
body {
  background: #e6e6e6;
}
.navbar {
  height: 64vw;
  width: 5vw;
  top: 0;
  left: 0;
  text-align: center;
  background: var(--theame);
}
</style>

<script>
import index from "./components/index.vue";
export default {
  name: "app",
  data() {
    return {
      router: 1
    };
  },
  components: {
    index
  }
};
</script>
