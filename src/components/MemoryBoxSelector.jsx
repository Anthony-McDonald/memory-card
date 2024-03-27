import MemoryBox from "./MemoryBox";
import "../styles/MemoryBox.css";

export default function MemoryBoxSelector({handleClick}) {


    const pokeNames = ['chandelure', 'cofagrigus', 'dusknoir',
    'gastly', 'gengar', 'giratina', 'haunter', 'litwick', 'mismagius',
    'polteageist', 'pumpkaboo', 'zoroark']

    shuffle(pokeNames);


    const divs = [];

    for (let i = 0; i < pokeNames.length; i++) {
        divs.push(<div key={i}> <MemoryBox imageName={pokeNames[i]} handleClick={handleClick}></MemoryBox></div>)
    }

    return (
        <>
        <div className="memory-boxes">
        {divs}
        </div>
        </>
    )
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
