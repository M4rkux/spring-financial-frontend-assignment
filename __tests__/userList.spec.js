import { mount } from '@vue/test-utils';
import UserList from '@/components/UserList.vue';

const mockUsers = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
  }
];

describe('UserList.vue', () => {
  it('renders list without users', () => {
    const wrapper = mount(UserList, {
      props: {
        users: [],
        loaded: true
      }
    });
    expect(wrapper.text()).toMatch("Your search didn't find any results.");
  });

  it('renders list', () => {
    const wrapper = mount(UserList, {
      props: {
        users: mockUsers,
        loaded: true
      }
    });
    expect(wrapper.findAll('li').length).toBe(2);
  });
});
