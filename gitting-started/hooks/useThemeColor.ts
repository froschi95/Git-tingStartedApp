import { useColorScheme } from 'react-native';

type ColorSchemeType = {
  light?: string;
  dark?: string;
};

export type ThemeColors = {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  
  primary: string;
  secondary: string;
  
  success: string;
  warning: string;
  error: string;
  
  buttonBackground: string;
  buttonText: string;
  
  tabIconDefault: string;
  tabIconSelected: string;
};

export const Colors = {
  light: {

    background: '#FFFFFF',
    surface: '#F7F7F9',
    text: '#0A0A0B',
    textSecondary: '#71717A',
    
    primary: '#4F46E5',
    secondary: '#8B5CF6',
    
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    
    buttonBackground: '#4F46E5',
    buttonText: '#FFFFFF',
    
    tabIconDefault: '#71717A',
    tabIconSelected: '#4F46E5',
  },
  dark: {
    background: '#18181B',
    surface: '#27272A',
    text: '#FAFAFA',
    textSecondary: '#A1A1AA',
    
    primary: '#6366F1',
    secondary: '#A78BFA',
    
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    
    buttonBackground: '#6366F1',
    buttonText: '#FFFFFF',
    
    tabIconDefault: '#71717A',
    tabIconSelected: '#6366F1',
  },
};

export function useThemeColor(
  props: ColorSchemeType,
  colorName: keyof ThemeColors
): string {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  
  return Colors[theme][colorName];
}