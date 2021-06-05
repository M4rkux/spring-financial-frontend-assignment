import { shallowMount } from '@vue/test-utils';
import Filter from '@/components/Filter.vue';

describe('Filter.vue', () => {
  it('renders labels', () => {
    const wrapper = shallowMount(Filter, {
      props: {
        searchProp: '',
        orderProp: 'name'
      }
    });
    expect(wrapper.text()).toMatch("Search");
    expect(wrapper.text()).toMatch("Sort By");
  });

  it('renders elements', () => {
    const wrapper = shallowMount(Filter, {
      props: {
        searchProp: '',
        orderProp: 'name'
      }
    });
    expect(wrapper.find('#search')).toBeTruthy();
    expect(wrapper.find('#order')).toBeTruthy();
  });
});
