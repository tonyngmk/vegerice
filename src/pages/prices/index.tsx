import { useSession , signIn, signOut } from 'next-auth/react';

export default function Prices() {

    return (
        <>
        <div className="flex flex-col justify-top items-center min-h-screen">
            <div className="py-16 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Prices</div>
            <AuthenticationCheck />
        </div>
        </>
    )
};

function AuthenticationCheck() {
    const { data : session } = useSession();


    return (
        <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={session ? () => void signOut() : () => void signIn()}
        >
        {session ? "Sign out" : "Sign in"}
        </button>
    );
}
