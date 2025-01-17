import styled from "styled-components"
import { Hover01 } from "../Shared/Shared.styled"


export const Header = styled.header`
   width: 100%;
   margin: 0 auto;
   background-color: ${({ theme }) => theme.shared.secondary};
`

export const HeaderBlock = styled.div`
   height: 70px;
   display: flex;
   flex-wrap: nowrap;
   align-items: center;
   justify-content: space-between;
   position: relative;
   top: 0;
   left: 0;
   padding: 0 10px;
`

// * Logo
export const HeaderLogoLight = styled.a`
   display: ${({ theme }) => !theme.isDarkLogo ? 'block' : 'none'};

   & img {
      width: 85px;
   }
`
export const HeaderLogoDark = styled.a`
   display: ${({ theme }) => theme.isDarkLogo ? 'block' : 'none'};

   & img {
      width: 85px;
   }
`

// * Header навигация
export const HeaderNav = styled.nav`
   max-width: 290px;
   padding: 0;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const HeaderNewCardButton = styled.button`
   width: 178px;
   height: 30px;
   border-radius: 4px;
   background-color: #565EEF;
   color: #FFFFFF;
   font-size: 14px;
   line-height: 1;
   font-weight: 500;
   margin-right: 20px;

   & a {
      color: #FFFFFF;
   }

   ${Hover01}

   @media screen and (max-width: 495px) {
      z-index: 3;
      position: fixed;
      left: 16px;
      bottom: 30px;
      top: auto;
      width: calc(100vw - 32px);
      height: 40px;
      border-radius: 4px;
      margin-right: 0;
   }
`

export const HeaderUser = styled.button`
   height: 20px;
   display: flex;
   flex-wrap: nowrap;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   line-height: 20px;
   font-weight: 500;
   color: ${({ theme }) => theme.popUser.nameUser.text};

   &:hover {
      color: ${({ theme }) => theme.popUser.nameUser.hover};
   }

   &::after {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 1px;
      border-left: 1.9px solid ${({ theme }) => theme.popUser.nameUser.text};
      border-bottom: 1.9px solid ${({ theme }) => theme.popUser.nameUser.text};
      transform: rotate(-45deg);
      margin: -3px 0 0 6px;
   }

   &:hover::after {
      border-left-color: ${({ theme }) => theme.popUser.nameUser.hover};
      border-bottom-color: ${({ theme }) => theme.popUser.nameUser.hover};
   }
`
