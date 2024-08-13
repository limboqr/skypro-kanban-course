import { useState } from "react"
import PopUser from "../Popups/PopUser/PopUser"
import * as S from "./Header.styled"
import * as Shared from "../Shared/Shared.styled"


function Header({ addCard }) {
   const [isPopUserOpened, setIsPopUserOpened] = useState(false)

   function handleOpenPopUser(event) {
      event.preventDefault()

      setIsPopUserOpened(prev => !prev)
   }

   return (
      <S.Header>
         <Shared.Container>
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
                  <S.HeaderNewCardButton onClick={addCard}>
                     Создать новую задачу
                  </S.HeaderNewCardButton>

                  <S.HeaderUser onClick={handleOpenPopUser}>
                     Ivan Ivanov
                  </S.HeaderUser>

                  {isPopUserOpened && <PopUser username={"Ivan"} />}
                  {isPopUserOpened && PopUser({ username: "Ivan" })}
               </S.HeaderNav>
            </S.HeaderBlock>
         </Shared.Container>
      </S.Header>
   )
}

export default Header
