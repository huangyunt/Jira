import React, { useEffect, useState } from "react";
export const SearchPanel = ({ users, param, setParam }) => {
    return (
        <div>
            <input
                type="text"
                onChange={(event) =>
                    setParam({
                        ...param,
                        name: event.target.value,
                    })
                }
            />
            <select
                onChange={(event) =>
                    setParam({
                        ...param,
                        personId: event.target.value,
                    })
                }
            >
                <option value="">负责人</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
