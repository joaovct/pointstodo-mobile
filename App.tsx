import { StatusBar } from 'expo-status-bar'
import { Home } from './src/screens/Home'
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  const [loaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Home />
      <StatusBar style="auto"/>
    </>
  )
}

