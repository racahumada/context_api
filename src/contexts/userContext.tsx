import { createContext, useState } from "react";
import { IUserContextProps } from "../types/IUserContextProps";

export const UserContext = createContext<IUserContextProps | undefined>(undefined)

export function UserContextProvider ({children}: any)  {

  const [username, setUsername] = useState<string>('')

  function saveLoginUserToCache(user: string){
    if(user !== "")
      setUsername(user)
  }

  return (
    <UserContext.Provider value={{ username, saveLoginUserToCache }}>{children}</UserContext.Provider>
  )
}