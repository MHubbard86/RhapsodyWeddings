import Email from "../features/ContactUs/ContactUs";
import Reviews from "../features/Reviews/Reviews";
import FAQ from "../features/FAQ/FAQ";
import Packages from "../features/Packages/Packages";
import PoweredBy from '../components/PoweredBy/PoweredBy';
import * as Route from './RoutesIndex';

const AppRoutes = () => {
  return {
    shared: [
      {
        exact: true,
        component: Packages,
        path: Route.Packages,
      },
      {
        exact: true,
        component: Reviews,
        path: Route.Reviews,
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
    ],
  };
};
export default AppRoutes;