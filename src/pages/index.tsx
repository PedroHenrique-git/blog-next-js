import type { NextPage } from 'next';
import { useContext } from 'react';
import { UserContext } from '../providers/nameProvider';

const Home: NextPage = () => {
  const { user, setUser } = useContext(UserContext);
  setUser('Luiz');

  return <h1>{user}</h1>;
};

export default Home;
