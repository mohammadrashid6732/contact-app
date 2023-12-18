/* eslint-disable react/prop-types */

function ContactList({ contacts }) {
	console.log(contacts)
	return (
		<div>
			{contacts.name}
			{/* {contacts.map(item => (
				<div key={item.phone}>
					{item.name}
					<br />
					{item.lastname}
					<br />
					{item.email}
					<br />
					{item.phone}
				</div>
			))} */}
		</div>
	)
}

export default ContactList