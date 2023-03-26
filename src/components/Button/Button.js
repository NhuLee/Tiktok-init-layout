import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    type,
    primary = false,
    disabled = false,
    size,
    children,
    className,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Component = "button";
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = "a";
    } else if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
        // delete props.onClick;
    }

    const classes = cx("wrapper", {
        [className]: className,
        primary,
        [type]: type,
        [size]: size,
        disabled,
    });
    return (
        <Component className={cx(classes)} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
        </Component>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};
export default Button;
