import "./style-main.css"
import JSXimage from "../images/icon4.png"

function JSX(){
    return (
        <div className="JSX">
            <img className="JSXimg" src={JSXimage} alt="JSX"></img>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    )
}

export default JSX