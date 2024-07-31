import Card from "../Card/Card"


function Column({ title, cards }) {
   return (
      <div className="main__column column">
         <div className="column__title">
            <p>{title}</p>
         </div>
         <div className="cards">
            {cards.map(el => (
               <Card key={el.id} title={el.title} name={el.topic} date={el.date} />
            ))}
         </div>
      </div>
   )
}

export default Column
