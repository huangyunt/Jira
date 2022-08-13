import { Table } from "antd";
import React from "react";
import { User } from "./search-panel";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProps {
  users: User[];
  list: Project[];
}
export const List: React.FC<ListProps> = ({
  users,
  list,
}) => {
  return (
    <Table
      pagination={false}
      dataSource={list}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {" "}
                {users.find(
                  (user) => user.id === project.personId
                )?.name || "unknown"}
              </span>
            );
          },
        },
      ]}
    />
  );
};
