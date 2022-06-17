import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import * as qs from "qs";
const apiURL = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const debouncedParam = useDebounce(param, 2000);
    useEffect(() => {
        fetch(
            `${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`
        ).then(async (response) => {
            if (response.ok) {
                setList(await response.json());
            }
        });
    }, [debouncedParam]);
    useMount(() => {
        fetch(`${apiURL}/users`).then(async (response) => {
            if (response.ok) {
                setUsers(await response.json());
            }
        });
    });
    return (
        <div>
            <SearchPanel
                param={debouncedParam}
                setParam={setParam}
                users={users}
            />
            <List list={list} users={users} />
        </div>
    );
};
