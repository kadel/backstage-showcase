import { createUnifiedTheme, themes } from '@backstage/theme';
import { components } from './componentOverrides';
import { fontFamily } from './consts';
import { pageTheme } from './pageTheme';

export const customLightTheme = createUnifiedTheme({
  fontFamily,
  palette: {
    ...themes.light.getTheme('v5')?.palette,
    navigation: {
      background: '#222427',
      indicator: '#009596',
      color: '#ffffff',
      selectedColor: '#ffffff',
      navItem: {
        hoverBackground: '#4f5255',
      },
    },
  },
  defaultPageTheme: 'home',
  pageTheme,
  components,
});