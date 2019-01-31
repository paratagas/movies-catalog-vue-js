import App from '@/App.vue';

describe('App component', () => {
  const endpoint = 'https://api.themoviedb.org/3/movie/popular?api_key=1ae6bf73ea58a58290edad6afca876a9';

  it('has created hook', () => {
    expect(typeof App.created).toBe('function');
  });

  it('has data function', () => {
    expect(typeof App.data).toBe('function');
  });

  it('sets the correct default data: post', () => {
    const defaultData = App.data();
    expect(defaultData.movies).toBe(null);
  });

  it('sets the correct default data: endpoint', () => {
    const defaultData = App.data();
    expect(defaultData.endpoint).toBe(endpoint);
  });
});
