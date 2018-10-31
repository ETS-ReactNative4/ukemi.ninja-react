import Home from '../views/Home.jsx';
import ContactUs from '../views/ContactUs.jsx';

const indexRoutes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  // { path: '/about', name: 'about', Component: AboutUs },
  // { path: '/cards', name: 'cards', Component: Cards },
  // { path: '/parks', name: 'parks', Component:  },
  // { path: '/events', name: 'events', Component:  },
  // { path: '/books', name: 'books', Component:  },
  // { path: '/', name: '', Component:  },
  // { path: '/', name: 'Store', Component: Store },
  { path: '/contact', exact: false, name: 'Contact', component: ContactUs },
];

export default indexRoutes;
