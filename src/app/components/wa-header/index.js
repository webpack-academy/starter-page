import Vue from 'vue';
import template from './template.html';

const component = {
	data() {
		return {
			message: 'Hello!!'
		};
	},
	template
};

export default Vue.component('wa-header', component);