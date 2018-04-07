import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Todos from '../screens/Todos';
import TodoDetail from '../screens/TodoDetail';
import TodoCreate from '../screens/TodoCreate';

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Todos: {
    screen: Todos,
    navigationOptions: {
      title: 'List'
    }
  },
  TodoDetail: {
    screen: TodoDetail,
    navigationOptions: {
      title: 'Detail'
    }
  },
  TodoCreate: {
    screen: TodoCreate,
    navigationOptions: {
      title: 'Create'
    }
  }
})

export default RootNavigator;