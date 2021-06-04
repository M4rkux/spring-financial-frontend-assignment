<template>
  <div>
    <slot v-if="loaded"></slot>
    <div v-else>
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