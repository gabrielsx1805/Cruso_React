const Challenge= () => {
    const x = 5;
    const y = 2;
    const handleSoma = () =>{
        alert(x+y);
    }
    return(
        <div>
            <p>{x}</p>
            <p>{y}</p>

            <button onClick = {handleSoma} > Clique</button>
        </div>
        
    )
}

export default Challenge;