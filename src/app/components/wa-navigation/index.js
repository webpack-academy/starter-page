import Vue from 'vue';
import template from './template.html';
import data from './model';

const component = {
	data,
	template,
	created() {
		console.log("Holy freaking crap I'm lazy loaded");
	}
};

export default component;