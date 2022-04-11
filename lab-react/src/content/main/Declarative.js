import "./style-main.css"
import DeclarativeImg from "../images/icon1.png"

function Declarative(){
    return (
        <div className="declarative">
            <img className="declarativeImg" src={DeclarativeImg} alt="declarative"></img>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
    )
}

export default Declarative