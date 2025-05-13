import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        defaultTheme: "dark", // Use the dark theme by default
        themes: {
          light: { 
            IconColor:'#F4F5F3',
            CalenderBtn:'754CDB',
            ButtonColor:'2A1852',
            BgColor:'F7F7F7',
            SliderColor:'2F2F31',
            TabTextColor:'ABAFB1', 
          },
          dark: { 
            // content
          },
        },
         
      },
});
