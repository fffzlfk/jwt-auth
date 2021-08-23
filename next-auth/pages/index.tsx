import { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'

export default function Home() {
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (
      async () => {
        try {
          const resp = await fetch("http://localhost:8000/api/user", {
            credentials: 'include',
          })
          if (resp.status !== 200) {
            throw new Error(resp.status.toString());
          }
          const content = await resp.json();

          setMessage(`Hi ${content.name}`);
          setAuth(true);
        } catch (e) {
          console.log(e);
          setMessage("You are not logged in");
          setAuth(false);
        }
      }
    )();
  });

  return (
    <Layout auth={auth}>
      {message}
    </Layout>
  )
}
