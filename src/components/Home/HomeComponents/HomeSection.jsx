import React from "react";
import Typed from "typed.js";

class HomeSection extends React.Component {
  componentDidMount() {
    var API = (function(window, document, undefined) {
      // Canvas vars
      var canvas = document.getElementById("hero-canvas"),
        ctx = canvas.getContext("2d"),
        cH,
        cW; // Canvas height / Canvas width

      function initCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        cH = canvas.height;
        cW = canvas.width;
      }

      var colors = {
        circle: "white"
      };

      window.onresize = function() {
        initCanvas();
        initScene();
      };
      initCanvas();

      var velocity = 0.5;
      var util = {
        getRandomInt: function(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getRandomVelocity: function() {
          return velocity - Math.random() * 0.5;
        }
      };
      // Math.root
      Math.root = function(val) {
        return val * val;
      };

      // Points class
      var basePointSize = 0.5;
      var Point = function(x, y) {
        var _x = x || util.getRandomInt(0, cW),
          _y = y || util.getRandomInt(0, cH),
          _radius = basePointSize + util.getRandomInt(0, 4);

        var _vx = util.getRandomVelocity(),
          _vy = util.getRandomVelocity();

        // Draw point
        this.drawPoint = function() {
          ctx.beginPath();
          ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
          ctx.fill();
        };

        // Getters
        this.x = function() {
          return _x;
        };
        this.y = function() {
          return _y;
        };
        this.size = function() {
          return _radius;
        };

        // Animate
        this.animate = function() {
          if (_y < _radius || _y > cH - _radius) {
            _vy = -1 * _vy;
          } else if (_x < _radius || _x > cW - _radius) {
            _vx = -1 * _vx;
          }
          _x += _vx;
          _y += _vy;
        };

        return this;
      };

      // Line between 2 points
      var Line = function(point1, point2, distance) {
        var t1 = minDist * (point1.size() / 2),
          t2 = minDist * (point2.size() / 2);

        var threShould = t1 > t2 ? t1 : t2;

        if (distance < threShould) {
          var opacity = 1 - distance / threShould * 1.2;
          ctx.strokeStyle = "rgba(255, 255,255," + opacity + ")";

          ctx.beginPath();
          ctx.moveTo(point1.x(), point1.y());
          ctx.lineTo(point2.x(), point2.y());
          ctx.stroke();
        }
      };

      // Number of generated pointsm points array, min dits between points
      var pointsNumber, points, minDist;

      var refValue = {
        surface: 736000,
        dotsNumber: 260,
        minDistBetweenDots: 80
      };

      var passedVal;
      // Create Points
      function initScene(dotCount) {
        passedVal = passedVal || dotCount;

        function randomIntFromInterval(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }

        const mobilecheck = function() {
          var check = false;
          (function(a) {
            if (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
              )
            )
              check = true;
          })(navigator.userAgent || navigator.vendor || window.opera);
          return check;
        };

        if (mobilecheck()) {
          pointsNumber = randomIntFromInterval(75, 150);
        } else pointsNumber = randomIntFromInterval(250, 500);

        minDist = refValue.minDistBetweenDots;

        points = [];
        for (var i = 0; i < pointsNumber; i++) {
          points.push(new Point());
          points[i].drawPoint();
        }

        ctx.fillStyle = colors.circle;
        ctx.lineWidth = 0.5;
      }

      // Update values and redraw
      function updateScene() {
        ctx.clearRect(0, 0, cW, cH);

        // For all points
        for (var i = 0; i < pointsNumber; i++) {
          // Move points
          points[i].animate();

          for (var j = i; j < pointsNumber; j++) {
            // Make line between 2 points
            new Line(
              points[i],
              points[j],
              Math.sqrt(Math.root(points[j].x() - points[i].x()) + Math.root(points[j].y() - points[i].y()))
            );
          }

          // Draw point last to overlad lines
          points[i].drawPoint();
        }
      }

      // Add point at given coordinate
      function bindClickToAddPoint() {
        function addPoint(x, y) {
          ++pointsNumber;
          points.push(new Point(x, y));
        }

        canvas.addEventListener("click", function(event) {
          var rect = canvas.getBoundingClientRect();
          addPoint(event.clientX - rect.left, event.clientY - rect.top);
        });
      }

      return {
        init: initScene,
        update: updateScene,
        bindClick: bindClickToAddPoint
      };
    })(window, document);

    (function() {
      API.init();
      API.bindClick();

      (function animate() {
        API.update();
        requestAnimationFrame(animate);
      })();
    })();

    
      // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const strings = ['Focused',
      'Passionate',
    '<i>Creative MERN stack developer devoted to crafting solutions and delighting clients</i>']
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: strings,
        typeSpeed: -100,
        backSpeed: 1,
        showCursor: false
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div id="hero">
        <canvas id="hero-canvas" data-paper-resize="true" />

        <div id="hello">
          <h1>I'm Kyle Belfort</h1>
          <h4 ref={(el) => { this.el = el; }} >
</h4>
        </div>

      </div>
    );
  }
}

export default HomeSection;
