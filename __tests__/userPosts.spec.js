import { mount } from '@vue/test-utils';
import UserPosts from '@/components/UserPosts.vue';

const mockPosts = [
  {
    "id": 1,
    "title": "Post 1",
    "body": "Content of post 1.",
  },
  {
    "id": 2,
    "title": "Post 2",
    "body": "Content of post 2.",
  },
];

describe('UserPosts.vue', () => {
  it('renders list', () => {
    const wrapper = mount(UserPosts, {
      props: {
        posts: mockPosts,
        loaded: true
      }
    });
    expect(wrapper.findAll('article').length).toBe(2);
  });
});
