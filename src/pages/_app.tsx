import "../../styles/globals.scss";
import { CaseContextProvider } from "../hooks/useCases";

function MyApp({ Component, pageProps }) {
  return (
    <CaseContextProvider>
      <Component {...pageProps} />
    </CaseContextProvider>
  );
}

export default MyApp;
