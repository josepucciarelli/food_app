import {SplashScreen, Stack} from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import './globals.css';


export default function RootLayout() {
  const [fontsLoaded , error] = useFonts( {
    "QuickSand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "Quicksand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
    "Quicksand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "Quicksand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "Quicksand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
  });

  useEffect(() => {
  if (error) throw error;
  if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
