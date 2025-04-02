const grid = document.querySelector(".grid");
const WIDTH = 600;

const createCell = (size) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = size;
    cell.style.height = size;
    return cell;
}

const fillGrid = (size) => {
    const cellSize = `${WIDTH / size}px`;
    for (let i = 0; i < size * size; i++) {
        const cell = createCell(cellSize);
        grid.append(cell);
    }
}

fillGrid(16);