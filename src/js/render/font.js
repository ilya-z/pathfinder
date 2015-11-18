import Renderer from "./renderer.js";

class FontRenderer extends Renderer {

    render(source) {

        var output = "";

        for (let i=0, l=source.length; i<l; i++) {
            let arr = source[i] || [];
            arr.forEach(function( point) {
                output += (point.highlighted) ? "<b>+</b>" :
                          (point.char === "$" ||  point.char === "@") ? '<i>' + point.char + "</i>" : point.char;
            });
            output += "\n"
        }

        return "<pre>" + output + "</pre>";
    }

}

export default FontRenderer;