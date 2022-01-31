<template>
  <div class="home">
    <Hero msg="Mickael dicurzio portfolio" />
    <ArticlesByThree :articles="reversedArticle"></ArticlesByThree>
    <p>{{ number }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hero from "@/components/Hero.vue";
import ArticlesByThree from "@/components/Articles/ArtcilesByThree.vue";
import ArticlesInterface from "@/interfaces/ArticlesInterfaces";

@Component({
  components: {
    Hero,
    ArticlesByThree,
  },
})
export default class Home extends Vue {
  number = 0;
  articles: Array<ArticlesInterface> = [
    {
      title: "title1",
      imageUrl: "a",
      imageAlt: "b",
      content: "<p> coucouc <p>",
    },
    {
      title: "title2",
      imageUrl: "a",
      imageAlt: "b",
      content: "<p> coucouc <p>",
    },
  ];

  get reversedArticle(): Array<ArticlesInterface> {
    return this.articles.splice(0, 3).reverse();
  }
}
</script>
