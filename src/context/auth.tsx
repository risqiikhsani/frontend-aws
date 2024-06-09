"use client";
import api from "@/lib/axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserType } from "@/types/types";
import queryString from 'query-string';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";




export interface IAuthContext {
  // handleLoginSuccess: (data: any) => void;
  logoutUser: () => void;
  user: UserType;
  fetchData: () => void;
}

const authContextDefaultValues: IAuthContext = {
  // handleLoginSuccess: (data: any) => {},
  logoutUser: () => {},
  fetchData: () => {},
  user: {
    id: "",
    name: "",
  },
};

export const AuthContext = createContext<IAuthContext>(
  authContextDefaultValues
);

interface Props {
  children: ReactNode;
}

export function AuthHandler({ children }: Props) {
  const [user, setUser] = useState(authContextDefaultValues.user);
  const [loading, setLoading] = useState(true);


  // const dispatch = useAppDispatch();
  const router = useRouter();

  const fetchUserData = async (): Promise<boolean> => {
    try {
      // get user
      const response = await api.get("my-profile");
      const data: UserType = response.data;
      console.log(data)
      setUser(data);
      return true;
    } catch (error) {
      toast.error("Error fetching user data");
      console.error("Error:", error);
      return false;
    }
  };

  const logoutUser = () => {
    Cookies.remove("accesstoken");
    setUser(authContextDefaultValues.user);
    toast.success("Successfully Logout");
    return router.refresh();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const userDataSuccess = await fetchUserData();
  
      if (userDataSuccess) {
        toast.success("Successfully fetched user data");
        setLoading(false);
        return router.push("/");
      } else {
        toast.error("Error fetching user data ");
        const accessToken = Cookies.get("accesstoken");
        if (accessToken) {
          Cookies.remove("accesstoken");
          return router.push("/");
        }
      }
    } catch (error) {
      toast.error("An error occurred while fetching data");
      console.error("Error:", error);
    } finally {
      setLoading(false); // Ensure setLoading(false) is called in all cases
    }
  };

  
  // const handleLoginSuccess = async (callbackUrl: string) => {
  //   try {
  //     const parsedHash: any = parseHashParams(callbackUrl);
  //     const { id_token, access_token, expires_in } = parsedHash;
  
  //     if (access_token & id_token & expires_in) {
  //       Cookies.set('accesstoken', access_token, { expires: expires_in });
  //       // api.defaults.headers.Authorization = `Bearer ${access_token}`
  //     }
  
  //     await fetchData();
  //   } catch (error) {
  //     console.error('Error handling login success:', error);
  //   }
  // };
  
  // Helper function to parse the URL hash parameters
//   const parseHashParams = (url: string) => {
//     if (url) {
//         const parsedUrl = new URL(url);
//         const hash = parsedUrl.hash.slice(1); // Remove the leading '#'
//         return queryString.parse(hash);
//     }
//     return {};
// };

  const value = {
    // handleLoginSuccess,
    logoutUser,
    user,
    fetchData,
  };

  useEffect(() => {
    console.log(user);
    fetchData();
  }, []);


  return (
    <>
      <AuthContext.Provider value={value}>
        <div className="relative">
          {loading ? (
            <div className="absolute flex items-center justify-center w-full ">
              {/* Your CarLoader component */}
              <p>Loading....</p>
            </div>
          ) : children}

        </div>
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}