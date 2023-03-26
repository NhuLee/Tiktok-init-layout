import PropTypes from "prop-types";
import React from "react";
import Button from "./../../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx("menu-item", {
        separate: data.separate,
    });
    return (
        <Button
            to={data?.to}
            type="text"
            className={classes}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
