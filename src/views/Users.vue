<template>
  <div>
    <div class="header">
      <h2>Users</h2>
      <Filter
        :searchProp="search"
        @updateSearch="updateSearch"
        :orderProp="order"
        @updateOrder="updateOrder"
      />
    </div>
    <UserList :users="filteredUsers" :loaded="loaded" />
  </div>
</template>

<script>
import { getUsers } from '@/api';
import Filter from '@/components/Filter';
import UserList from '@/components/UserList';

export default {
  name: 'Users',
  components: {
    Filter,
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
    updateSearch(search) {
      this.search = search;
    },
    updateOrder(order) {
      this.order = order;
    },
  },
};
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: baseline;
  text-align: left;
  padding: 0 15px;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
}
</style>