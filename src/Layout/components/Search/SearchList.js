import { memo } from "react";
import AccountItem from "../../../components/AccountItem";

const SearchList = ({ data }) => {
    return (
        <>
            {data &&
                data.map((result) => (
                    <AccountItem key={result.id} data={result} />
                ))}
        </>
    );
};

export default memo(SearchList);
