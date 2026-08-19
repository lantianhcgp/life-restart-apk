import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.vickscarlet.remake',
  appName: '人生重开模拟器',
  webDir: 'apps/web/dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      androidScaleType: 'CENTER_CROP',
      backgroundColor: '#000000',
    },
  },
};

export default config;
