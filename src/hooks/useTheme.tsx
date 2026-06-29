import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const useTheme = () => {
    const theme = createTheme({
        palette: {             // chaning the default design settings
            primary: purple
        },
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'contained'
                }
            }
        }
    })
    return theme;
}

export { useTheme };