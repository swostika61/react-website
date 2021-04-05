import { createMuiTheme } from '@material-ui/core/styles';

const cyan = "#2d364c";
const orange = "#ff7800";

export default createMuiTheme({
    palette: {
        common: {
            cyan: `${cyan}`,
            orange: `${orange}`
        },
        primary: {
            main: `${cyan}`
        },
        secondary: {
            main: `${orange}`
        }
    },
    
});
