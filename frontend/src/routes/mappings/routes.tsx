import { RouteObject } from "react-router-dom";
import { PublicRoutes } from "./public.routes";

export const Routes: RouteObject = {
  children: [PublicRoutes],
};
