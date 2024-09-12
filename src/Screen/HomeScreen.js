import InterestCalculator from "../Component/ContainerPool/InterestCalculator";
import {useState} from "react";
import ComposeInterest from "../Component/ContainerPool/ComposeInterest";

const HomeScreen = ()  => {

    const [state, setState] = useState(0)


    return (
        <div className="containerHomeScreen">
            <div className="containerTop">
                {state === 1 && <button className="button" onClick={() => setState(0)}>Interest Calculator</button>}
                {state === 0  && <button className="button" onClick={() => setState(1)}>Compose Interest</button>}
            </div>
            <div className="containerBottom">
                {state === 0 && <InterestCalculator />}
                {state === 1 && <ComposeInterest />}
            </div>
        </div>
    );
}


export default HomeScreen;
