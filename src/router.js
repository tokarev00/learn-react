import {createBrowserRouter} from "react-router-dom";
import Profile from "./cmponents/Profile/Profile";
import Dialogs from "./cmponents/Dialogs/Dialogs";
import App from './App';

let posts = [
    {
        id: 1,
        message: 'Hi, How are you?',
        likesCount: 12,
    },
    {
        id: 2,
        message: 'It\'s my first post',
        likesCount: 22,
    },
]
let dialogs = [
    {
        id: 1,
        name: 'Dimych',
    },
    {
        id: 2,
        name: 'Andrey',
    },
    {
        id: 3,
        name: 'Sasha',
    },
    {
        id: 4,
        name: 'Sveta',
    },
    {
        id: 5,
        name: 'Vladyslav',
    },
    {
        id: 6,
        name: 'Yurii',
    },

];
let messages = [
    {
        id: 1,
        message: 'Hi',
    },
    {
        id: 2,
        message: 'How are you?',
    },
    {
        id: 3,
        message: 'yo?',
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Profile posts={posts} />,
            },
            {
                path: "dialogs",
                element: <Dialogs messages={messages} dialogs={dialogs}/>,
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