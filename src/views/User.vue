<template>
  <h2>
    <div id="nav">
      <router-link to="/">Home</router-link>
      >
      {{ user.name }}
    </div>
  </h2>
  <div class="about">
    <h1>Users Detail</h1>
    <div>
      <UserDetail :user="user" :loaded="userLoaded" />
      <UserPosts :posts="posts" :loaded="postsLoaded" />
    </div>
  </div>
</template>

<script>
import { getUser, postsByUser } from '@/api';
import UserDetail from '@/components/UserDetail';
import UserPosts from '@/components/UserPosts';

export default {
  name: 'User',
  components: {
    UserDetail,
    UserPosts,
  },
  data: () => ({
    user: {},
    userLoaded: false,
    posts: [],
    postsLoaded: false,
  }),
  async mounted() {
    this.user = await getUser(this.$route.params.id);
    this.userLoaded = true;
    this.posts = await postsByUser(this.$route.params.id);
    this.postsLoaded = true;
  },
};
</script>