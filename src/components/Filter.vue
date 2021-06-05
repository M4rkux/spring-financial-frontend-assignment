<template>
  <div class="filter-component">
    <div class="filter-line">
      <label for="search">Search</label>
      <input id="search" type="search" v-model="search" @input="updateSearch" />
    </div>
    <div class="filter-line">
      <label for="order">Sort By</label>
      <select id="order" v-model="order" @change="updateOrder">
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    searchProp: String,
    orderProp: String,
  },
  data() {
    return {
      search: this.searchProp,
      order: this.orderProp,
    };
  },
  methods: {
    updateSearch() {
      this.$emit('update-search', this.search);
    },
    updateOrder() {
      this.$emit('update-order', this.order);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-component {
  width: 100%;
  .filter-line {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;

    label {
      color: #717171;
      font-weight: bold;
    }

    input,
    select {
      width: 100%;
      font-size: 1rem;
      padding: 2px 4px;
      color: #717171;
    }
  }

  @media screen and (min-width: 480px) {
    width: auto;
    display: flex;
    flex-direction: row;
    margin-left: auto;

    .filter-line {
      margin-bottom: 0;
      &:last-child {
        margin-left: 15px;
      }
    }
  }
}
</style>