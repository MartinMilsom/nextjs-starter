import { FunctionComponent  } from "react";
import "../styles/globals.css";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;
