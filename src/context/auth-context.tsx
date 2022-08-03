import React, { ReactNode, useState } from "react";
import { User } from "screens/project-list/search-panel";
import * as auth from "auth-provider";
import { http } from "utils/http";
import { useMount } from "utils";

interface AuthForm {
  username: string;
  password: string;
}
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};
const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  useMount(() => bootstrapUser().then(setUser));
  const login = (form: AuthForm) =>
    auth.login(form).then(setUser);
  const register = (form: AuthForm) =>
    auth.register(form).then(setUser);
  const logout = () =>
    auth.logout().then(() => setUser(null));
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw Error("useAuth 必须在AuthProvider中使用");
  }
  return context;
};
