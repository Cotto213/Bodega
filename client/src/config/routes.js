import PageExample from '../pages/CRM/PageExample/PageExample'

const routes = [
    {
       path: "/admin",
       
       exact: false,
       // eslint-disable-next-line no-sparse-arrays
       routes: [
          {
             path: "/admin",
             component: PageExample,
             exact: true
          },
       ]
    }
];