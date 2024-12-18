const Events = () =>{
    const handleMyEvents = () =>{
        alert("oi")
    }
    const RenderSomething = (x) =>{
        if(x){
            return <h1>Renderizando ISSO</h1>
        } else{
            return <h1>Tambem</h1>
        }
    }
    return(
        <div>
            <button onClick={handleMyEvents} > clique</button>
            <button onClick={() => {
                if(true){
                    alert("Que loucura")
                }
            }}  >Clique Aqui</button>
            {RenderSomething(true)}
            
            
        </div>
    )
}
export default Events;