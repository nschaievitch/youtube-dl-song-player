import { useRef } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ doSearch }) => {
    const form = useRef(null);

    const submit = (info) => {
        const query = form.current.elements[0].value;
        console.log(query)
        doSearch(query);
        if (info) info.preventDefault();
    };

    return (
        <form className={styles.searchBar} ref={form} onSubmit={submit}>
            <input type="text"></input>

        </form>
    );
};

export default SearchBar;
