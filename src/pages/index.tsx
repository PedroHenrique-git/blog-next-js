import type { NextPage } from 'next';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const Home: NextPage = () => {
  const { user, setUser } = useContext(UserContext);
  setUser('Paulo');

  return (
    <h1
      style={{
        color: 'white',
      }}
    >
      {user}
    </h1>
  );
};

export default Home;
