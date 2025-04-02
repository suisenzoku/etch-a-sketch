const grid = document.querySelector(".grid");
const sizeButton = document.querySelector("button");
const WIDTH = 600;
let opacity = 0.1;

const handleNewSize = () => {
    sizeButton.addEventListener("click", (e) => {
        let newSize;
        do {
            const answer = prompt("Dimensions: ");
            newSize = Number(answer);
        } while (isNaN(newSize) || newSize > 64 || newSize < 2);
        grid.replaceChildren();
        fillGrid(newSize);
        opacity = 0.1;
    })
}

const createCell = (size) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = size;
    cell.style.height = size;
    cell.addEventListener("mouseover", onCellHover);
    return cell;
}

const onCellHover = (e) => {
    e.target.style.backgroundColor = createRGBColor();
    e.target.style.opacity = opacity;
    if (opacity < 1) {
        opacity += 0.1;
    }
}

const fillGrid = (size) => {
    const cellSize = `${WIDTH / size}px`;
    for (let i = 0; i < size * size; i++) {
        const cell = createCell(cellSize);
        grid.append(cell);
    }
}

const createRGBColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        const value = Math.floor(Math.random() * 256);
        rgb.push(value);
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

fillGrid(16);
handleNewSize();