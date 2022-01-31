<template>
  <div class="hero">
    {{ msg }}
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Hero extends Vue {
  @Prop() private msg!: string;
}
</script>
