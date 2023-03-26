import {
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    UserGroupIcon,
} from "../../../../components/Icons";
import config from "../../../../config";

export const menuList = [
    {
        title: "For Your",
        to: config.routes.home,
        icon: <HomeIcon />,
        iconActive: <HomeIconActive />,
    },
    {
        title: "Following",
        to: config.routes.following,
        icon: <UserGroupIcon />,
    },
    {
        title: "LIVE",
        to: config.routes.live,
        icon: <LiveIcon />,
    },
];
