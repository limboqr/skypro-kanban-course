import { useState } from "react"
import PopUser from "../Popups/PopUser/PopUser"
import * as S from "./Header.styled"
import * as Shared from "../Shared/Shared.styled"


function Header({ addCard, globalTheme, setGlobalTheme }) {
   const [isPopUserOpened, setIsPopUserOpened] = useState(false)

   function handleOpenPopUser(event) {
      event.preventDefault()

      setIsPopUserOpened(prev => !prev)
   }

   return (
      <S.Header>
         <Shared.Container>
            <S.HeaderBlock>
               <S.HeaderLogoLight href="#">
                  <img src="./images/logo.png" alt="logo" />
               </S.HeaderLogoLight>

               <S.HeaderLogoDark href="#">
                  <img src="./images/logo_dark.png" alt="logo" />
               </S.HeaderLogoDark>


               <S.HeaderNav>
                  <S.HeaderNewCardButton onClick={addCard}>
                     Создать новую задачу
                  </S.HeaderNewCardButton>

                  <S.HeaderUser onClick={handleOpenPopUser}>
                     Ivan Ivanov
                  </S.HeaderUser>

                  {isPopUserOpened && <PopUser username={"Ivan"} globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} />}
               </S.HeaderNav>
            </S.HeaderBlock>
         </Shared.Container>
      </S.Header>
   )
}

export default Header
