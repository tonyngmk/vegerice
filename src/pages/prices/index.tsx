import { useSession , getSession, signIn, signOut } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

export default function Prices() {

    return (
        <>
            <h1>Prices page</h1>
            <AuthenticationCheck />
        </>
    )
};

function AuthenticationCheck() {
    const { data : session } = useSession();

    return (
        <button
            className="rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
            onClick={session ? () => void signOut() : () => void signIn()}
        >
        {session ? "Sign out" : "Sign in"}
        </button>
    );
}

// export async function getServerSideProps(context : GetServerSidePropsContext) {
//     const session = await getSession(context);
//     return {
//         props : {
//             session,
//             data : 'test' 
//         },
//     }
// }
