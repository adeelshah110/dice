const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.names} you are {props.age} old</p>
      
      
    </div>
  )
}

const Footer =()=>{
  return (
    <div>This app is presented by <a href = "http://cs.uef.fi/~himat">Drank
    </a>
    </div>
  )
}


const App = () => {
  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends[0]}</p>
    </div>
  )
}

export default App
