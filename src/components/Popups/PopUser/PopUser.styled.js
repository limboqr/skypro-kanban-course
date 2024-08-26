import styled from "styled-components"


export const PopUser = styled.div`
   display: block;
   position: absolute;
   z-index: 2;
   top: 61px;
   right: 0;
   width: 213px;
   height: 205px;
   text-align: center;
   padding: 34px;
   border-radius: 10px;
   color: ${({ theme }) => theme.shared.text};
   background: ${({ theme }) => theme.shared.secondary};
   border: 0.7px solid ${({ theme }) => theme.popUser.popTheme.border};
   box-shadow: 0px 10px 39px 0px ${({ theme }) => theme.popUser.popTheme.shadow};
`

export const PopUserName = styled.p`
   font-size: 14px;
   font-weight: 500;
   line-height: 21px;
   letter-spacing: -0.14px;
   margin-bottom: 4px;
`

export const PopUserMail = styled.p`
   color: #94A6BE;
   font-size: 14px;
   line-height: 21px;
   letter-spacing: -0.14px;
   margin-bottom: 10px;
`

export const PopUserTheme = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 30px;
`

export const PopUserThemeDark = styled.p`
   font-size: 14px;
   line-height: 21px;
   letter-spacing: -0.14px;
`

export const PopUserThemeCheckbox = styled.input`
   position: relative;
   width: 24px;
   height: 13px;
   border-radius: 100px;
   background: ${({ theme }) => theme.popUser.popTheme.darkTheme.checkboxBackground};
   outline: none;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;

   &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.popUser.popTheme.darkTheme.checkbox};
      transition: 0.5s;
   }

   &:checked[type=checkbox]::before {
      left: 12px;
   }
`

export const PopUserButton = styled.button`
   width: 72px;
   height: 30px;
   background: transparent;
   color: ${({ theme }) => theme.popUser.popTheme.button.buttonBorder};
   border: 1px solid ${({ theme }) => theme.popUser.popTheme.button.buttonBorder};
   border-radius: 4px;

   /* &:hover {
      border: #565EEF;
      background-color: #565EEF;
   } */
`
