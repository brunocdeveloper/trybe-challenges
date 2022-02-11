import React, { useEffect, useState } from 'react';
import api from './services/api';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  
  useEffect(() => {
    api.get<IUser[]>('/').then(response => {
      setUsers(response.data);
    })
  }, []);

  return (
    <div className="App">
      { users.map(user => (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
        ) }
    </div>
  );
}

export default App;
