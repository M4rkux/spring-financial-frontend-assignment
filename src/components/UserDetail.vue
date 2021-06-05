<template>
  <Loading :loaded="loaded">
    <div id="user-detail">
      <section>
        <h3>Contact Info</h3>
        <ul>
          <li>Username: {{ user.username }}</li>
          <li>
            Email: <a :href="`mailto:${user.email}`">{{ user.email }}</a>
          </li>
          <li>
            Phone: <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
          </li>
          <li>
            Website:
            <a :href="`http://${user.website}`" target="_blank">{{
              user.website
            }}</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Address</h3>
        <span
          >{{ user.address.suite }} {{ user.address.street }},
          {{ user.address.city }}, {{ user.address.zipcode }}</span
        >
      </section>
      <section>
        <h3>Company</h3>
        <ul>
          <li>{{ user.company.name }}</li>
          <li>{{ user.company.bs }}</li>
          <li class="quote">"{{ user.company.catchPhrase }}"</li>
        </ul>
      </section>
    </div>
  </Loading>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  name: 'UserDetail',
  components: {
    Loading,
  },
  props: {
    user: Object,
    loaded: Boolean,
  },
};
</script>

<style lang="scss" scoped>
#user-detail {
  ul {
    list-style: none;
    padding: 0;
  }

  display: inherit;
  section {
    text-align: left;
    margin-bottom: 30px;
    padding: 0;
    margin-right: 0;
    width: auto;

    .quote {
      font-style: italic;
    }
  }

  border-bottom: 1px solid $border-color;
  margin-bottom: 30px;

  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: unset;
    
    section {
      border: 1px solid $border-color;
      padding: 5px 15px;
      margin-right: 10px;
      margin-bottom: 15px;
      min-width: 240px;
      width: 25%;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>