//styles
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.container}>
			<h1>Contact App</h1>
			<p><span>mohammad rashid</span> | profilto</p>
			<div className={styles.form}>
				<form>
					<input type="text" placeholder='Name' />
					<input type="text" placeholder='LastName' />
					<input type="text" placeholder='Email' />
					<input type="number" placeholder='Phone' />
					<button>Add Contact</button>
				</form>
			</div>


		</div>
	)
}

export default Header