export const SearchPanel = ({ users, param, setParam }) => {
    return (
        <form action="">
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
                            personId: users.find(
                                (user) => user.name === event.target.value
                            )?.id,
                        })
                    }
                >
                    <option value="">负责人</option>
                    {users.map((user) => (
                        <option key={user.id}>{user.name}</option>
                    ))}
                </select>
            </div>
        </form>
    );
};
