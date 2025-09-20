import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../infrastructure/theme';
import RestaurantScreen from '@/features/screens/restaurant.screen';


export default function Index() {
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
        <RestaurantScreen/>
        <ExpoStatusBar style="auto" key={"sts"} />
    </ThemeProvider>
  );
}
