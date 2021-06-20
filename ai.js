var ai;
(function (ai) {
    window.addEventListener("load", init);
    let c2d;
    let canvas;
    let r;
    function init(_e) {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.height = screen.height / 1.5;
        canvas.width = screen.width / 2.5;
        c2d = canvas.getContext("2d");
        loadCanvasData();
    }
    function loadCanvasData() {
        c2d.clearRect(0, 0, canvas.width, canvas.height);
        disp(ai.set5);
    }
    function disp(_coordinates) {
        let numFS = -1;
        console.log(_coordinates[1].geometry.coordinates[1]);
        c2d.strokeStyle = "black";
        c2d.beginPath();
        /* c2d.fillStyle = "#" + _coordinates[0].properties.ele.toString().slice(3) + _coordinates[3].properties.ele.toString().slice(3);
        console.log(c2d.fillStyle) */
        /* c2d.moveTo(500, 500);
        c2d.lineTo(300,300);
         */
        for (let key in _coordinates) {
            numFS++;
            console.log(numFS);
            let value = _coordinates[key];
            c2d.lineTo(value.properties.ele.toString().slice(-3), value.geometry.coordinates[1].toString().slice(-3));
            console.log(value.properties.ele.toString().slice(-3), value.geometry.coordinates[1].toString().slice(-3));
        }
        c2d.closePath();
        c2d.stroke();
    }
    /* let random: number = Math.floor(Math.random() * 4);
                switch (random) {
                    case 0:
                        console.log("beziercurve");
                        let x: number = Math.floor(value.geometry.coordinates[1] * canvas.width);
                        let y: number = Math.floor(value.geometry.coordinates[1] * canvas.height);
                        let dx1: number = Math.floor(Math.random() * canvas.width);
                        let dy1: number = Math.floor(Math.random() * canvas.height);
                        let dx2: number = Math.floor(Math.random() * canvas.width);
                        let dy2: number = Math.floor(Math.random() * canvas.height);
                        c2d.bezierCurveTo(dx1, dy1, dx2, dy2, x, y);
                        c2d.stroke();
                        break;
                    case 1:
                        console.log("rectangle");
                        let xrect: number = Math.floor(Math.random() * canvas.width);
                        let yrect: number = Math.floor(Math.random() * canvas.height);
                        let wrect: number = Math.floor(value.properties.ele);
                        let hrect: number = Math.floor(value.properties.ele) * Math.floor(Math.random() * canvas.width)
                        c2d.rect(xrect, yrect, wrect, hrect);
                        get_r();
                        if (r > 0.5) {
                            c2d.fillStyle = "#" + Math.floor(Math.random() * 999).toString + Math.floor(value.properties.ele).toString;
                            c2d.fill();
                            console.log(c2d.fillStyle);
                        }
                        c2d.stroke();
                        break;
                    case 2:
                        let xarc: number = value.geometry.coordinates[1];
                        let yarc: number = Math.floor(value.geometry.coordinates[1] * Math.random());
                        let arcradius: number = Math.floor(value.properties.ele * 0.1);
                        let arcstart: number = Math.random() * 360;
                        let arcend: number = Math.PI * 2;
                        get_r();
                        console.log(xarc, yarc);
                        c2d.arc(xarc, yarc, arcradius, arcstart, arcend, false);
                        if (r > 0.5) {
                            
                            c2d.fillStyle = "#" + Math.floor(Math.random() * 999).toString + Math.floor(value.properties.ele).toString;
                            c2d.fill();
                            console.log(c2d.fillStyle);
                        }
                        c2d.closePath;
                        c2d.stroke();
                        break;
                    case 3:
                        console.log("Line");
                        c2d.lineTo(Math.floor(value.geometry.coordinates[1] * Math.random()), value.geometry.coordinates[2] * Math.random());
                        c2d.stroke();
                        break;
                    case 4:
                        console.log("case 4");
                        c2d.beginPath();
                        c2d.arc(30, 30, 50, 0, 2 * Math.PI, false);
                        c2d.closePath();
                        c2d.fillStyle = "#e9ffff";
                        c2d.fill();
                        c2d.stroke();
                        break;
                    default:
                        console.log("you got bamboozled");
                        break;
                }
                for (let i: number = 0; i < value.length; i++) {
    
                }*/
})(ai || (ai = {}));
//# sourceMappingURL=ai.js.map