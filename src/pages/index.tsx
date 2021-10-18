import type { NextPage } from 'next';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const Home: NextPage = () => {
  const { user, setUser } = useContext(UserContext);
  setUser('Paulo');

  return <h1>{user}</h1>;
};

export default Home;
