import { useState } from 'react';
import styles from './Contact.module.css';
import ContactList from './ContactList';

function Contact() {
	const [contact, setContact] = useState({
		name: '',
		lastname: '',
		email: '',
		phone: '',
	})
	const [contacts, setContacts] = useState([]);

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setContact((contact) => ({ ...contact, [name]: value }))
	}

	const addHandler = () => {
		setContacts((contacts) => [...contacts, contact])
		console.log(contacts)
		setContact({
			name: '',
			lastname: '',
			email: '',
			phone: ''
		})
	}

	return (
		<div className={styles.container}>
			<input type="text" placeholder='Name' value={contact.name} name='name' onChange={changeHandler} />
			<input type="text" placeholder='LastName' value={contact.lastname} name='lastname' onChange={changeHandler} />
			<input type="text" placeholder='Email' value={contact.email} name='email' onChange={changeHandler} />
			<input type="number" placeholder='Phone' value={contact.phone} name='phone' onChange={changeHandler} />
			<button onClick={addHandler}>Add Contact</button>

			<ContactList contacts={contacts} />
		</div>
	)
}

export default Contact