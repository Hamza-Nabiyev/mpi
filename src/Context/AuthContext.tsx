import React, { createContext, useState } from "react";
import { IAuthRequest, IAuthResponse, IPerson } from "../Interfaces/Auth";
// import axios from "axios";
import { IOperationResult } from "../Interfaces/OperationResult";
// import { API_URL } from "../Api";

interface IAuthContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  user: IPerson | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<IPerson | null | undefined>>;
  //   login: (authRequest: IAuthRequest) => Promise<void>;
  logout: () => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  error: string | null;
}

export const AuthProvider = createContext<IAuthContext>({} as IAuthContext);

const AuthContext: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<IPerson | null>();
  const [token, setToken] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //   const login = async (authRequest: IAuthRequest) => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios
  //         .post<IOperationResult<IAuthResponse>>(
  //           `${API_URL}/auth/authenticate`,
  //           authRequest
  //         )
  //         .then((resp) => resp);

  //       if (data.success) {
  //         if (data?.result?.person.roleId === 3) {
  //           setUser(data?.result?.person);
  //           setError(null);
  //         } else {
  //           setError("Ошибка авторизации");
  //         }
  //         console.log(data?.result?.person);
  //         // await SecureStore.setItemAsync("token", data.result!.token);
  //       }
  //     } catch (e: any) {
  //       // setError(e?.response?.data?.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const logout = async () => {
    setUser(null);

    // await SecureStore.deleteItemAsync("token");
  };
  return (
    <AuthProvider.Provider
      value={{
        count,
        setCount,
        user,
        setUser,

        logout,
        loading,
        setLoading,
        error,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
