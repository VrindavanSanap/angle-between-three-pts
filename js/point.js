function get_angle(point1, point2, point3 = false) {
    let angle = 0;
    if (!point3) {
        let dy = point1.y - point2.y;
        let dx = point1.x - point2.x;
        angle = Math.atan2(dy, dx);
        angle = rad_to_deg(angle);
        if (angle < 0) {
            angle += 360;
        }
    } else {
        let angle1 = get_angle(p1, p2);
        let angle2 = get_angle(p2, p3);
        angle = 180 + (angle2 - angle1);
    }
    return angle;
}
class Point {
    constructor(width_ = 0, height_ = 0, x = Math.random() * width_, y = Math.random() * height_) {
        this.x = x;
        this.y = y;
        this.radius = 15;
    }
    line(other) {
        stroke(255)
        strokeWeight(3)
        line(this.x, this.y, other.x, other.y)
    }
    display() {
        fill(255)
        circle(this.x, this.y, this.radius);
    }
    highlight() {
        fill(255, 0, 0)
        circle(this.x, this.y, this.radius);
    }
    set_pos(x, y) {
        this.x = x
        this.y = y
    }
    get_angle(prev1, prev2=false) {
        if (!prev2) {
           return get_angle(prev1, this) 
        } else {
            return get_angle(prev2, prev1, this)
        }

    }
    update(mouse_x, mouse_y, mouse_is_pressed) {
        let distance = dist(mouse_x, mouse_y, this.x, this.y);
        if (distance < this.radius * 1.5) {
            this.highlight();
            if (mouse_is_pressed) {
                this.set_pos(mouse_x, mouse_y);
            }
        }
    }
}
