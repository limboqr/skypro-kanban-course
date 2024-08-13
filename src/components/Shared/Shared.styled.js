import styled, { css } from "styled-components"


// * Hover эффекты
export const Hover01 = css`
   &:hover {
      background-color: #33399b;
   }
`

export const Hover02 = css`
   &:hover {
      color: #33399b;
   }

   &:hover::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
   }
`

export const Hover03 = css`
   &:hover {
      background-color: #33399b;
      color: #FFFFFF;
   }
`

// * Общее
export const Target = css`
   &:target {
      display: block;
   }
`

export const Wrapper = styled.div`
   max-width: 100%;
   width: 100vw;
   min-height: 100vh;
   overflow: hidden;
   background-color: #EAEEF6;
`

export const Container = styled.div`
   max-width: 1260px;
   width: 100%;
   margin: 0 auto;
   padding: 0 30px;
`

// * Загрузка "Данные загружаются..."
export const Loading = styled.div`
   text-align: center;
   margin-top: 50px;
   font-size: 26px;
`

// * Часто использованный Subtitle
export const Subtitle = styled.label`
   color: #000;
   font-size: 14px;
   font-weight: 600;
   line-height: 1;
`

// * Цвета
export const Orange = css`
   background-color: #FFE4C2;
   color: #FF6D00;
`

export const OrangeContrary = css`
   background-color: #FF6D00;
   color: #FFE4C2;
`

export const Green = css`
   background-color: #B4FDD1;
   color: #06B16E;
`

export const GreenContrary = css`
   background-color: #06B16E;
   color: #B4FDD1;
`

export const Purple = css`
   background-color: #E9D4FF;
   color: #9A48F1;
`

export const PurpleContrary = css`
   background-color: #9A48F1;
   color: #E9D4FF;
`

export const Gray = css`
   background: #94A6BE;
   color: #FFFFFF;
`
