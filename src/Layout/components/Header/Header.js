import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faEarthAsia,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import {
    faCircleQuestion,
    faKeyboard,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "../../../components/Button";
import styles from "./Header.module.scss";
import images from "../../../assets/images";
import Menu from "../../../components/Popper/Menu";
import { MessageIcon, SendIcon, UploadIcon } from "../../../components/Icons";
import Image from "../../../components/Image";
import Search from "../Search";
import { Link } from "react-router-dom";
import config from "../../../config";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Languages",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Vietnamese",
                },
                {
                    type: "language",
                    code: "jp",
                    title: "Japanese",
                },
                {
                    type: "language",
                    code: "cn",
                    title: "Chinese",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Vietnamese",
                },
                {
                    type: "language",
                    code: "jp",
                    title: "Japanese",
                },
                {
                    type: "language",
                    code: "cn",
                    title: "Chinese",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Vietnamese",
                },
                {
                    type: "language",
                    code: "jp",
                    title: "Japanese",
                },
                {
                    type: "language",
                    code: "cn",
                    title: "Chinese",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const [currentUser, setCurrentUser] = useState(true);

    const handleChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // handleChange language
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/@name",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/coins",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Logout",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.home}>
                    <Image src={images.logo} alt="Tiktok logo" />
                </Link>
                <Search />
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Upload Video</span>}
                                placement="bottom"
                            >
                                <button className={cx("actions-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Send Message</span>}
                                placement="bottom"
                            >
                                <button className={cx("actions-btn")}>
                                    <SendIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content={<span>Inpox</span>}
                                placement="bottom"
                            >
                                <div className={cx("inbox-group")}>
                                    <button className={cx("actions-btn")}>
                                        <MessageIcon />
                                    </button>
                                    <span className={cx("numb-inbox")}>20</span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button type="text">Upload</Button>
                            <Button primary onClick={() => alert("Clicked!")}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5f622e8b62b2de4531e82fa217619193.jpeg?x-expires=1679997600&x-signature=y5CoLB2Az4e7bfEughSqzpi878o%3D"
                                className={cx("user-avatar")}
                                alt="Name"
                                fallback="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/26a71bd0645ab5404bc022e660e200fe.jpeg?x-expires=1679648400&x-signature=traCUtOZmvcxuo74IGzM5ewg%2BFE%3D"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
