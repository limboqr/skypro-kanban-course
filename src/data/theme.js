import * as Shared from "../components/Shared/Shared.styled"


export const lightTheme = {
   body: '#FFF',
   text: '#363537',

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

export const darkTheme = {
   body: '#363537',
   text: '#FAFAFA',

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