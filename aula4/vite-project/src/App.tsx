
import './App.css'
import Card from './components/Card'

function App() {

  const data = [
      { title: 'Card 1', description: 'This is the first card', button: 'Click Me' },
      { title: 'Card 2', description: 'This is the second card', button: 'Click Me' },
      { title: 'Card 3', description: 'This is the third card', button: 'Click Me' },
      { title: 'Card 4', description: 'This is the fourth card', button: 'Click Me' },
      { title: 'Card 5', description: 'This is the fifth card', button: 'Click Me' },
      { title: 'Card 6', description: 'This is the sixth card', button: 'Click Me' },
      { title: 'Card 7', description: 'This is the seventh card', button: 'Click Me' },
      { title: 'Card 8', description: 'This is the eighth card', button: 'Click Me' },
      { title: 'Card 9', description: 'This is the ninth card', button: 'Click Me' },
      { title: 'Card 10', description: 'This is the tenth card', button: 'Click Me' }
    ];

  return (
    <div style={styles.main}>
      {data.map ((element, index) => {
        return (

          <Card key={index} title={element.title} description={element.description} button={element.button} />
        )
      })}
    </div>
  )
}

const styles = {
  main : {
    "display": "flex",
    "flexWrap" : "wrap"
  }
}

export default App
