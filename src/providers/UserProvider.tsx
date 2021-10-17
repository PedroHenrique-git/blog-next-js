import React, { useState } from 'react';

interface UserProvider {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = React.createContext<UserProvider>({
  user: 'Pedro',
  setUser: () => '',
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<string>('');
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
