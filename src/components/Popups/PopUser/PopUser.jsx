import * as S from "../PopUser/PopUser.styled"


function PopUser({ globalTheme, setGlobalTheme }) {
   return (
      <S.PopUser>
         <S.PopUserName>Ivan Ivanov</S.PopUserName>
         <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>

         <S.PopUserTheme>
            <S.PopUserThemeDark>Темная тема</S.PopUserThemeDark>
            <S.PopUserThemeCheckbox type="checkbox" onChange={() => setGlobalTheme(!globalTheme)} />
         </S.PopUserTheme>

         <S.PopUserButton>Выйти</S.PopUserButton>
      </S.PopUser>
   )
}

export default PopUser
