import {Link} from 'react-router-dom'

function Menu(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                       
                    </li>
                    <li><Link href="./pokemon">Pokemon</Link></li>
                    <li><Link href="./posts">Posts</Link></li>
                    <li><Link href="./posts/:id">Home</Link></li>


                </ul>


            </nav>

        </>


    )


    


}

export default Menu