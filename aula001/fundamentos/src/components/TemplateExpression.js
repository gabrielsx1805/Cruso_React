const TemplateExpressions = () => {
    const name = "Mateus"
    const data ={
        age:31,
        job:"Programador"
    };

    return(

        <div>
            <h1>Olá {name}</h1>
            <p>{data.job}</p>
        </div>
        
    )
}

export default TemplateExpressions;