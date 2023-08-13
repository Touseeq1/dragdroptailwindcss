import React, { useState } from 'react'
const PageOne = () => {
    const listItems = [
        { id: "item1", label: 'item1', 'icon': "😍" },
        { id: "item2", label: 'item2', 'icon': "😎" },
        { id: "item3", label: 'item3', 'icon': "😉" },
        { id: "item4", label: 'item4', 'icon': "👀" },
        { id: "item5", label: 'item6', 'icon': "🎅" },
        { id: "item6", label: 'item6', 'icon': "🚇" },
    ]
    const [list, setList] = useState(listItems)
    const [isDragging, setIsDragging] = useState(false)
    const [dragedList, setDragedList] = useState([])
    const handleDragOver = (event) => {
        event.preventDefault()
        setIsDragging(true)
    }
    const handleDragStart = (event) => {
        event.dataTransfer.setData("id", event.currentTarget.id)
    }
    const tagetClass = `bg-green-400 h-96  p-4 mt-5 rounded-lg shadow-lg border-dashed border-4 ${isDragging ? "border-red-300" : "border-indigo-300"}`
    const handleDrope = (event) => {
        event.preventDefault()
        const id = event.dataTransfer.getData("id")
        const item = list.find((x) => x.id == id) //now replace listItem with list
        if (item) {
            setDragedList([...dragedList, item])
            setIsDragging(false)
            const filterList = list.filter(x => x.id !== id);
            setList(filterList)
        }
    }
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-1 m-1'>
                <div className='bg-blue-300 p-4 mt-5 h-96  rounded-lg shadow-lg'>
                    <h1>Pice Here</h1>
                    <ul className='list-none p-0 m-0 bg-white-400 border border-indigo-300'>
                        {
                            list.map(item => {
                                return <li
                                    key={item.id} id={item.id} draggable={true} onDragStart={handleDragStart}
                                    className='flex w-full justify-between rounded-lg hover:bg-blue-300 hover:rounded-md p-2 mb-2 cursor-move bg-white border border-indigo-200 '>{item.label} {item.icon}</li>
                            })}
                    </ul>
                </div>
                {/* <div className='bg-green-400 p-4 mt-5 rounded-lg shadow-lg border-dashed border-4 border-indigo-300' onDragOver={handleDragOver}> */}
                <div className={tagetClass} onDragOver={handleDragOver} onDrop={handleDrope}>
                    <h1>Drop Here</h1>
                    <ul className='list-none p-0 m-0 bg-white-400'>
                        {
                            dragedList.map(item => {
                                return <li key={item.id} className='p-2 mb-2 rounded-lg cursor-move bg-white border border-indigo-200 '>{item.label} {item.icon}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PageOne