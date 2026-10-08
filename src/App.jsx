import './App.css'

const GAS_URL="https://script.google.com/macros/s/AKfycbyDHHYqpACnRFLLau5_p6PjaIBkoLnGhTXAOrZQOKKCY1ccz3Z4LqsmBH_n64mW8UO2fw/exec"

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