function App(){
  return (<div>
    {2+2}
    <br/>
    {"Kirthikha"}
    <br/>
    {true}{false}
    <br/>
    {2>5?"yes":"no"}
    <br/>
    {2>1 && 2<5 && "success"}
    <br/>
    {"record" || "yes"}
    <p>Hello world</p>
    <input type="text"/>
  </div>)
}
export default App;