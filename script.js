const grid = document.querySelector(".grid");
const WIDTH = 600;

const fillGrid = (size) => {
    const cellSize = `${WIDTH / size}px`;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize;
        cell.style.height = cellSize;
        grid.append(cell);
    }
}

fillGrid(16);