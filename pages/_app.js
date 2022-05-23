import GlobalStyle from "../src/theme/GlobalStyle";

// It's a middleware, it will act between the components and the pages
function MyApp({Component, pageProps}){
    return(
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )

}
export default MyApp;