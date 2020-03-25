<template>
  <div>
    Test
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TestComponent extends Vue {
  public print() {
    console.log('print');
  }
}
</script>
