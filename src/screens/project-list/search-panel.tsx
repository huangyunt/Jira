import { Input, Select } from "antd";
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
      <Input
        type="text"
        onChange={(event) =>
          setParam({
            ...param,
            name: event.target.value,
          })
        }
      />
      <Select
        onChange={(value) =>
          setParam({
            ...param,
            personId: value,
          })
        }
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
