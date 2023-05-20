import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SigninForm from './SigninForm';


export default class Signup extends Component {
	render() {
		const {UserStore} = this.props
		return (
			<React.Fragment>
				<Header>
					<Body>
						<Title>Sign In</Title>
					</Body>
				</Header>
				<SigninForm />
			</React.Fragment>
		);
	}
}