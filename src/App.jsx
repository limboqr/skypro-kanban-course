import './App.css'
import Tasks from './data/tasks'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/Shared/Themes'
import { GlobalStyle } from './components/Shared/Global.styled'
import * as Shared from "./components/Shared/Shared.styled"


function App() {
  const [cards, setCards] = useState(Tasks)
  const [isLoading, setIsLoading] = useState(false)
  const [globalTheme, setGlobalTheme] = useState(true)

  // * Добавление новой задачи
  function addCard(e) {
    e.preventDefault()

    const newCard = {
      id: cards[cards.length - 1].id + 5,
      topic: "Web Design",
      title: "Новая задача",
      description: "Что-то",
      date: "30.10.23",
      status: "Без статуса",
    }

    setCards([...cards, newCard])
  }

  // * Загрузка (Данные загружаются...)
  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
      <Shared.Wrapper>
        <GlobalStyle />

        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Header addCard={addCard} globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} />
        <Main cards={cards} isLoading={isLoading} />
      </Shared.Wrapper>
    </ThemeProvider>
  )
}

export default App
