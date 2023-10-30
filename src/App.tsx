// import { useEffect, useState } from 'react';
// import './App.css';
// import { jwtDecode } from 'jwt-decode';

// function App() {
//   const [user, setUser] = useState({});

//   const handleCallbackResponse = (response) => {
//     console.log('encoded jwt token');
//     console.log(response.credential);
//     const userObject = jwtDecode(response.credential);
//     console.log(userObject);
//     setUser(userObject);
//     console.log(user);
//   };

//   const handleSignOut = (e) => {
//     setUser({});
//   };

//   useEffect(() => {
//     //global google script index.html
//     google.accounts.id.initialize({
//       client_id:
//         '624161735389-la12a2tl4ins6jqgpe6dio79iu5d6cso.apps.googleusercontent.com',
//       callback: handleCallbackResponse,
//     });

//     google.accounts.id.renderButton(document.getElementById('signInDiv'), {
//       theme: 'outline',
//       size: 'large',
//     });
//   }, []);

//   return (
//     <>
//       <div>
//         <div id="signInDiv"></div>

//         <div>
//           <p>name : {user.name}</p>
//           <p>email : {user.email}</p>
//         </div>
//         <div>
//           <button onClick={handleSignOut}>logout</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { jwtDecode } from 'jwt-decode';

type User = {
  name: string;
  email: string;
};

function App() {
  const [user, setUser] = useState<User>({ name: '', email: '' });

  const handleCallbackResponse = (response: { credential: string }) => {
    console.log('encoded jwt token');
    console.log(response.credential);
    const userObject = jwtDecode(response.credential) as User;
    console.log(userObject);
    setUser(userObject);
    console.log(user);
  };

  const handleSignOut = (e: React.MouseEvent) => {
    setUser({ name: '', email: '' });
  };

  useEffect(() => {
    //global google script index.html
    google.accounts.id.initialize({
      client_id:
        '624161735389-la12a2tl4ins6jqgpe6dio79iu5d6cso.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <>
      <div>
        <div id="signInDiv"></div>

        <div>
          <p>name : {user.name}</p>
          <p>email : {user.email}</p>
        </div>
        <div>
          <button onClick={handleSignOut}>logout</button>
        </div>
      </div>
    </>
  );
}

export default App;
