import localFont from "next/font/local";

export const fontSans = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlainVariable.woff2",
  variable: "--font-ABCCameraPlainVariable",
  display: "swap",
  weight: "100 900",
});

// ABC Camera Plain - Static weights mapped to their exact file names
export const cameraPlainBlack = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-Black.woff2",
  variable: "--font-ABCCameraPlain-Black",
  display: "swap",
});

export const cameraPlainBlackItalic = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-BlackItalic.woff2",
  variable: "--font-ABCCameraPlain-BlackItalic",
  display: "swap",
});

export const cameraPlainBold = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-Bold.woff2",
  variable: "--font-ABCCameraPlain-Bold",
  display: "swap",
});

export const cameraPlainBoldItalic = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-BoldItalic.woff2",
  variable: "--font-ABCCameraPlain-BoldItalic",
  display: "swap",
});

export const cameraPlainHeavy = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-Heavy.woff2",
  variable: "--font-ABCCameraPlain-Heavy",
  display: "swap",
});

export const cameraPlainHeavyItalic = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-HeavyItalic.woff2",
  variable: "--font-ABCCameraPlain-HeavyItalic",
  display: "swap",
});

export const cameraPlainMedium = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-Medium.woff2",
  variable: "--font-ABCCameraPlain-Medium",
  display: "swap",
});

export const cameraPlainMediumItalic = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-MediumItalic.woff2",
  variable: "--font-ABCCameraPlain-MediumItalic",
  display: "swap",
});

export const cameraPlainRegular = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-Regular.woff2",
  variable: "--font-ABCCameraPlain-Regular",
  display: "swap",
});

export const cameraPlainRegularItalic = localFont({
  src: "../../public/fonts/camera-plain/ABCCameraPlain-RegularItalic.woff2",
  variable: "--font-ABCCameraPlain-RegularItalic",
  display: "swap",
});

// Flecha S - Static weights
export const flechaSLight = localFont({
  src: "../../public/fonts/flecha-s/FlechaS-Light.woff2",
  variable: "--font-FlechaS-Light",
  display: "swap",
});

export const flechaSRegular = localFont({
  src: "../../public/fonts/flecha-s/FlechaS-Regular.woff2",
  variable: "--font-FlechaS-Regular",
  display: "swap",
});

export const fontVariables = [
  fontSans.variable,
  cameraPlainBlack.variable,
  cameraPlainBlackItalic.variable,
  cameraPlainBold.variable,
  cameraPlainBoldItalic.variable,
  cameraPlainHeavy.variable,
  cameraPlainHeavyItalic.variable,
  cameraPlainMedium.variable,
  cameraPlainMediumItalic.variable,
  cameraPlainRegular.variable,
  cameraPlainRegularItalic.variable,
  flechaSLight.variable,
  flechaSRegular.variable,
].join(" ");
