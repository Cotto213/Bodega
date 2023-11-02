//RUTEO DE APP
//Importaciones de Layouts
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutLogin from '../layouts/LayoutLogin';
import PageExample from '../pages/CRM/PageExample/PageExample';
//otras
import Error404 from "../pages/Error404";


//ARREGLO DE RUTAS
const routes = [
   {
      path: "/",
      component: LayoutAdmin,
      exact: false,
      // eslint-disable-next-line no-sparse-arrays
      routes: [
         {
            path: "/",
            component: PageExample,
            exact: true
         },
      ]
   }
   

];
export default routes;
