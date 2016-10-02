import styles from './style.css';

console.log("LAZY LOADED", styles);

export default function() {
	const data = {
		component: {
				
		},
		styles: styles.locals
	}

	return data;
}