import React, { useState } from 'react'
import rasm from "../../assets/kitob.jpg"

const Hero = () => {
    const [data, setDAta] = useState([]);
    const [text, setText] = useState("")
    const [price, setPrice] = useState("")
    const [descripshin, setDescripshin] = useState("")
    const handleCreate = (e) => {
        e.preventDefault()
        let object = {
            id: new Date().getTime(),
            text,
            price,
            descripshin
        }
        setDAta((prev) => [...prev, object])
        setText("")
        setPrice("")
        setDescripshin("")
    }
    return (
        <div className=' bg-stone-300'>
            <div className='container mx-auto py-20'>
                <form className='flex flex-col items-center gap-5 w-96 m-auto border border-solid p-4 shadow-xl bg-zinc-50 rounded-sm' onSubmit={handleCreate}>
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="text" placeholder='title' required value={text} onChange={(event) => setText(event.target.value)} />
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="text" placeholder='price' required value={price} onChange={(event) => setPrice(event.target.value)} />
                    <input className='border pl-2 w-full rounded-lg outline-none text-sm py-1 bg-teal-50' type="text" placeholder='descripshin' required value={descripshin} onChange={(event) => setDescripshin(event.target.value)} />
                    <button className='w-1/2 border rounded-lg bg-teal-400 py-1 text-gray-50'>create</button>
                </form>
                <div className=" w-full flex gap-6 mt-8 mb-12 flex-wrap justify-center ">
                    {
                        data?.map((item) => (
                            <div className=' p-4 shadow-md bg-slate-100 rounded-xl w-96 ' key={item.id}>
                                <div className='w-full'><img className='w-full rounded-lg  hover:scale-105 transform-gpu hover:opacity-95' src={rasm} alt="" /></div>
                                <div className='text-center pt-3 flex flex-col gap-3'>
                                    <p className='text-xl text-slate-400'>{item.text}</p>
                                    <p className='text-base font-semibold'>{item.price}$</p>
                                    <p className='text-sm'>{item.descripshin}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Hero