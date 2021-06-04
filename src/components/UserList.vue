<template>
  <div>
    <Loading :loaded="loaded">
      <ul id="user-list">
        <li v-for="user in users" :key="user.id">
          <router-link :to="`/user/${user.id}`">
            <span>{{ user.name }}</span> | <span>{{ user.username }}</span> |
            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
          </router-link>
        </li>
      </ul>
    </Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  name: 'UserList',
  components: {
    Loading
  },
  props: {
    users: Array,
    loaded: Boolean,
  },
};
</script>