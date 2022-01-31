<template>
  <div class="articlesByThree" v-if="articles.length > 0">
    ma liste d'articles
    <li v-for="article in articles.slice(0, 3)" :key="article.title">
      {{ article.title }}
      {{ article.imageUrl }}
      {{ article.imageAlt }}
      <br />
      <div class="articleContent" v-html="article.content"></div>
    </li>
  </div>
  <div v-else>pas d'article</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ArticlesInterface from "@/interfaces/ArticlesInterfaces";
import InstanceApi from "@/services/apiClient";

@Component
export default class Hero extends Vue {
  protected articles: Array<ArticlesInterface> = [];

  protected apiUrlArticles = "articles/articles_by_limit";

  get getArticles(): any {
    try {
    return InstanceApi.get(this.apiUrlArticles).then(response => ( this.articles = response.data ));
    } catch {
      console.log('error')
      return false;
    }
  }

  async mounted() {
    let response = await this.getArticles
    console.log(response)
  }
}
</script>