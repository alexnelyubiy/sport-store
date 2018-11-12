import {
  compose, setDisplayName, withState, withHandlers, setPropTypes, mapProps
} from 'recompose';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import {
  addUser
} from 'actions';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  setPropTypes({
  }),
  connect(
    null,
    dispatch => bindActionCreators(
      {
        dispatchAddUser: addUser
      },
      dispatch,
    ),
  ),
  withState('user', 'setUser', {firstName: "", lastName: "", city: "", postcode: "", phone: ""}),
  withHandlers({
    handleAddProducts: (props) => () => {
      dispatchAddUser({product});
    },
    handleSetUser: ({ setUser, user }) => (e) => {
      const { name, value } = e.target;
      setUser({...user, [name]: value})
  },
  }),
  mapProps(props => ({ ...props })),
);

export default enhance(UserInfo);
