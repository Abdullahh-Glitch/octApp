import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

export default function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <KeyboardProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </KeyboardProvider>
    </QueryClientProvider>
  );
}
