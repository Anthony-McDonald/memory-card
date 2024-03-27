import "../styles/MemoryBox.css";

export default function MemoryBox({imageName}) {
    const srcLine = "src/assets/poke-imgs/" + imageName + ".png";
    console.log(srcLine)
    return (
        <>
        <div className="memory-box">
            <div className="img-holder">
                <img className="mem-img" src={srcLine} alt="pokeImg" />
                <div className="poke-name rubik-scribble-regular">{imageName}</div>
            </div>
        </div>
        </>
    )
}