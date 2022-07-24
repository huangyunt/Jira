import { useEffect, useState } from "react";
export const SearchPanel = () => {
    const [param, setParam] = useState({
        projectName: "",
        personId: "",
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState({});
    useEffect(() => {
        fetch("").then(async (res) => {
            if (res.ok) {
                setList(await res.json());
            }
        });
        return () => {};
    }, [param]);

    return (
        <div>
            <input
                onChange={(evt) =>
                    setParam({
                        ...param,
                        projectName: evt.target.value,
                    })
                }
            ></input>
            <select
                value=""
                onChange={(evt) =>
                    setParam({
                        ...param,
                        personId: evt.target.value,
                    })
                }
            >
                <option value="">负责人</option>
                {users.map((user) => (
                    <option value={user.id}>{user.name}</option>
                ))}
            </select>
        </div>
    );
};
