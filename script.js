const container = document.querySelector('.grid');
const SIDE = 300;
let initDimension = 16;
let defaultColor = "blanchedalmond";
const rainbowChecked = document.getElementById('rainbow-checkbox');

const randRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const redrawGrid = (curDimension) => {
    const newDivision = SIDE / curDimension;
    const newCells = Array.from({length: curDimension * curDimension}, () => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height= `${newDivision}px`;
        cell.style.width = `${newDivision}px`;
        cell.addEventListener("pointerenter", (e) => {
            e.target.style.backgroundColor = rainbowChecked.checked ? randRGB() : defaultColor;
        });
        return cell;
    })
    container.replaceChildren(...newCells);
}

redrawGrid(initDimension);

const dimensionSlider = document.getElementById("cell-dimension");
dimensionSlider.addEventListener("input", (e) => {
    e.target.nextElementSibling.textContent = `${e.target.value} X ${e.target.value}`
});
dimensionSlider.addEventListener("change", (e) => {
    redrawGrid(e.target.value);
});

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener("input", (e) => {
    rainbowChecked.checked = false;
    defaultColor = e.target.value;
});