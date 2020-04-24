/** @jsx jsx */
import {
  jsx,
  ThemeProvider,
} from 'theme-ui'
import theme from './index'
import components from './components'
import * as presets from '@theme-ui/presets'
import useThemeUiConfig from './hooks/configOptions'


const ProvidePreset = () => {
  const themeUiConfig = useThemeUiConfig()
  const {themeUiPreset} = themeUiConfig
  const themeWrapper = presets[themeUiPreset]
  return (
    themeWrapper
  )
}

export const wrapRootElement = ({ element }) => {
return (
  <ThemeProvider theme={ProvidePreset} components={components}>
  {element}
  </ThemeProvider>
)
}

