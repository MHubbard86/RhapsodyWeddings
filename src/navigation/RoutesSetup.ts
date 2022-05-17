import Email from "../features/ContactUs/ContactUs";
import Reviews from "../features/Reviews/Reviews";
import FAQ from "../features/FAQ/FAQ";
import Gallery from "../features/Gallery/Gallery";
import PoweredBy from '../components/PoweredBy/PoweredBy';
import Photoshoot from "../features/Photoshoot/Photoshoot";
import Prices from "../features/Prices/Prices";
import Cakehoops from "../features/CakeHoops/Cakehoops";
import * as Route from './RoutesIndex';

const AppRoutes = () => {
  return {
    shared: [
      {
        exact: true,
        component: Gallery,
        path: Route.Gallery,
      },
      {
        exact: true,
        component: Reviews,
        path: Route.Reviews,
      },
      {
        exact: true,
        component: Photoshoot,
        path: Route.Photoshoot,
      },
      {
        exact: true,
        component: Prices,
        path: Route.Prices,
      },
      {
        exact: true,
        component: FAQ,
        path: Route.FAQ,
      },
      {
        exact: true,
        component: Email,
        path: Route.Email,
      },
      {
        exact: true,
        component: PoweredBy,
        path: Route.PoweredBy,
      },
      {
        exact: true,
        component: Cakehoops,
        path: Route.Cakehoops,
      }
    ],
  };
};
export default AppRoutes;