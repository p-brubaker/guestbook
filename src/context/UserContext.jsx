import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser hook must be called within a UseProvider');
  }

  return context;
}

export { useUser, UserProvider };
