import "../styles/MemoryBox.css";

export default function MemoryBox({imageName, handleClick}) {


    const srcLine = "/poke-imgs/" + imageName + ".png";
    return (
        <>
        <div className="memory-box" role="button" tabIndex={0} onClick={() => {
            handleClick(imageName);
        }}>
            <div className="img-holder">
                <img className="mem-img" src={srcLine} alt="pokeImg" />
                <div className="poke-name rubik-scribble-regular">{imageName}</div>
            </div>
        </div>
        </>
    )
}

