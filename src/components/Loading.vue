<template>
  <div>
    <slot v-if="loaded"></slot>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loaded: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.loading {
  font-size: 1.25rem;
}
</style>