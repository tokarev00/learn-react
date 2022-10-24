import { createBrowserRouter } from "react-router-dom";
import Profile from "./cmponents/Profile/Profile";
import Dialogs from "./cmponents/Dialogs/Dialogs";
import App from './App';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Profile />,
            },
            {
                path: "dialogs",
                element: <Dialogs />,
            },
            {
                path: "news",
                element: <div>News</div>,
            },
            {
                path: "music",
                element: <div>music</div>,
            },
            {
                path: "settings",
                element: <div>Settings</div>,
            },
        ],
    },
]);
export default router;