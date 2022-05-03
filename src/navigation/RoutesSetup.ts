import Email from "../components/Email/Feedback";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Packages from "../components/Packages/Packages";
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
    ],
  };
};
export default AppRoutes;