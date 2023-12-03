import { useRef, useState } from "react";

export default function App() {
    const [xItem, setXItem] = useState("");
    const [yItem, setYItem] = useState("");
    const [zItem, setZItem] = useState("");
    const [showStory, setShowStory] = useState(false);
    const [customName, setCustomName] = useState("");
    const [ukus, setUkus] = useState("us");

    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = [
        "spontaneously combusted",
        "melted into a puddle on the sidewalk",
        "turned into a slug and crawled away",
    ];

    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
    }

    function handleClickGenerateRandomStory() {
        setXItem(randomValueFromArray(xItems));
        setYItem(randomValueFromArray(yItems));
        setZItem(randomValueFromArray(zItems));
        setShowStory(true);
    }   

    return (
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input type="text"
                    placeholder="Bob"
                    value={customName} 
                    onChange={(e) => setCustomName(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="us">US</label>
                <input type="radio" value="us" checked={ukus === "us"} onChange={() => setUkus("us")} />
                <label htmlFor="uk">UK</label>
                <input type="radio" value="uk" checked={ukus === "uk"} onChange={() => setUkus("uk")}/>
            </div>
            <div>
                <button onClick={handleClickGenerateRandomStory}>Generate random story</button>
            </div>
            {showStory && (
                <p>
                    It was {ukus === "uk" ? "34 Celsius" : "94 fahrenheit"} outside, so {xItem} went for a walk. When they
                    got to {yItem}, they stared in horror for a few moments, then {zItem}.
                    {customName.trim() !== "" ? customName : " Bob"} saw the whole thing, but was not surprised — {xItem} weighs 
                    {ukus === "uk" ? " 300 pounds" : " 21 stone"}, and it was a hot day.
                </p>
            )}
        </>
    );
}