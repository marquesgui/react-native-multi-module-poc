import { getConfig, updateConfig } from './config';
import PostsList from './posts/screens/PostsList';

const initialPostsList = [
  {
    id: 1,
    title: 'Post 1',
    text: 'post 1 text',
    img: 'https://picsum.photos/200/200/?image=11',
  },
  {
    id: 2,
    title: 'Post 2',
    text: 'Scientists have developed catalysts that can convert carbon dioxide – the main cause of global warming – into plastics, fabrics, resins and other products. The discovery, based on the chemistry of artificial photosynthesis, is detailed in the journal Energy & Environmental Science.',
    img: 'https://picsum.photos/200/200/?image=22',
  },
];

export default class ModuleBlog {
  prefix() {
    return 'blog';
  }

  init() {
    // any initialization code for your module
  }

  methods() {
    return [
      {
        id: 'blog.getPostsCount',
        generator: () => async () => {},
      },
    ];
  }

  components() {
    return [
      {
        id: 'blog.PostsList',
        generator: () => require('./posts/screens/PostsList').default,
      },
    ];
  }

  listeners() {
    return [
      {
        id: 'settings.postsListReverseLayout',
        callback: async reverseLayout => {
          console.log('moduleBlog-listener-reverseLayout', reverseLayout);
          updateConfig({ ...getConfig(), layoutReversed: reverseLayout });
        },
      },
    ];
  }

  tabs() {
    return [
      {
        id: 'moduleBlog',
        label: 'Posts',
        screen: 'blog.PostsList',
        component: PostsList,
        componentProps: { posts: initialPostsList },
      },
    ];
  }
}
