import { createContext, useMemo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../hooks/useStore';
import { useCookies } from '../../hooks/useCookies';
import { SESSION_COOKIE_NAME } from '../../helpers/constants.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();
  const [cookieValue, setCookieValue] = useCookies(SESSION_COOKIE_NAME, null);
  const { setSession, setConfiguration, setSystem, setCustomization } =
    useStore();

  const login = async (
    username,
    sessionid,
    configuration,
    system,
    customization
  ) => {
    setUser(username);
    setCookieValue(sessionid);
    setConfiguration(configuration);
    setSystem(system);
    setCustomization(customization);
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    setSession(null);
    setCookieValue(null);
    setConfiguration(null);
    setSystem(null);
    setCustomization(null);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
