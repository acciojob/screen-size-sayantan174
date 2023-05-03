//your JS code here. If required.
const div = document.getElementById("sizeInfo");
window.addEventListener('resize', updateSize);
function updateSize() {
	div.innerText="";
	const width = window.innerWidth;
	const height = window.innerHeight;
	const h1 = document.createElement("h1");
	h1.innerText=`Width: ${width} and Height: ${height}`;
	div.appendChild(h1);
}