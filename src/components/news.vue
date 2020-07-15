<template>
  <div>
    <div class="newNav">
      <div class="newNav-search"></div>
      <div class="newsBox">
        <div class="news" v-for="(news,index) in news" :key="index" @click="newto(news.id)">
          <div class="news-image" :style="'background-image:url('+ news.image +')'"></div>
          <div class="news-box">
            <div class="news-title">{{news.title}}</div>
            <div class="news-content">{{news.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="newBox" v-if="!newid"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newid:"",
      news: [
        {
          id:"1",
          image: "http://p.qlogo.cn/gh/1079943856/1079943856/640/",
          title: "源码星球中心",
          content: "csszy：哈哈/funny"
        }
      ]
    };
  },
  methods:{
    newto(id){
      alert(id)
    }
  }
};
</script>

<style>
.newNav {
  display: inline-block;
  width: 25vw;
  height: 100vh;
}
.newsBox {
  width: 100%;
  padding: 2vw 0;
}
.news {
  margin: 0 auto;
  margin-bottom: 0.5vw;
  border-radius: 0.5vw;
  padding: 5%;
  height: 3.5vw;
  position: relative;
  overflow: hidden;
  width: 85%;
  cursor: pointer;
  background: var(--theame);
}
.news-image {
  position: absolute;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  background-color: #222;
  background-size: cover;
  background-position: center;
}
.news-box{
	height: 3.5vw;
	padding-left: 4vw;
	line-height: 1.75vw;
	font-size: 13px;
	color: var(--theme_text);
}
.news-title{
	font-weight: 800;
}

.newBox{
  width: 70vw;
  height: 100vh;
  background: #fff;
  display: inline-block;
  vertical-align: top;
}
</style>
