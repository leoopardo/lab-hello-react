import "./style-main.css"
import ComponentsImg from "../images/icon2.png"

function Components(){
    return (
        <div className="components">
            <img className="componentsImg" src={ComponentsImg} alt="components"></img>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
        </div>
    )
}

export default Components