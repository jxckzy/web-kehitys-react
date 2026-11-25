import {useUserContext} from '../hooks/contextHooks';

const Logout = () => {
  const {handleLogout} = useUserContext();

  return (
    <button type="button" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default Logout;
