import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
	constructor() {
		super();
		this.state= {
			contacts: [
				{
					id: 1,
					name: 'John Doe',
					email: 'jdoe@gmail.com',
					phone: '555-555-5555'
				},
				{
					id: 2,
					name: 'Jennifer Ganenr',
					email: 'jganenr@gmail.com',
					phone: '555-555-2355'
				},
				{
					id: 3,
					name: 'Josh Clemens',
					email: 'jclemens@gmail.com',
					phone: '555-555-2345'
				},
			]
		};
	}
	render() {
		const { contacts } = this.state;
		return (
			<div>
				{contacts.map(contact => (
					<Contact 
						key={contact.id}
						contact={contact} />
				))}
			</div>
		);
	}
}

export default Contacts;
