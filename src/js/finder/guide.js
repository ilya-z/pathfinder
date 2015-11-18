import Path from './path.js';

class Guide {

    constructor(area) {

        this._area = area;
        this._finish = area.finish;
        this._complited = false;

        var path = new Path();
        path.addPoint(area.start);

        this._paths = new Set();
        this._paths.add(path);
    }

    //
    // Own methods
    //

    _findNextStep(path) {

        if (!path || this._complited) return;

        var x = path.lastPoint.x;
        var y = path.lastPoint.y;
        var p = Array.from([[y, x+1], [y+1, x], [y-1, x], [y, x-1]],
                            arg => this._area.getPoint(arg[0], arg[1]));

        p.map( p => this._checkStep(p, path) );

        if (!path.incremented) {
            this._paths.delete(path);   // a deadlock
        }
    }

    _checkStep(p, path) {

        if (!p) return; // or exception

        if ( p.x === this._finish.x && p.y === this._finish.y ) {

            this._complited = true;  // find exit

            path.highlight();

        } else if (p.enabled) {

            p.enabled = false;

            if (path.incremented) {
                path = new Path(path.clonePoints);
                this._paths.add( path );
            }

            path.addPoint(p);
        }
    }

    //
    // Public methods
    //

    find() {
        while (this._paths.size && !this._complited) {
            this._paths.forEach(this._findNextStep, this);
        }
    }
}

export default Guide;
