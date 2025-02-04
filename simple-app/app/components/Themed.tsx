// src/components/Themed.tsx
import { 
    Text, 
    View, 
    TouchableOpacity,
    type TextProps, 
    type ViewProps,
    type TouchableOpacityProps
  } from 'react-native';
  import { useThemeColor } from '../hooks/useThemeColor';
  
  export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
  };
  
  export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
  };
  
  export type ThemedTouchableProps = TouchableOpacityProps & {
    lightColor?: string;
    darkColor?: string;
  };
  
  export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  
    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
  }
  
  export function ThemedText({ style, lightColor, darkColor, ...otherProps }: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
    return <Text style={[{ color }, style]} {...otherProps} />;
  }
  
  export function ThemedTouchableOpacity({ 
    style, 
    lightColor, 
    darkColor, 
    activeOpacity = 0.7,
    ...otherProps 
  }: ThemedTouchableProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  
    return (
      <TouchableOpacity 
        style={[{ backgroundColor }, style]} 
        activeOpacity={activeOpacity}
        {...otherProps} 
      />
    );
  }