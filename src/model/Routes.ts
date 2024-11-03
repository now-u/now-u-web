export interface NamedRoute {
  to: string;
  text: string;
}

export const homeRoute: NamedRoute =  { text: "Home", to: "/" }
export const causesRoute: NamedRoute = { text: "Causes", to: "/causes" }
export const aboutRoute: NamedRoute = { text: "About Us", to: "/about" }
export const blogRoute: NamedRoute = { text: "Blog", to: "/blog" }
export const getInTouchRoute: NamedRoute = { text: "Get In Touch", to: "/get-in-touch" }
export const partnershipRoute: NamedRoute = { text: "Partnership", to: "/charity-partnership" }
export const pressRoute: NamedRoute = { text: "Press", to: "/press" }
export const cookieRoute: NamedRoute = { text: "Cookie Notice", to: "/info/cookie-policy" }
export const privacyNoticeRoute: NamedRoute = { text: "Privacy Notice", to: "/info/privacy-notice" }
export const termsRoute: NamedRoute = { text: "Terms and Conditions for Users", to: "/info/terms-and-conditions-for-users" }

export const navigationRoutes = [
  homeRoute, causesRoute, aboutRoute, partnershipRoute, blogRoute, getInTouchRoute
]

export const mainRoutes = [
  homeRoute, causesRoute, blogRoute
]

export const legalAndInfoRoutes = [
  cookieRoute,
  privacyNoticeRoute,
  termsRoute
]

export const aboutRoutes = [
  aboutRoute,
  partnershipRoute,
  getInTouchRoute,
  pressRoute
]