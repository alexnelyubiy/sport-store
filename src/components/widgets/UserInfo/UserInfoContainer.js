import {
  compose, setDisplayName, withState, withHandlers, setPropTypes, mapProps
} from 'recompose';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import { getUser } from 'selectors';
import {
  addUser
} from 'actions';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  setPropTypes({
  }),
  connect(
    state => ({
      userInfo: getUser(state)
    }),
    dispatch => bindActionCreators(
      {
        dispatchAddUser: addUser
      },
      dispatch,
    ),
  ),
  withState('user', 'setUser', {firstName: "", lastName: "", city: "", postcode: "", phone: ""}),
  withHandlers({
    handleAddProducts: ({user, dispatchAddUser}) => () => {
      dispatchAddUser(user)
    },
    handleSetUser: ({ setUser, user }) => (e) => {
      const { name, value } = e.target;
      setUser({...user, [name]: value})
  },
  }),
  mapProps(props => ({ 
    ...props,
    userInfo: props.userInfo.toJS(),
   })),
);

export default enhance(UserInfo);
