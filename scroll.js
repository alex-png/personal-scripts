const scrollUp = () => { window.scrollBy(0, -100) }
const scrollDown = () => { window.scrollBy(0, 100) }

document.addEventListener("keydown", () => {
    if (event.key === "ArrowUp"){
        scrollUp()
    }
    if(event.key === "ArrowDown"){
        scrollDown()
    }
}
)