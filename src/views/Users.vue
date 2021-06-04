<template>
  <div class="about">
    <h1>Users</h1>
    <div>
      <input type="search" v-model="search" />
      <select v-model="order">
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
      </select>
    </div>
    <UserList :users="filteredUsers" :loaded="loaded" />
  </div>
</template>

<script>
import { getUsers } from '@/api';
import UserList from '@/components/UserList';

export default {
  name: 'Users',
  components: {
    UserList,
  },
  data: () => ({
    users: [],
    search: '',
    order: 'name',
    loaded: false,
  }),
  async mounted() {
    this.users = await getUsers();
    this.loaded = true;
  },
  computed: {
    filteredUsers() {
      const search = this.search.trim().toLocaleLowerCase();
      return this.users
        .filter((user) => {
          return (
            user.name.toLocaleLowerCase().includes(search) ||
            user.username.toLocaleLowerCase().includes(search) ||
            user.email.toLocaleLowerCase().includes(search)
          );
        })
        .sort(this.sortUsers);
    },
  },
  methods: {
    sortUsers(a, b) {
      if (a[this.order] < b[this.order]) return -1;
      if (a[this.order] > b[this.order]) return 1;
      return 0;
    },
  },
};
</script>