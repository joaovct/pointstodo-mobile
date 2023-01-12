import { StatusBar } from 'expo-status-bar'
import { Home } from './src/screens/Home'
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function App() {
  const [loaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_600SemiBold });

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

