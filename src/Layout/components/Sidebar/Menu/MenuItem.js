import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
    const renderMenu = (activeItem = false) => (
        <>
            {activeItem ? iconActive || icon : icon}
            <span className={cx("title")}>{title}</span>
        </>
    );
    return (
        <NavLink
            className={({ isActive }) => cx("menu-item", { active: isActive })}
            to={to}
        >
            {({ isActive }) => renderMenu(isActive)}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node,
};
export default MenuItem;
