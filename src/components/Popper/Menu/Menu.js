import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "..";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({
    children,
    items = [],
    hideOnClick = false,
    onChange = defaultFn,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleBack = () => {
        setHistory((prev) => {
            return [...prev].slice(0, prev.length - 1);
        });
    };

    const handleResetShowMenu = () => setHistory((prev) => prev.slice(0, 1));

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderMenuItem = (attrs) => (
        <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBack} />
                )}
                <div className={cx("menu-body")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 300]}
            offset={[10, 8]}
            hideOnClick={hideOnClick}
            render={renderMenuItem}
            onHidden={handleResetShowMenu}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
