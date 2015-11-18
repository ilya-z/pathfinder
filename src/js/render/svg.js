import Renderer from "./renderer.js";

class SvgRenderer extends Renderer {

    render(source) {

        var output = "",
            path = "",
            pathArr = [],
            w = 12,
            h = 12,
            finish = '';

        for (let i=0, l=source.length; i<l; i++) {
            let arr = source[i] || [];
            arr.forEach(function( point) {
                if (point.highlighted) {
                    pathArr[point.position] = point;
                } else {
                    let pClass = null;
                    if (point.char === "@") {
                        path += "M " + (point.x*w + w/2) + " " + (point.y*h + h/2) + " ";
                        pClass = 'point';
                    } else if (point.char === "$") {
                        finish = (point.x*w + w/2) + " " + (point.y*h + h/2) + " ";
                        pClass = 'point';
                    } else if (point.char === "#") {
                        pClass = 'wall';
                    }
                    if (pClass) output += '<rect x="' + point.x*w + '" y="' + point.y*h + '" width="' + w + '" height="' + h + '" class="' + pClass + '" />';
                }
            });
        }

        pathArr.forEach(function(point) {
            path += (point.x*w + w/2) + " " + (point.y*h + h/2) + " ";
        });
        path += (pathArr.length) ? finish : '';
        path = '<path id="path" d="' + path + '" stroke="#FF1100" stroke-width="1.2" fill="none" stroke-linecap="square"/>';
        output = path + output;

        setTimeout(function() {
            var handle = null,
                current_frame = 0,
                path = document.getElementById('path'),
                l = path.getTotalLength();

            path.style.strokeDasharray = l + ' ' + l;
            path.style.strokeDashoffset = l;

            var draw = function() {
                var progress = current_frame/40;
                if (progress > 1) {
                    window.cancelAnimationFrame(handle);
                } else {
                    current_frame++;
                    path.style.strokeDashoffset = Math.floor(l * (1 - progress));
                    handle = window.requestAnimationFrame(draw);
                }
            };
            draw();
        }, 0);

        return '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 492">' +
                    '<style type="text/css">' +
                        'svg{font:12px sans-serif;}' +
                        'text{fill:white;text-anchor:end;}' +
                        'path:hover{stroke:#000000;}' +
                        'rect.wall{fill:#C7CBE1;stroke:#000;stroke-width:0.2}' +
                        'rect.point{fill:#FF1100;stroke:#000;stroke-width:0.2}' +
                    '</style>' + output + '</svg>';
    }
}

export default SvgRenderer;