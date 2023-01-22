function randomNum(max, min = 0) {
    return min + Math.round(Math.random() * (max - min));
}

function setup() {
    const canvas = document.querySelector("#canvas1");

    if (!canvas) {
        return;
    }

    /* to scale the canvas to the screen!  */
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const ctx = canvas.getContext("2d");
    const radiantMouse = 64 / 2;
    ctx.strokeStyle = "rgb(248,248,255,1)";
    ctx.lineWidth = 2;

    let circles = [];
    let posX;
    let posY;
    let distance = 126;
    let previousX, previousY, previousTime, velocity;

    function Circle() {
        this.radiant = randomNum(360, 1);
        this.x = posX;
        this.y = posY;
        this.newBallX =
            radiantMouse * Math.cos(2 * Math.PI * (this.radiant / 360)) +
            this.x;
        this.newBallY =
            radiantMouse * Math.sin(2 * Math.PI * (this.radiant / 360)) +
            this.y;
        this.opacity = 1;
        if (velocity < 0.3) {
            this.r = 10;
        } else if (velocity < 0.8) {
            this.r = 15;
        } else if (velocity < 1.2) {
            this.r = 25;
        } else {
            this.r = 30;
        }
        this.color = `${randomNum(255, 0)},${randomNum(255, 0)},${randomNum(
            255,
            0
        )}`;
        this.newX = distance * Math.cos(2 * Math.PI * (this.radiant / 360));
        this.newY = distance * Math.sin(2 * Math.PI * (this.radiant / 360));
        this.radiant =
            this.radiant - 180 > 0 ? this.radiant - 180 : this.radiant + 180;
        this.velocity = velocity;
        this.ballVelocity = this.velocity + 1;
        this.endX = this.newBallX * this.ballVelocity;
        this.endX =
            this.newBallX > this.x
                ? this.newBallX * this.ballVelocity
                : this.newBallX -
                  (this.newBallX * this.ballVelocity - this.newBallX);
        this.magnitude = (this.endX - this.newBallX) / 60;
        this.exponent = 0;
    }

    // calculation endpoint of ball movement

    /* function calcCoordinates(coordinate1, newCoordinate1, multi) {
        return (coordinate1 += (newCoordinate1 - coordinate1) * multi);
    } */

    // f(z) = (newY - mouseY)/(newX-mouseX)z + newY -((newY-mouseY)*newX)/(newX -mouseX)

    // fix formular (newX * multi) => Z since we only need to give it 1 time the coordinates to create to liniar function
    /*  function calcCoordinates(newX, newY, mouseX, mouseY, start, multi) {
        if (newX == mouseX) {
            return newY + multi;
        }
        return (
            ((newY - mouseY) / (newX - mouseX)) * (start + multi) +
            newY -
            ((newY - mouseY) * newX) / (newX - mouseX)
        );
    } */

    // velocity

    function calcVelocity() {
        let currentTime = Date.now();

        if (
            previousX !== undefined &&
            previousY !== undefined &&
            previousTime !== undefined
        ) {
            let distanceX = posX - previousX;
            let distanceY = posY - previousY;
            let distance = Math.sqrt(
                distanceX * distanceX + distanceY * distanceY
            );
            let time = currentTime - previousTime;
            let rawVelocity = distance / time;
            if (rawVelocity !== Infinity) {
                velocity = rawVelocity;
            }
        }

        previousX = posX;
        previousY = posY;
        previousTime = currentTime;
    }

    canvas.onmousemove = function (event) {
        posX = event.clientX;
        posY = event.clientY;
        calcVelocity();
        if (randomNum(2, 0) < velocity) {
            circles.push(new Circle());
        }
    };

    window.requestAnimationFrame(animate);

    // drawing the balls that are inside the array
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < circles.length; i++) {
            if (circles[i].opacity == 0) {
                circles.shift();
            }
            ctx.fillStyle = `rgb(${circles[i].color},${circles[i].opacity})`;
            ctx.beginPath();
            // change back to 0.3 after tests are over
            /*if (circles[i].velocity > 0.3  && circles[i].magnitude > 0.3 ) {*/
            /*                 ctx.arc(
                    circles[i].newBallX,
                    circles[i].newBallY,
                    circles[i].r,
                    0,
                    Math.PI * 2.0
                );

                circles[i].newBallY = calcCoordinates(
                    circles[i].newBallX,
                    circles[i].newBallY,
                    circles[i].x,
                    circles[i].y,
                    circles[i].newBallX,
                    circles[i].magnitude
                );
                circles[i].newBallX += circles[i].magnitude;
                circles[i].magnitude =
                    circles[i].magnitude *
                    Math.pow(1 / 1.006, circles[i].exponent);
                circles[i].exponent += 1;
            } else { */
            ctx.arc(
                circles[i].x +
                    circles[i].newX +
                    distance *
                        Math.cos(2 * Math.PI * (circles[i].radiant / 360)),
                circles[i].y +
                    circles[i].newY +
                    distance *
                        Math.sin(2 * Math.PI * (circles[i].radiant / 360)),
                circles[i].r,
                0,
                Math.PI * 2.0
            );

            circles[i].radiant += 1;
            ctx.fill();
            // rate at which balls loses opacity
            circles[i].opacity -= 0.005;
            if (circles[i].r > 0.3) {
                // rate at which balls loses radius
                circles[i].r -= 0.15;
            }
        }
        // drawing the main mouse circle
        ctx.fillStyle = "rgb(248,248,255,1)";
        ctx.beginPath();
        ctx.arc(posX, posY, radiantMouse, 0, Math.PI * 2.0);
        ctx.fill();
        window.requestAnimationFrame(animate);
    }
}

setup();
