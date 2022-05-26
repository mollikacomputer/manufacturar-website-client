import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseApp from '../firebase.init';

const auth = getAuth(firebaseApp);

const useCustomUser = () => {
    const [user, loading, error] = useAuthState(auth);
    return [user];
  };
  
  export default useCustomUser;