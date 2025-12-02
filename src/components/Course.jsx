import ProgressBar from "@ramonak/react-progress-bar";


export default function ({image, title, description, progress,date}) {
    return (
            <li>
                <img src= {image}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{date}</p>
                <ProgressBar bgColor='#222831'	 completed={progress}/>
            </li>
    )
};