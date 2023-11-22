import './App.scss'

function App() {
  return (
    <main className="container">
      {/* Upper section of a terminal (title etc.) */}
      <section className="container_toplane">
        <div className="container_toplane_title">
             client@kali: ~
          </div>
        
        <div className="container_toplane_dots">
          <div className="container_toplane_dots_r"></div>
          <div className="container_toplane_dots_g"></div>
          <div className="container_toplane_dots_y"></div>
        </div>
      </section>

      {/* Body of the terminal section */}
      <section className="container_body">
        <div className="container_body_text">
          <span className="client">client</span>@<span className="system">kali</span><span className="symbols">:~$</span> help
          <br />
          <span className="client">client</span>@<span className="system">kali</span><span className="symbols">:~$</span> command not found.
          <br />
        </div>
      </section>
    </main>
  )
}

export default App