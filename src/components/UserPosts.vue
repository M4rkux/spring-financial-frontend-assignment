<template>
  <div>
    <Loading :loaded="loaded">
      <h2>Posts by {{ userName }}</h2>
      <div class="articles">
        <article v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </article>
      </div>
    </Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  name: 'UserPosts',
  components: {
    Loading,
  },
  props: {
    userName: String,
    posts: Array,
    loaded: Boolean,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: left;
  margin-bottom: 30px;
}

.articles {
  display: inherit;
  article {
    border-bottom: 1px solid $border-color;
    text-align: left;
  }

  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    article {
      border: 1px solid $border-color;
      padding: 5px 15px;
      margin-right: 10px;
      width: 240px;
      margin-bottom: 15px;
    }
  }
}
</style>