import Host from './host.js';
import FontRenderer from './render/font.js';
import SvgRenderer from './render/svg.js';

document.addEventListener("DOMContentLoaded", function(event) {

    var host = new Host();
    host.renderTo('area');

    document.getElementById("buttonGenerate").addEventListener("click", function() {
        if (DEBUG) console.time('main');
        host.renderTo('area');
        if (DEBUG) console.timeEnd('main');
    });

    Array.from(document.getElementsByName("radioHowRender")).forEach(function(item) {
        item.addEventListener("click", function() {
            if (this.value === "svg") {
                host.renderer = new SvgRenderer();
            } else if (this.value === "font") {
                host.renderer = new FontRenderer();
            }
            host.redrawTo('area');
        });
    });
});
