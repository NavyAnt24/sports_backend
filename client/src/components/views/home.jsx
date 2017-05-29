import React, { Component } from "react";
import { Container, Header, Icon, Divider } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
      	<Divider hidden />
      	<Container text>
      		<Header as='h2' icon textAlign='center'>
	      		<Icon name='world' circular />
	      		<Header.Content>
		          Welcome to Sports World!
		        </Header.Content>
	        </Header>
	        <Divider hidden />
	        <Container>
	        	<Header as='h3'>Click on a link at the top...</Header>
	        </Container>
      	</Container>
      </div>
    );
  }
}