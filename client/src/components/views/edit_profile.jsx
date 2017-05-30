import React, { Component } from "react";
import { Form, Dropdown, Button, Checkbox } from "semantic-ui-react";
import _ from 'underscore';

export default class EditProfile extends Component {
	constructor() {
		super();
		this.state = {
			first_name: null,
			last_name: null,
			height: null,
			weight: null,
			profile_visible: null,
			favorite_sports: [],

			sportOptions: [
				{ key: 'Badminton', value: 'Badminton', text: 'Badminton' },
				{ key: 'Baseball', value: 'Baseball', text: 'Baseball' },
				{ key: 'Basketball', value: 'Basketball', text: 'Basketball' },
				{ key: 'Bowling', value: 'Bowling', text: 'Bowling' },
				{ key: 'Boxing', value: 'Boxing', text: 'Boxing' },
				{ key: 'Cricket', value: 'Cricket', text: 'Cricket' },
				{ key: 'Football', value: 'Football', text: 'Football' },
				{ key: 'Golf', value: 'Golf', text: 'Golf' },
				{ key: 'Gymnastics', value: 'Gymnastics', text: 'Gymnastics' },
				{ key: 'Ice Hockey', value: 'Ice Hockey', text: 'Ice Hockey' },
				{ key: 'Rugby', value: 'Rugby', text: 'Rugby' },
				{ key: 'Skiing', value: 'Skiing', text: 'Skiing' },
				{ key: 'Soccer', value: 'Soccer', text: 'Soccer' },
				{ key: 'Swimming', value: 'Swimming', text: 'Swimming' },
				{ key: 'Tennis', value: 'Tennis', text: 'Tennis' },
				{ key: 'Volleyball', value: 'Volleyball', text: 'Volleyball' },
				{ key: 'Wrestling', value: 'Wrestling', text: 'Wrestling' }
			]
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDropdownChange = this.handleDropdownChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleCheckboxChange(event, checkboxObj) {
		const profileVisible = checkboxObj.checked;

		this.setState({
			profile_visible: profileVisible
		});
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value
		});
	}

	handleDropdownChange(event, dropdownObj) {
		const currentSportsArr = dropdownObj.value;

		this.setState({
			favorite_sports: currentSportsArr
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const params = _.pick(this.state, 'first_name', 'last_name', 'height', 'weight', 'profile_visible', 'favorite_sports');

		params['id'] = 1;

		const postProfileReq = new Request('api/users/1', {
			method: 'PUT',
			headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  	},
			body: JSON.stringify(params)
		});

		window.fetch(postProfileReq)
			  .then(res => res.json())
			  .then(res => console.log(res));
	}

	render() {
		return (
	      <div id="edit-profile">
	      	<h1>My Profile</h1>
	        <Form onSubmit={this.handleSubmit}>
	        	<Form.Field>
	        		<label>First Name</label>
	        		<input 	name="first_name"
	        				placeholder="First Name"
	        				onChange={this.handleInputChange}
	        		 />
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Last Name</label>
	        		<input
	        				name="last_name"
	        				placeholder="Last Name"
	        				onChange={this.handleInputChange}
	        		/>
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Height</label>
	        		<input 
	        				name="height"
	        				placeholder="Height (in inches)"
	        				onChange={this.handleInputChange}
	        		/>
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Weight</label>
	        		<input 
	        				name="weight"
	        				placeholder="Weight (in pounds)"
	        				onChange={this.handleInputChange}
	        		/>
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Visible?</label>
	        		<Checkbox 
	        				name="profile_visible"
	        				label="Make my profile visible"
	        				onChange={this.handleCheckboxChange}
	        				toggle
	        		/>
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Favorite Sports</label>
	        		<Dropdown 
	        				name="favorite_sports"
	        				placeholder='Favorite Sports' fluid multiple search selection 
	        				options={this.state.sportOptions}
	        				onChange={this.handleDropdownChange}
	        		/>
	        	</Form.Field>
	        	<Button type="submit">Submit</Button>
	        </Form>
	      </div>
	    );
	}
}