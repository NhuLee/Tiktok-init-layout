import PropTypes from "prop-types";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "../Image";
import styles from "./AccountItem.module.scss";
import Button from "../Button/";

const cx = classNames.bind(styles);

const AccountItem = ({ data, isUserCard = false, className = "" }) => {
    return (
        <Link
            to={`/@${data.nickname}`}
            className={cx("wrapper", { [className]: className })}
        >
            <div className={cx("avatar-group")}>
                <Image
                    className={cx("avatar")}
                    src={data.avatar}
                    alt={data.last_name}
                />
                {isUserCard && <Button primary>Follow</Button>}
            </div>
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>{data.full_name}</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx("username")}>{data.nickname}</span>
            </div>
            {isUserCard && (
                <div className={cx("user-state")}>
                    <p className={cx("folower-count")}>
                        <span>{data.followers_count}</span>
                        <span>Follower</span>
                    </p>
                    <p className={cx("like-count")}>
                        <span>{data.likes_count}</span>
                        <span>Like</span>
                    </p>
                </div>
            )}
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    classname: PropTypes.string,
    isUserCard: PropTypes.bool,
};

export default AccountItem;
