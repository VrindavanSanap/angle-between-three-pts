let p1;
let p2;
let p3;
let selected;
let points;
let angle;
let angle_p_tag;
function setup() {
    createCanvas(400, 400);
    p1 = new Point(width, height, 100, 100);
    p2 = new Point(width, height, 200, 200);
    p3 = new Point(width, height, 300, 250);

    points = [p1, p2, p3];
    angle_p_tag = document.getElementById("angle_p")
}

function get_angle_txt(angle_name, _angle) {
    return `${angle_name} = ${_angle.toFixed(2)}° \n`
}
function draw() {
    background(0);
    p1.line(p2)
    p2.line(p3)
    for (let point of points) {
        point.display();
        point.update(mouseX, mouseY, mouseIsPressed)
    }
    let angle_p1_p2 = p2.get_angle(p1)
    let angle_p2_p3 = p3.get_angle(p2)
    angle = p3.get_angle(p2, p1)
    let angle_p1_p2_txt = get_angle_txt("Angle p1 p2", angle_p1_p2);
    let angle_p2_p3_txt = get_angle_txt("Angle p2 p3", angle_p2_p3);
    angle_txt = get_angle_txt("Angle", angle)
    angle_p_tag.innerText = angle_p1_p2_txt + angle_p2_p3_txt + angle_txt
}

function windowResized() {
}
