import React, { Component } from "react";
import { Form, Dropdown, Button, Checkbox } from "semantic-ui-react";

export default class EditProfile extends Component {
	constructor() {
		super();
		this.state = {
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
	}

	render() {
		return (
	      <div id="edit-profile">
	      	<h1>My Profile</h1>
	        <Form>
	        	<Form.Field>
	        		<label>First Name</label>
	        		<input placeholder="First Name" />
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Last Name</label>
	        		<input placeholder="Last Name" />
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Height</label>
	        		<input placeholder="Height (in inches)" />
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Weight</label>
	        		<input placeholder="Weight (in pounds)" />
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Visible?</label>
	        		<Checkbox label="Make my profile visible" />
	        	</Form.Field>
	        	<Form.Field>
	        		<label>Favorite Sports</label>
	        		<Dropdown placeholder='Favorite Sports' fluid multiple search selection options={this.state.sportOptions} />
	        	</Form.Field>
	        	<Button type="submit">Submit</Button>
	        </Form>
	      </div>
	    );
	}
}