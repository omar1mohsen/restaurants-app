import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../infrastructure/theme';
import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsContextProvider } from '@/services/resturants/restaurants.context';

export default function RootLayout() {
   const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
     <ThemeProvider theme={theme}>    
      <RestaurantsContextProvider>
        <Stack  screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }}  />
        </Stack>
        <ExpoStatusBar style="auto" key={"sts"} />
      </RestaurantsContextProvider> 
    </ThemeProvider>
  );
}
