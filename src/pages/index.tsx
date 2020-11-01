import { FunctionComponent } from "react";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../styles/Home.module.css";

const App: FunctionComponent = () => {
    const [session] = useSession();

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>Create Next App</h2>
            {!session && <>
            Not signed in!! <br/>
                <button onClick={signIn}>Sign in</button>
            </>}
            {session && <>
            Signed in as {session.user.email} <br/>
                <button onClick={signOut}>Sign out</button>
            </>}
        </div>
    );
};

export default App;