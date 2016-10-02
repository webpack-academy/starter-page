import Vue from 'vue';
import template from './template.html';
import data from './model';

const component = {
	data,
	template,
	components: {
		navigation: () => {
			return System.import('../wa-navigation/').then((module)=>{
				return module.default;
			});
		}
	}
};

export default Vue.component('wa-header', component);
