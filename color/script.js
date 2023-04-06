let container = document.querySelector('.Container');
let form = document.querySelector('form[name="color"]');
let color = form.querySelector('input[name="userColor"]');
let btn = form.querySelector('input[type="button"]');
let result = container.querySelector('.result');
btn.onclick = function (){
    let hexColor = color.value;
    let rRGB = hexColor[1] + hexColor[2];
    let gRGB = hexColor[3] + hexColor[4];
    let bRGB = hexColor[5] + hexColor[6];
      

    result.innerHTML=`<b>HEX:</b> <label style="color: ${color.value}">${color.value}</label>
    <br>
    <b>RGB:</b>
    <label style="color: ${color.value}">
    rgb(${parseInt(rRGB, 16)}, ${parseInt(gRGB, 16)}, ${parseInt(bRGB, 16)})
    </label>`
}