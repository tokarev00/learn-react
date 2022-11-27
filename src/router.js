import {createBrowserRouter} from "react-router-dom";
import Profile from "./cmponents/Profile/Profile";
import Dialogs from "./cmponents/Dialogs/Dialogs";
import App from './App';
import state from "./redux/state";
import {addPost} from "./redux/state";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Profile addPost={addPost} state={state.profilePage} />,
            },
            {
                path: "dialogs",
                element: <Dialogs state={state.dialogsPage} />,
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