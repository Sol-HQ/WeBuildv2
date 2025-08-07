import JupiterWidget from '../components/JupiterWidget';
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <JupiterWidget />
    </ThemeProvider>
  );
}

export default MyApp;

