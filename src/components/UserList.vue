<template>
  <div>
    <Loading :loaded="loaded">
      <ul id="user-list" v-if="users?.length">
        <li
          v-for="user in users"
          :key="user.id"
          @click="navigate(user.id, $event)"
          @keypress.enter="navigate(user.id)"
          tabindex="0"
        >
          <div class="avatar"></div>
          <div class="content">
            <div class="name-username">
              <span>{{ user.name }}</span>
              <span>{{ user.username }}</span>
            </div>
            <a :href="`mailto:${user.email}`">{{
              user.email.toLocaleLowerCase()
            }}</a>
          </div>
        </li>
      </ul>
      <div class="no-results" v-else>Your search didn't find any results.</div>
    </Loading>
  </div>
</template>

<script>
import { publicPath } from '../../vue.config';
import Loading from '@/components/Loading';
import router from '@/router';

export default {
  name: 'UserList',
  components: {
    Loading,
  },
  props: {
    users: Array,
    loaded: Boolean,
  },
  methods: {
    navigate(id, event) {
      if (!event || event.target.tagName.toLowerCase() !== 'a') {
        router.push(`${publicPath}users/${id}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  li {
    background-color: $li-background-odd;
    min-height: 90px;
    border-top: 1px solid $border-color;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: unset;
    padding: 0 15px;

    &:last-child {
      border-bottom: 1px solid $border-color;
    }

    &:nth-child(even) {
      background-color: $li-background-even;
    }

    &:hover {
      cursor: pointer;
      background-color: $li-background-hover;
    }

    .avatar {
      height: 46px;
      width: 46px;
      min-width: 46px;
      background-color: $avatar-background;
      border-radius: 50%;
      display: block;
      margin-right: 20px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      text-align: left;
      width: 100%;
      justify-content: space-between;

      .name-username {
        display: flex;
        flex-direction: column;
      }
      
      a,
      span {
        line-height: 1.25;
      }
    }

    @media screen and (min-width: 500px) {
      border-left: 1px solid $border-color;
      border-right: 1px solid $border-color;
      padding: 0 15px;
      
      .content {
        flex-direction: row;
        align-items: center;
      }
    }
  }
}

.no-results {
  margin-top: 30px;
  color: $default-text-color;
  font-size: 1.25em;
}
</style>