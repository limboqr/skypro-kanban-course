import * as Shared from "./Shared.styled"


// * Светлая тема
export const lightTheme = {
   isDarkLogo: false,

   shared: {
      body: '#EAEEF6',
      text: '#000000',
      secondary: '#FFFFFF',
   },

   popUser: {
      nameUser: {
         text: '#565EEF',
         hover: '#33399B',
      },
      popTheme: {
         border: '#94A6BE66',
         shadow: '#1A386536',
         darkTheme: {
            checkboxBackground: '#EAEEF6',
            checkbox: '#94A6BE',
         },
         button: {
            buttonBorder: '#565EEF'
         }
      },
   },

   getColor(topic) {
      switch (topic) {
         case "Web Design":
            return Shared.Orange
         case "Research":
            return Shared.Green
         case "Copywriting":
            return Shared.Purple
         default:
            return Shared.Gray
      }
   },
}

// * Тёмная тема
export const darkTheme = {
   isDarkLogo: true,

   shared: {
      body: '#151419',
      text: '#FFFFFF',
      secondary: '#20202C',
   },

   popUser: {
      nameUser: {
         text: '#FFFFFF',
         hover: '#94A6BE',
      },
      popTheme: {
         border: '#4E5566',
         shadow: '#94A6BE66',
         darkTheme: {
            checkboxBackground: '#FFFFFF',
            checkbox: '#565EEF',
         },
         button: {
            buttonBorder: '#FFFFFF'
         }
      },
   },

   getColor(topic) {
      switch (topic) {
         case "Web Design":
            return Shared.OrangeContrary
         case "Research":
            return Shared.GreenContrary
         case "Copywriting":
            return Shared.PurpleContrary
         default:
            return Shared.Gray
      }
   },
}
