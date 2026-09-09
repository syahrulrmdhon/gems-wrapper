import './App.css'

const GAS_URL="https://script.google.com/macros/s/AKfycbwDxH-NIoGrE278oGY7pQjrc8szPtgRQhudS2MBadTJ1gmyAiLsTwNBWTHggYayw43Z/exec";

function App(){
  return (
    <iframe
      src={GAS_URL}
      title="GeMS"
      style={{width:"100%",height:"100vh",border:"none"}}
    />
  );
}

export default App;