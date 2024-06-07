import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    console.log(data)
    // const [data,setDate]=React.useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/kushal1306')
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setDate(data)
    //     })

    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
    <img src={data.avatar_url} width={300}/>
    </div>

  )
}

export default Github


export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/kushal1306')
    return response.json()

}