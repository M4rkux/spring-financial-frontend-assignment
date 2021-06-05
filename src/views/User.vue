<template>
  <nav>
    <h2 class="breadcrumb">
      <router-link :to="`${publicPath}users`">Users</router-link>
      >
      {{ user.name }}
    </h2>
  </nav>
  <div>
    <div class="content">
      <UserDetail :user="user" :loaded="userLoaded" />
      <UserPosts :posts="posts" :userName="user.name" :loaded="postsLoaded" />
    </div>
  </div>
</template>

<script>
import { publicPath } from '../../vue.config';
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
    publicPath,
    user: {},
    userLoaded: false,
    posts: [],
    postsLoaded: false,
  }),
  async mounted() {
    getUser(this.$route.params.id).then((response) => {
      this.user = response;
      this.userLoaded = true;
    });
    postsByUser(this.$route.params.id).then((response) => {
      this.posts = response;
      this.postsLoaded = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 15px;
}
nav {
  padding: 0 15px;
  margin-bottom: 30px;
}

.breadcrumb {
  text-align: left;
}
</style>