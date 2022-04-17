import { useRouter } from 'next/router';
import { getSession, useSession, signOut } from 'next-auth/react';

const Admin = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  return (
    <>
      <p>
        This is admin page. Not accessible without signin. Signin as{' '}
        {session.user.email}
      </p>
      <button onClick={() => push('/')}>Try going home</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `/api/auth/signin`,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
export default Admin;
