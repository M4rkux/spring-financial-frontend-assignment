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
        router.push(`/users/${id}`);
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
    background-color: #fafafa;
    min-height: 90px;
    border-top: 1px solid #dcdcdc;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #494949;
    text-decoration: unset;
    padding: 0 20px;

    &:last-child {
      border-bottom: 1px solid #dcdcdc;
    }

    &:nth-child(even) {
      background-color: #ffffff;
    }

    &:hover {
      cursor: pointer;
      background-color: #ebebeb;
    }

    .avatar {
      height: 46px;
      width: 46px;
      min-width: 46px;
      background-color: #d4d4d4;
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
      a:active {
        color: #18a7e3;
        text-decoration: unset;

        &:hover {
          text-decoration: underline;
        }
      }

      a,
      span {
        line-height: 1.25;
      }
    }

    @media screen and (min-width: 480px) {
      border-left: 1px solid #dcdcdc;
      border-right: 1px solid #dcdcdc;

      .content {
        flex-direction: row;
        align-items: center;
      }
    }
  }
}

.no-results {
  margin-top: 30px;
  color: #494949;
  font-size: 1.25em;
}
</style>