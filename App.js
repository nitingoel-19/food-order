
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom";
import Help from "./src/components/Help";
import LogIn from "./src/components/Log-in";
import Offers from "./src/components/Offers";
import Location from "./src/components/Location";
import RestaurantMenu from "./src/components/RestrauntMenu";
import ShimmerEffect from "./src/components/Shimmer";
import { Provider } from "react-redux";
import storeShare from "./src/utils/Store";

const Cart = lazy(() => import("./src/components/Cart"));

const Applayout = () => {
    return (
        <>
            <Provider store = {storeShare}>
                <Header />
                <Outlet />
                <Footer />
            </Provider>
        </>
    )
}
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/Help",
                element: <Help />
            },
            {
                path: "/Cart",
                element: (<Suspense fallback={<ShimmerEffect />}>
                    <Cart />
                    </Suspense>
                )       
            },
            {
                path: "/log-in",
                element: <LogIn />
            },
            {
                path: "/Offers",
                element: <Offers />
            },
            {
                path: "/Location",
                element: <Location />
            },
            {
                path: "/RestrauntMenu/:id",
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);