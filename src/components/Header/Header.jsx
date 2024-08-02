import { useState } from "react"
import PopUser from "../Popups/PopUser/PopUser"
import * as S from "./Header.styled"


function Header({ addCard }) {
   const [isPopUserOpened, setIsPopUserOpened] = useState(false)

   function handleOpenPopUser(event) {
      event.preventDefault()

      setIsPopUserOpened(prev => !prev)
   }

   return (
      <S.Header>
         <div className="container">
            <S.HeaderBlock>

               <S.HeaderLogo className="_show _light">
                  <a href="#" target="_self">
                     <img src="./images/logo.png" alt="logo" />
                  </a>
               </S.HeaderLogo>

               {/* <div className="header__logo _dark">
                  <a href="#" target="_self">
                     <img src="./images/logo_dark.png" alt="logo" />
                  </a>
               </div> */}

               <S.HeaderNav>
                  <S.HeaderNewCardButton onClick={addCard} className="_hover01">
                     <a href="#popNewCard">Создать новую задачу</a>
                  </S.HeaderNewCardButton>

                  <S.HeaderUser onClick={handleOpenPopUser} className="_hover02">
                     Ivan Ivanov
                  </S.HeaderUser>

                  {isPopUserOpened && <PopUser />}
               </S.HeaderNav>
            </S.HeaderBlock>
         </div>
      </S.Header>
   )
}

export default Header
