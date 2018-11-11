import { withError } from 'components/HOCs';

const displayName = 'BuggyControl';

function BuggyControl() {
  throw new Error('I crashed!');
}

BuggyControl.displayName = displayName;

export default withError(BuggyControl, () => {
  /* eslint-disable no-console */
  console.log('ERROR!');
});
