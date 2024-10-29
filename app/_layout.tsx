import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import StoriesScreen from './(tabs)/stories';
import ReelScreen from '@/components/ReelScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
  <Stack.Screen name="MatchDetails" />
        <Stack.Screen name="Reel"  options={{ headerShown: false }} />
        <Stack.Screen name="FixtureDetails"  options={{ headerShown: false }} />
        <Stack.Screen name="OverviewScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="MatchesScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="TeamsScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="SeriesStatsScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="NewsScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="InfoScreen"  options={{ headerShown: false }} />
        <Stack.Screen name="Venues"  options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
