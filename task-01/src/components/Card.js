function Card(props) {

    const array = props.companies
    console.log(array)
    return ( 
    <div>
        <img src={props.img} alt="Jeff Bezos" />
        <h1>{props.name}</h1>
        <p>Place of birth:</p><span>{props.city}</span>
        <p>Age of birth:</p><span>{props.born}</span> 
        <p>Owns:</p><span>
            {
            array.map((item,idx) => {
                return <div key={idx}>{item}</div>
            })
            }
        </span>
        <p>Likes:</p><span>{props.likes}</span>
        <p>Twitter:</p><span>{props.twitterLink}</span>
    </div>
     );
}

export default Card;