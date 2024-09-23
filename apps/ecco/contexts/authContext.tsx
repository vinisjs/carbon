import { createContext, ReactNode, useState } from "react";

export const authContext = createContext({})

interface AuthProviderProps {
  children: ReactNode; // Tipagem correta para children
}

export function useAuthContext({ children }: AuthProviderProps) {

  const [user, setUser] = useState(null);

  const login = (userData: any) => {
    setUser(userData);
  };

  // Função de logout
  const logout = () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  )
}