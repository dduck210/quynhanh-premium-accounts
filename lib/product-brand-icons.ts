import {
  siGoogle, siGooglegemini, siPerplexity, siX,
  siSpotify, siApplemusic, siPicsart, siVsco, siGrammarly,
  siUdemy, siCoursera, siDuolingo, siCodecademy, siNetflix,
  siAutodesk, siZoom, siNotion, siWondersharefilmora, siDiscord,
  siIcloud, siTinder, siNordvpn, siExpressvpn, siQuizlet,
} from "simple-icons";

export interface BrandIcon {
  path: string;
  hex: string;
  title: string;
}

/** Map product ID → simple-icons SVG data (only for products without a better PNG) */
export const BRAND_ICON_MAP: Record<string, BrandIcon> = {
  "google-ai-ultra":   siGoogle,
  "gemini-pro":        siGooglegemini,
  "perplexity-ai":     siPerplexity,
  "super-grok":        siX,
  "spotify-premium":   siSpotify,
  "apple-music":       siApplemusic,
  "picsart":           siPicsart,
  "vsco-x":            siVsco,
  "grammarly-premium": siGrammarly,
  "udemy":             siUdemy,
  "coursera-plus":     siCoursera,
  "duolingo-super":    siDuolingo,
  "codecademy-pro":    siCodecademy,
  "netflix-premium":   siNetflix,
  "autodesk":          siAutodesk,
  "zoom-pro":          siZoom,
  "notion-plus":       siNotion,
  "filmora":           siWondersharefilmora,
  "discord-nitro":     siDiscord,
  "icloud-iphone":     siIcloud,
  "tinder":            siTinder,
  "nordvpn":           siNordvpn,
  "expressvpn":        siExpressvpn,
  "quizlet-plus":      siQuizlet,
};
