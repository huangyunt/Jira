import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react";
const apiURL = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([])
    useEffect(() => {
        fetch(`${apiURL}/projects`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param]);
    useEffect(() => {
        fetch(`${apiURL}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [])
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users} />
    </div>
}