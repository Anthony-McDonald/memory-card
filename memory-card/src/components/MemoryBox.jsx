import "../styles/MemoryBox.css"

export default function MemoryBox() {
    return (
        <>
        <div className="memory-box">
            <div className="img-holder">
                <img className="mem-img" src="src/assets/poke-imgs/chandelure.png" alt="pokeImg" />
            </div>
            <div className="poke-name"></div>
        </div>
        </>
    )
}