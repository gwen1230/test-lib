<template>
  <div id="app">
    <test-component ref="test"></test-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TestComponent from './components/TestComponent.vue';

@Component({
  components: { TestComponent }
})
export default class App extends Vue {
  mounted() {
    (this.$refs.test as TestComponent).print();
  }
}
</script>
