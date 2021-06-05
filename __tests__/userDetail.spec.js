import { mount } from '@vue/test-utils';
import UserDetail from '@/components/UserDetail.vue';

const mockUser = {
  address: {},
  company: {},
};

describe('UserDetail.vue', () => {
  it('renders labels', () => {
    const wrapper = mount(UserDetail, {
      props: {
        user: mockUser,
        loaded: true
      }
    });
    expect(wrapper.text()).toMatch("Contact Info");
    expect(wrapper.text()).toMatch("Address");
    expect(wrapper.text()).toMatch("Company");
  });
});
