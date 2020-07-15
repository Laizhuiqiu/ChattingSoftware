<template>
  <div id="app">
    <div class="head-navbar">
      <div class="head-n-item" @click="min">
        <i class="icon-dash1"></i>
      </div>
      <div class="head-n-item" @click="max">
        <i :class="this.isMaxIcon==true?'icon-fullscreen1':'icon-fullscreen-exit1'"></i>
      </div>
      <div class="head-n-item" @click="close">
        <i class="icon-x1"></i>
      </div>
    </div>
    <div v-if="this.$route.path=='/'">
      <div class="navbar">
        <a class="nav-link" @click="pages=nav.id">
          <img :src="user.image" class="nav-userimage" />
        </a>
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="(nav,index) in navs"
            :key="index"
            :class="pages==nav.id?'nav-this':''"
          >
            <a class="nav-link" @click="pages=nav.id">
              <i :class="nav.icon"></i>
              <p>{{nav.text}}</p>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav" style="position: absolute;bottom: 31px;">
          <router-link class="nav-link" target="_blank" to="/schedule">
            <li class="nav-item">
              <i class="icon-calendar-check-fill1"></i>
              <p>日程</p>
            </li>
          </router-link>
          <router-link class="nav-link" target="_blank" to="/setup">
            <li class="nav-item">
              <i class="icon-gear-fill"></i>
              <p>设置</p>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="content">
        <news v-if="pages==1"></news>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
@import url("./assets/icons/style.css");

* {
  padding: 0;
  margin: 0;
  user-select: none;
  transition: ease-out;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}

:root {
  --theame: #fff;
  --theme_h: #212121;
  --theme_text: #515151;
}

html {
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 8px 12px #6e6f70;
}

body {
  background: #f5f6fa;
}

.navbar {
  -webkit-app-region: drag;
  height: 100vh;
  width: 5vw;
  top: 31px;
  left: 0;
  text-align: center;
  background: var(--theame);
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;
}

.nav-link {
  cursor: pointer;
  -webkit-app-region: no-drag;
}

.nav-item {
  -webkit-app-region: no-drag;
  font-size: 18px;
  margin: 1vw 0;
  opacity: 0.8;
  transition: 0.2s;
  color: var(--theme_text);
}

.nav-item:hover {
  opacity: 1;
}
.nav-item:active {
  transform: scale(0.9);
}
.nav-item p {
  font-size: 13px;
}

.nav-this {
  color: #1280ff !important;
}

.nav-userimage {
  height: 46px;
  margin: 10px 0;
  border-radius: 50%;
}

.content {
  width: 100%;
  padding-left: 5.5vw;
  height: 100vh;
}

.head-navbar {
  -webkit-app-region: drag;
  z-index: 50;
  height: 30px;
  top: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
  line-height: 30px;
  text-align: right;
}
.head-n-item {
  -webkit-app-region: no-drag;
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: 0.1s;
  height: 100%;
}
.head-n-item:hover {
  color: #1280ff;
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      isMaxIcon:true,
      pages: 1,
      user: {
        name: "laizq",
        image: "http://q1.qlogo.cn/g?b=qq&nk=123632704&s=640"
      },
      navs: [
        {
          icon: "icon-chat-fill1",
          text: "消息",
          id: 1
        },
        {
          text: "通讯录",
          icon: "icon-people-fill1",
          id: 2
        },
        {
          icon: "icon-folder-fill1",
          text: "文档",
          id: 3
        },
        {
          icon: "icon-grid-1x2-fill",
          text: "工作",
          id: 4
        }
      ]
    };
  },
  methods: {
    min() {
      remote.getCurrentWindow().minimize();
    },
    max() {
      if (remote.getCurrentWindow().isMaximized()) {
        remote.getCurrentWindow().restore();
        this.isMaxIcon = true;
      } else {
        remote.getCurrentWindow().maximize();
        this.isMaxIcon = false;
      }
    },
    close() {
      remote.getCurrentWindow().close();
    }
  }
};
</script>



