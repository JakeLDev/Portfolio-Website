import { createGlobalStyle } from "styled-components"

export const darkTheme = {
   body: "#141416",
   fontColor: "rgb(226, 226, 226)",
   secondaryFontColor: "rgb(226, 226, 226)",
   pageColor: "rgba(20, 20, 22, .9)",
   navColor: "rgba(34, 34, 34, .80)",
   navHoverColor: "rgba(179, 179, 179, 1)",
   navHoverFontColor: "black",
}

export const synthTheme = {
    body: "#2E2157",
    fontColor: "#93e3e6",
    secondaryFontColor: "rgba(246, 1, 157, 1)",
    pageColor: "rgba(45, 32, 84, .8)",
    navColor: "rgba(45, 226, 230, .8)",
    navHoverColor: "rgba(246, 1, 157, 0.95)",
    navHoverFontColor: "rgba(84, 19, 136, 1)",
    footerColor: "rgba(38, 20, 71, 1)",
    // particleColor: "rgba(45, 32, 84, 1)",
    particleColor: "red",
}

export const GlobalStyles = createGlobalStyle` 
    body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
    }
    
    div.page{
        background: ${props => props.theme.pageColor};
    }

    a.button:hover {
        color: ${props => props.theme.navHoverFontColor};
        background: ${props => props.theme.navHoverColor};
    }

    footer {
        background: ${props => props.theme.footerColor};
    }

    .link-photos{
        fill: ${props => props.theme.fontColor};
    }

    .contact-icon{
        color: ${props => props.theme.fontColor};
    }

    h1, h2, h3 {
        color: ${props => props.theme.secondaryFontColor};
    }

    .banner-title{
        color: ${props => props.theme.fontColor};
    }

    .banner-title::after{
        background: ${props => props.theme.fontColor};
    }
`
export default GlobalStyles;