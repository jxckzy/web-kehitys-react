import {createContext, useCallback, useRef, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const postLogin = useAuthentication();
  const {getUserByToken} = useUser();
  const location = useLocation();
  const locationRef = useRef(location.pathname);
  const navigate = useNavigate();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      const userInfo = await postLogin(credentials);
      console.log('context handleLogin', userInfo);
      localStorage.setItem('token', userInfo.token);
      setUser(userInfo.user);
      setIsLoading(false);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      setIsLoading(false);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const currentUser = await getUserByToken(token);
        setUser(currentUser);
        navigate(locationRef.current, {replace: true});
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  }, [getUserByToken, navigate]);

  return (
    <UserContext.Provider
      value={{user, isLoading, handleAutoLogin, handleLogout, handleLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export {UserProvider, UserContext};
