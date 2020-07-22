import { createMuiTheme } from '@material-ui/core/styles';
import {amber, lightBlue} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary:lightBlue,
        secondary:amber,
        type: 'dark',
    },
});

export default theme
