import "./style-main.css"
import SingleImg from "../images/icon3.png"

function Single(){
    return (
        <div className="single">
            <img className="singleImg" src={SingleImg} alt="Single"></img>
            <h2>SIngle-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
    )
}

export default Single