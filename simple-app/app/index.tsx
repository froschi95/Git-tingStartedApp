import { SafeAreaView, ScrollView, StyleSheet, Linking, useColorScheme, View, Image } from 'react-native';
import { ThemedView, ThemedText } from './components/Themed';
import { Colors } from './hooks/useThemeColor';

interface Resource {
  title: string;
  url: string;
  icon: number;
}

const resources: Resource[] = [
  {
    title: 'GitHub Repository',
    url: 'https://github.com/froschi95/Git-tingStartedApp',
    icon: require('../assets/images/github-icon.png'),
  },
  {
    title: 'React Native Developers',
    url: 'https://hng.tech/hire/react-native-developers',
    icon: require('../assets/images/hng-tech-logo.png'),
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
          <ThemedView
            style={styles.innerContainer}>
          {resources.map((resource, index) => (
            <ThemedView
              key={index}
              style={styles.button}
              lightColor={Colors.light.buttonBackground}
              darkColor={Colors.dark.buttonBackground}
            >
              <Image 
                source={resource.icon}
                style={styles.iconContainer}
              />
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
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    // marginLeft: 20,
    gap: 20,
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)',
    elevation: 5,
    width: '86%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'left',
  },
  iconContainer: {
    height: 40,
    width: 40,
    // marginRight: 12,
    resizeMode: 'contain',
  },
});

export default Index;