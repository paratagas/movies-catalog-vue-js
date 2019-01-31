import Vue from 'vue';
import Post from '@/components/Post/Post.vue';
import { DEFAULT_MOVIE_ID } from '@/components/Post/constants';

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  return vm.$el;
}

describe('Post component', () => {
  const endpoint = 'https://api.themoviedb.org/3/movie/';

  it('has created hook', () => {
    expect(typeof Post.created).toBe('function');
  });

  it('has watch object', () => {
    expect(typeof Post.watch).toBe('object');
  });

  it('has data function', () => {
    expect(typeof Post.data).toBe('function');
  });

  it('sets the correct default data: post', () => {
    const defaultData = Post.data();
    expect(defaultData.post).toBe(DEFAULT_MOVIE_ID);
  });

  it('sets the correct default data: endpoint', () => {
    const defaultData = Post.data();
    expect(defaultData.endpoint).toBe(endpoint);
  });

  it('mounts the correct movie', () => {
    const postComponent = mountComponentWithProps(Post, { id: DEFAULT_MOVIE_ID });
    const mountedMovieProps = postComponent.__vue__.$options.propsData;
    expect(mountedMovieProps).toEqual({ id: DEFAULT_MOVIE_ID });
  });
});
