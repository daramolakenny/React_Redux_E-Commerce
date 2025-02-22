import React from 'react'

const Management = ({Add, Edit, Delete}) => {
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [clear, setClear] = useState(false);

    const[count, setCount] = useState(0);

    const Addition= () => {
        const add = {...prevAdd, Add}
    }

  return (
    <div>
        <button></button>
    </div>
  )
}

export default Management