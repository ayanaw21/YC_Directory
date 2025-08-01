import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    dangerouslyAllowSVG : true,
    remotePatterns :[{
      protocol : 'https',
      hostname:'*'
    },]
  },
  experimental : {
    ppr : "incremental",
    serverActions : {},
  },
  devIndicators : {
    appIsrStatus:true,
    buildActivity : true,
    buildActivityPosition:"bottom-right"
  }
};

export default nextConfig;

