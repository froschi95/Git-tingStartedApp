import { SafeAreaView, ScrollView, StyleSheet, Linking, useColorScheme } from 'react-native';
import { ThemedView, ThemedText } from './components/Themed';
import { Colors } from './hooks/useThemeColor';

interface Resource {
  title: string;
  url: string;
}

const resources: Resource[] = [
  {
    title: 'GitHub Repository',
    url: 'https://github.com/froschi95/Git-tingStartedApp',
  },
  {
    title: 'React Native Developers',
    url: 'https://hng.tech/hire/react-native-developers',
  },
];

const Index: React.FC = () => {

  const handlePress = async (url: string): Promise<void> => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error(`Don't know how to open URL: ${url}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <ThemedText style={styles.title}>
            HNG Mobile App
          </ThemedText>

          <ThemedText 
            style={styles.subtitle}
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
          >
            Hire the best Mobile developers
          </ThemedText>

          {resources.map((resource, index) => (
            <ThemedView
              key={index}
              style={styles.button}
              lightColor={Colors.light.buttonBackground}
              darkColor={Colors.dark.buttonBackground}
            >
              <ThemedText
                style={styles.buttonText}
                lightColor={Colors.light.buttonText}
                darkColor={Colors.dark.buttonText}
                onPress={() => handlePress(resource.url)}
              >
                {resource.title}
              </ThemedText>
            </ThemedView>
          ))}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 48,
    textAlign: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Index;