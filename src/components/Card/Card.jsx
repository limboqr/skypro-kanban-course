import Graphics from "../Graphics/Graphics"
import * as S from "./Card.styled"


function Card({ title, topic, date }) {
   return (
      <S.Cards>
         <S.Card>
            <S.CardGroup>
               <S.CardTopic $topic={topic} >
                  {topic}
               </S.CardTopic>
               <S.CardButton>
                  <div />
                  <div />
                  <div />
               </S.CardButton>
            </S.CardGroup>

            <S.CardContent>
               <S.CardTitle>{title}</S.CardTitle>

               <S.CardDate>
                  <Graphics />

                  <S.CardDateNumber>{date}</S.CardDateNumber>
               </S.CardDate>
            </S.CardContent>
         </S.Card>
      </S.Cards>
   )
}

export default Card
