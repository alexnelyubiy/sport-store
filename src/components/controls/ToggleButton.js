import { withStyle, withToggle } from 'components/HOCs';
import Button from './Button';

const displayName = 'ToggleButton';

const ToggleButton = withStyle(Button, (theme, { toggled }) => ({
  borderStyle: toggled ? theme.styleToggled : theme.styleDefault,
}));

ToggleButton.displayName = displayName;

export default withToggle(ToggleButton);
