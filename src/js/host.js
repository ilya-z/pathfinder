import Area from './map/area.js';
import Guide from './finder/guide.js';
import Renderer from './render/renderer.js';
import SvgRenderer from './render/svg.js';

class Host {

    constructor() {
        this.area = new Area();
        this._renderer = new SvgRenderer();
    }

    //
    // Private methods
    //

    _render() {
        return this._renderer.render(this.area.source);
    }

    //
    // Public methods
    //

    set renderer (r) {
        if (r instanceof Renderer) {
            this._renderer = r;
        }
    }

    redrawTo(id) {
        document.getElementById(id).innerHTML = this._render();
    }

    renderTo(id) {

        this.area.generate();
        var guide = new Guide(this.area);
        guide.find();

        document.getElementById(id).innerHTML = this._render();
    }
}

export default Host;