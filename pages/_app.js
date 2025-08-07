import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import JupiterWidget from '../components/JupiterWidget';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <JupiterWidget />
    </ThemeProvider>
  );
}

export default MyApp;
