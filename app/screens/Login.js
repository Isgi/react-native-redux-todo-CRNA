import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Container,
  Text,
  Form,
  Item,
  Input,
  H1
} from 'native-base';
import { connect } from 'react-redux';

class Login extends Component {

  handleLogin = () => {
    // action login api
    // -----
    // end action login api

    const resetToTodos = NavigationActions.reset({
      index: 0,
      actions:[
        NavigationActions.navigate({routeName: 'Todos'})
      ]
    });
    this.props.dispatch(resetToTodos);
  }

  render() {
    return (
      <Container style={styles.container} >
        <H1 style={styles.title}>Login Here</H1>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item>
            <Input placeholder="Password" secureTextEntry={true}/>
          </Item>
          <Button
            onPress={this.handleLogin}
            title="Login" />
        </Form>
      </Container>
    )
  }
}

export default connect()(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    margin: 20,
    alignSelf: 'center'
  }
})