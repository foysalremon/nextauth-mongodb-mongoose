import { useRouter } from 'next/router';
import { getSession, useSession, signIn, signOut } from 'next-auth/react';

const Index = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  return (
    <div>
      {status !== 'authenticated' ? (
        <>
          <p>Your are not signed in</p>
          <button onClick={() => push('/admin')}>Try going admin</button>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      ) : (
        <>
          <p>Sign in as {session.user.email}</p>
          <button onClick={() => push('/admin')}>Try going admin</button>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
}

export default Index;
