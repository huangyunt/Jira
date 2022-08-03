import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 200);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", {
      data: cleanObject(debounceParam),
    }).then(setList);
  }, [debounceParam]);
  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      />
      <List users={users} list={list} />
    </div>
  );
};
