import './App.css'
import Tasks from './data/tasks'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
// import PopUser from './components/Popups/PopUser/PopUser'
import { useEffect, useState } from 'react'


function App() {
  const [cards, setCards] = useState(Tasks)
  const [isLoading, setIsLoading] = useState(false)

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
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header addCard={addCard} />
      <Main cards={cards} isLoading={isLoading} />
    </div>
  )
}

export default App
