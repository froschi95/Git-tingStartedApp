// src/hooks/useThemeColor.ts
import { useColorScheme } from 'react-native';

type ColorSchemeType = {
  light?: string;
  dark?: string;
};

export type ThemeColors = {
  // Base colors
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  
  // Brand colors
  primary: string;
  secondary: string;
  
  // Semantic colors
  success: string;
  warning: string;
  error: string;
  
  // Interactive elements
  buttonBackground: string;
  buttonText: string;
  
  // System
  tabIconDefault: string;
  tabIconSelected: string;
};

export const Colors = {
  light: {
    // Base
    background: '#FFFFFF',
    surface: '#F7F7F9',
    text: '#0A0A0B',
    textSecondary: '#71717A',
    
    // Brand - Using a modern indigo as primary
    primary: '#4F46E5',  // Indigo 600
    secondary: '#8B5CF6', // Violet 500
    
    // Semantic
    success: '#10B981', // Emerald 500
    warning: '#F59E0B', // Amber 500
    error: '#EF4444',   // Red 500
    
    // Interactive
    buttonBackground: '#4F46E5',
    buttonText: '#FFFFFF',
    
    // System
    tabIconDefault: '#71717A',
    tabIconSelected: '#4F46E5',
  },
  dark: {
    // Base
    background: '#18181B',  // Zinc 900
    surface: '#27272A',     // Zinc 800
    text: '#FAFAFA',        // Zinc 50
    textSecondary: '#A1A1AA', // Zinc 400
    
    // Brand
    primary: '#6366F1',    // Indigo 500
    secondary: '#A78BFA',  // Violet 400
    
    // Semantic
    success: '#34D399',    // Emerald 400
    warning: '#FBBF24',    // Amber 400
    error: '#F87171',      // Red 400
    
    // Interactive
    buttonBackground: '#6366F1',
    buttonText: '#FFFFFF',
    
    // System
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