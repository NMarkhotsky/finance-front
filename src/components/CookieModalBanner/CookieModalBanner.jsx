import CookieConsent from "react-cookie-consent";

export const CookieModalBanner = () => {

    return (
        <CookieConsent
            debug={true}
            acceptOnScroll={true}
            acceptOnScrollPercentage={50}
            onAccept={(byScroll) => {
                alert(`consent given. \n\n By scrolling? ${byScroll}`);
            }}
        >This website uses cookies to enhance the user experience.</CookieConsent>
    )
}