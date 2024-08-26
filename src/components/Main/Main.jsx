import Column from "../Column/Column"
import * as S from "./Main.styled"
import * as Shared from "../Shared/Shared.styled"


function Main({ cards, isLoading }) {
   return (
      <S.Main>
         <Shared.Container>
            <S.MainBlock>
               {isLoading ? <Shared.Loading>Данные загружаются...</Shared.Loading> : (
                  <S.MainContent>
                     <Column title={"Без статуса"} cards={cards.filter(el => el.status === "Без статуса")} />
                     <Column title={"Нужно сделать"} cards={cards.filter(el => el.status === "Нужно сделать")} />
                     <Column title={"В работе"} cards={cards.filter(el => el.status === "В работе")} />
                     <Column title={"Тестирование"} cards={cards.filter(el => el.status === "Тестирование")} />
                     <Column title={"Готово"} cards={cards.filter(el => el.status === "Готово")} />
                  </S.MainContent>
               )}
            </S.MainBlock>
         </Shared.Container>
      </S.Main>
   )
}

export default Main
