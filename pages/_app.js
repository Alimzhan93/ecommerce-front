// import '@/styles/globals.css'

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Montserrat:wght@700&family=Roboto&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
body{
  padding: 0;
  margin: 0;
  font-family: 'Roboto',sans-serif;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
