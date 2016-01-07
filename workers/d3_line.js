/* eslint-disable camelcase, curly */

'use strict';

function d3_svg_line() {

  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  function d3_true() {
    return true;
  }
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }

  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }

  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }

  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }

  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }

  var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
  function line(data) {
    var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
    function segment() {
      segments.push("M", interpolate(points, tension));
    }
    while (++i < n) {
      if (defined.call(this, d = data[i], i)) {
        points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
      } else if (points.length) {
        segment();
        points = [];
      }
    }
    if (points.length) segment();
    return segments.length ? segments.join("") : null;
  }
  line.x = function(_) {
    if (!arguments.length) return x;
    x = _;
    return line;
  };
  line.y = function(_) {
    if (!arguments.length) return y;
    y = _;
    return line;
  };
  line.defined = function(_) {
    if (!arguments.length) return defined;
    defined = _;
    return line;
  };
  line.interpolate = function(_) {
    if (!arguments.length) return interpolateKey;
    if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineBasis || d3_svg_lineLinear).key;
    return line;
  };
  line.tension = function(_) {
    if (!arguments.length) return tension;
    tension = _;
    return line;
  };
  return line;
}

module.exports = d3_svg_line();
