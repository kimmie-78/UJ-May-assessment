import data from './data.json';
import handlebars from 'vite-plugin-handlebars';

export default {
  base : '/responsive_cv/',  
  plugins: [handlebars({
      context : data   
  })],
};