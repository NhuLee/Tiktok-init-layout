import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import { Wrapper as PopperWrapper } from "../../Popper";
import AccountItem from "../../AccountItem";

function UserCard({ children, item }) {
    const renderUserCard = () => (
        <PopperWrapper>
            <AccountItem data={item} isUserCard className="user-card" />
        </PopperWrapper>
    );
    return (
        <>
            <Tippy
                interactive
                render={renderUserCard}
                placement="bottom"
                delay={[800, 0]}
                offset={[-10, 0]}
            >
                {children}
            </Tippy>
        </>
    );
}
UserCard.propTypes = {
    children: PropTypes.node.isRequired,
    item: PropTypes.object.isRequired,
};
export default UserCard;
