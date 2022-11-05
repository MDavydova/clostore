import './directory.styles.scss.css'
import DirectoryItem from "../directory-item/directory-item.component";

const  categories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        route: 'shops/hats'
    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        route: 'shops/jackets'
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: 'shops/sneakers',
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        route: 'shops/womens'
    },
    {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        route: 'shops/mens'
    }
]


const Directory = () => {
    return (
        <div className='categories-container'>
            {categories.map((category ) => (
                <DirectoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Directory;