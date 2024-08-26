import styled from "styled-components"


export const Column = styled.div`
   width: 20%;
   margin: 0 auto;
   display: block;

   @media screen and (max-width: 1200px) {
      width: 100%;
      margin: 0 auto;
      display: block;
   }
`

export const ColumnTitle = styled.h3`
   padding: 0 10px;
   margin: 15px 0;
   color: #94A6BE;
   font-size: 14px;
   font-weight: 600;
   line-height: 1;
   text-transform: uppercase;
`

export const ColumnCards = styled.div`
   width: 100%;
   display: block;
   position: relative;
`