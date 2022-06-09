import Admin from "./pages/Admin";
import {ADMIN_ROUTE, FAVORITES_ROUTE, FLAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, RENTAL_ROUTE} from "./utils/consts";
import Favorites from "./pages/Favorites";
import Rental from "./pages/Rental";
import Auth from "./pages/Auth";
import FlatPage from "./pages/FlatPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    },
]

export const publicRoutes = [
    {
        path: RENTAL_ROUTE,
        Component: Rental
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FLAT_ROUTE + '/:id',
        Component: FlatPage
    },
]
