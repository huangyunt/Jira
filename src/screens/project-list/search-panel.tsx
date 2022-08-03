import React, { useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
  title: string;
  email: string;
  organization: string;
  token: string;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel: React.FC<SearchPanelProps> = ({
  users,
  param,
  setParam,
}) => {
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
