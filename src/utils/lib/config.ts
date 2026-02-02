import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "wagmi/chains";

const projectId = import.meta.env.VITE_PROJECT_ID;

export const config = getDefaultConfig({
  appName: "wmt",
  projectId,
  chains: [mainnet],
  ssr: true,
});