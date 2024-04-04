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
    angle(prev1, prev2) {
        let angle = Math.atan2(prev1.y - prev1.y, prev2.x - prev2.x);
        angle = rad_to_deg(angle)
        return angle;
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
