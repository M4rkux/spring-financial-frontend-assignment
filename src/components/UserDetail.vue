<template>
  <div>
    <Loading :loaded="loaded">
      <pre>{{ user }}</pre>
    </Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  name: 'UserDetail',
  components: {
    Loading
  },
  props: {
    user: Object,
    loaded: Boolean,
  },
};
</script>