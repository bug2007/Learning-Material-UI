import { CssBaseline, ThemeProvider } from '@mui/material'
import type { ReactNode } from 'react'
import { useTheme } from '../hooks/useTheme'

type ProvidersProps = {
    children: ReactNode;   // ReactNode is the safest, most comprehensive type in React for representing elements. It represents anything that can be rendered on a screen: a primitive string, a number, a single JSX element, or an entire array of child components.
}

// a functinal component
const Providers = ({ children }: ProvidersProps) => {
    const theme = useTheme();
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>)
}

export { Providers }