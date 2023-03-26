import { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "./../../../components/Popper";
import styles from "./Search.module.scss";
import { useDebounce } from "../../../hooks";
import * as searchServices from "./../../../Services/searchService";
import SearchList from "./SearchList";

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputEl = useRef();

    const debouncedVal = useDebounce(searchVal, 500);

    useEffect(() => {
        if (!debouncedVal.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedVal);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debouncedVal]);

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(" ")) {
            setSearchVal(searchValue);
        }
    };

    const handleDeleteSearch = () => {
        setSearchVal("");
        setSearchResult([]);

        inputEl.current.focus();
    };

    const handleHideResults = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                placement="top-start"
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {/* {searchResult.map((result) => {
                                console.log("search result");
                                return (
                                    <AccountItem
                                        key={result.id}
                                        data={result}
                                    />
                                );
                            })} */}
                            {/* focus on or out of the search input the data don't change so use React memo to prevent re-render */}
                            <SearchList data={searchResult} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputEl}
                        value={searchVal}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleSearchChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchVal && !loading && (
                        <button
                            className={cx("clear")}
                            onClick={handleDeleteSearch}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx("search-btn")}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
