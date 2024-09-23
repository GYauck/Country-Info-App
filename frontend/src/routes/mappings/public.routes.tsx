import { RouteObject } from "react-router-dom";
import { PublicPaths } from "../paths";
import { lazyComponentLoader } from "../route-utils";

export const PublicRoutes: RouteObject = {
  children: [
    {
      path: PublicPaths.COUNTRY_LIST,
      element: lazyComponentLoader(
        import("@/pages/country-list/country-list.page")
      ),
    },
    {
      path: PublicPaths.COUNTRY_DETAILS,
      element: lazyComponentLoader(
        import("@/pages/country-details/country-detail.page")
      ),
    },
  ],
};
