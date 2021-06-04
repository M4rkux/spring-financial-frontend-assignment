<template>
  <div>
    <Loading :loaded="loaded">
      <pre>{{ posts }}</pre>
    </Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  name: 'UserPosts',
  components: {
    Loading
  },
  props: {
    posts: Array,
    loaded: Boolean,
  },
};
</script>