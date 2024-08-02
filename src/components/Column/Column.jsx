import Card from "../Card/Card"
import * as S from "./Column.styled"


function Column({ title, cards }) {
   return (
      <S.Column>
         <S.ColumnTitle>{title}</S.ColumnTitle>
         <S.ColumnCards>
            {cards.map(el => (
               <Card key={el.id} title={el.title} name={el.topic} date={el.date} />
            ))}
         </S.ColumnCards>
      </S.Column>
   )
}

export default Column
