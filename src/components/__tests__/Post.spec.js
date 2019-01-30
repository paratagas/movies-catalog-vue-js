import Vue from 'vue'
import Post from '@/components/Post.vue'

describe('MessageToggle.vue', () => {
  it('displays default message', () => {
    const Ctor = Vue.extend(MessageToggle);
    const vm = new Ctor().$mount();

    expect(vm.$el.textContent).toContain('default message')
  });
});
