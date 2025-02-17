import { useState } from "react"


const ListRender = () => {
    const [List] = useState(['Matheus','Gabriel','Pedro']);
  return (
    <div>
      <ul>
        {List.map((item, i) => (
            <li key={i} >{item}</li>
        )
        )}
      </ul>
    </div>
  )
}

export default ListRender
