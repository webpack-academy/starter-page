import styles from './style.css';

console.log("Not lazy loaded styles: ", styles);

export default function() {
	const data = {
		component: {
			header: "webpack academy"		
		},
		styles
	}

	return data;
}