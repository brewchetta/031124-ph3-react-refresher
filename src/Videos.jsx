import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

function Videos() {

    const videos = useLoaderData()

    console.log(videos)

    const [search, setSearch] = useState('')

    const mappedVideos = videos
        .filter(video => video.name.toLowerCase().includes(search.toLowerCase()))
        .map( video => {
            return (
                <iframe key={video.id} width="560" height="315" src={video.url} title="Cat Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            )
        })

    return (
        <div>

            <h2>Your Videos</h2>

            <input type="text" 
            onChange={e => setSearch(e.target.value)}
            value={search}
            />

            <br/>

            { mappedVideos }            

        </div>
    )

}

export default Videos