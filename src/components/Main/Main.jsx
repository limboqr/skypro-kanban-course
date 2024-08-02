import Column from "../Column/Column"
import * as S from "./Main.styled"


function Main({ cards, isLoading }) {
   return (
      <S.Main>
         <div className="container">
            <S.MainBlock>
               {isLoading ? <p className="loading">Данные загружаются...</p> : (
                  <S.MainContent>
                     <Column title={"Без статуса"} cards={cards.filter(el => el.status === "Без статуса")} />
                     <Column title={"Нужно сделать"} cards={cards.filter(el => el.status === "Нужно сделать")} />
                     <Column title={"В работе"} cards={cards.filter(el => el.status === "В работе")} />
                     <Column title={"Тестирование"} cards={cards.filter(el => el.status === "Тестирование")} />
                     <Column title={"Готово"} cards={cards.filter(el => el.status === "Готово")} />
                  </S.MainContent>
               )}
            </S.MainBlock>
         </div>
      </S.Main>
   )
}

export default Main
