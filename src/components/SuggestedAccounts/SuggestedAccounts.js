import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "../AccountItem";
import usersData from "./data/users.json";
import UserCard from "../Popper/UserCard/UserCard";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, className }) {
    return (
        <div className={cx("wrapper", { [className]: className })}>
            <p className={cx("label")}>{label}</p>
            <ul className={cx("suggested-list")}>
                {usersData.data &&
                    usersData.data.map((user) => (
                        <UserCard item={user} key={user.id}>
                            <li>
                                <AccountItem
                                    data={user}
                                    className="suggested-accounts"
                                />
                            </li>
                        </UserCard>
                    ))}
            </ul>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string,
};
export default SuggestedAccounts;
