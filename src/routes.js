import appHome from './components/home.vue';
import appError from './components/error.vue';
import appList from './components/list.vue';
import appListAdd from './components/listAdd.vue';
import appListView from './components/listView.vue';
import appSubTabs from './components/subTabs.vue';

export default [
  {path: '/', component: appHome, 
    meta: { title: 'Home', 
      metaTags: [
        { name: 'description', content: 'Home입니다' },
        { name: 'keywords', content: 'Home키워드' },
        { property: 'og:site_name', content: 'vue-test' },
        { property: 'og:title', content: 'Home | vue-test' },
        { property: 'og:description', content: 'Home입니다' },
        { property: 'og:url', content: 'https://www.my-site.com/my-special-page' },
        { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg' }
      ],
      transitionName: 'slide' 
    }
  },
  {path: '*', component: appError, 
    meta: { title: '오류안내페이지', 
      metaTags: [
        { name: 'description', content: '오류안내페이지입니다' },
        { name: 'keywords', content: '오류안내페이지키워드' },
        { property: 'og:site_name', content: 'vue-test' },
        { property: 'og:title', content: '오류안내페이지 | vue-test' },
        { property: 'og:description', content: '오류안내페이지입니다' },
        { property: 'og:url', content: 'https://www.my-site.com/my-special-page' },
        { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg' }
      ],
      transitionName: 'slide' 
    }
  },
  {path: '/appList', component: appList, 
    meta: { title: '목록 | vue-test', 
      metaTags: [
        { name: 'description', content: '목록입니다' },
        { name: 'keywords', content: '목록키워드' },
        { property: 'og:site_name', content: 'vue-test' },
        { property: 'og:title', content: '목록 | vue-test' },
        { property: 'og:description', content: '목록입니다' },
        { property: 'og:url', content: 'https://www.my-site.com/my-special-page' },
        { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg' }
      ],
      transitionName: 'slide' 
    }
  },
  {path: '/appList/appListAdd', component: appListAdd, 
    meta: { title: '글쓰기 | vue-test', 
      metaTags: [
        { name: 'description', content: '글쓰기입니다' },
        { name: 'keywords', content: '글쓰기키워드' },
        { property: 'og:site_name', content: 'vue-test' },
        { property: 'og:title', content: '글쓰기 | vue-test' },
        { property: 'og:description', content: '글쓰기입니다' },
        { property: 'og:url', content: 'https://www.my-site.com/my-special-page' },
        { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg' }
      ],
    transitionName: 'slide' 
    }
  },
  {path: '/appList/appListView/:id', component: appListView, 
    meta: { title: '상세보기 | vue-test', 
      metaTags: [
        { name: 'description', content: '상세보기입니다' },
        { name: 'keywords', content: '상세보기키워드' },
        { property: 'og:site_name', content: 'vue-test' },
        { property: 'og:title', content: '상세보기 | vue-test' },
        { property: 'og:description', content: '상세보기입니다' },
        { property: 'og:url', content: 'https://www.my-site.com/my-special-page' },
        { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg' }
      ],
    transitionName: 'slide' 
    }
  },
  {path: '/appSubTabs', component: appSubTabs,
    meta: { title: '서브탭 | vue-test',
      metaTags: [
        { name: 'description', content: '서브탭입니다' },
        { name: 'keywords', content: '서브탭키워드' },
        { property: 'og:site_name', content: 'vue-test' },
        { property: 'og:title', content: '서브탭 | vue-test' },
        { property: 'og:description', content: '서브탭입니다' },
        { property: 'og:url', content: 'https://www.my-site.com/my-special-page' },
        { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg' }
      ],
      transitionName: 'slide'
    }
  }
]
