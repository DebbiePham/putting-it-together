import React, {useState} from 'react';


const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;

    const [count, setCount] = useState(age);

    const increaseAge = () => {
        setCount(count + 1);
    }
    

    return (
        <div className="person-card">
            <div className="person">
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {count}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
            <button onClick={increaseAge}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )

}
export default PersonCard

