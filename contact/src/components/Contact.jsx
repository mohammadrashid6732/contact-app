import { useState } from 'react';


import styles from './Contact.module.css';
import ContactList from './ContactList';
import  inputs  from '../constants/input';

function Contact() {

	const [contact, setContact] = useState({
		name: '',
		lastname: '',
		email: '',
		phone: '',
	})
	const [contacts, setContacts] = useState([]);
	const [alert, setAlert] = useState("");


	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setContact((contact) => ({ ...contact, [name]: value }))
	}

	const addHandler = () => {

		if (!contact.name || !contact.lastname || !contact.email || !contact.phone) {
			setAlert('data is not valid')
			return;
		}

		setAlert('')


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
			{inputs.map((input, index) => (
				<input key={index} name={input.name} placeholder={input.placeholder} type={input.type} value={contact[input.name]} onChange={changeHandler} />
			))}
			<button onClick={addHandler}>Add Contact</button>
			<div>{alert && <p>{alert}</p>}</div>
			<ContactList contacts={contacts} />

		</div>
	)
}

export default Contact