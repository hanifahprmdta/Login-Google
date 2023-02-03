import { useParams } from 'react-router-dom'

function Home(){
    const {email} = useParams()
        return(<h1>Selamat Datang, {email}</h1>)
}

export default Home