import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading.vue', () => {
  it('renders loading', () => {
    const wrapper = shallowMount(Loading, {
      props: { loaded: false }
    });
    expect(wrapper.text()).toMatch("Loading...");
  });
});
