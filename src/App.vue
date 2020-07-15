<template>
  <div id="app">
    <div v-if="this.$route.path=='/'">
      <div class="navbar">
        <img :src="user.image" class="nav-userimage" />
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
        <ul class="navbar-nav" style="position: absolute;bottom: 0;">
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
@import url("assets/icons/style.css");
@import url("assets/fonts/VASVADIA.TTF");

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
}

body {
  background: #f5f6fa;
}

.navbar {
  height: 100vh;
  width: 5vw;
  top: 0;
  left: 0;
  text-align: center;
  background: var(--theame);
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.nav-link {
  cursor: pointer;
}

.nav-item {
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
</style>

<script>
export default {
  name: "app",
  data() {
    return {
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
  }
};
</script>
