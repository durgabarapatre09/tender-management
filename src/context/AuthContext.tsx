import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<unknown>();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [openShowModal, setOpenShowModal] = useState(-1);

  useEffect(() => {
    const user = localStorage.getItem("credential") ?? false;
    if (user) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const task = JSON.parse(localStorage?.getItem("tasks") as string) ?? [];
    if (task) {
      setTasks(task);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("credential");
    setOpen(false);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        tasks,
        setTasks,
        open,
        setOpen,
        openShowModal,
        setOpenShowModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
