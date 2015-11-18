import Point from './point.js';
import {rnd} from './../utils/utils.js';

class Area {

    constructor() {
        this.generate();
    }

    get source() {
        return this._source;
    }

    get start() {
        return this._start;
    }

    get finish() {
        return this._finish;
    }

    //
    // Public methods
    //

    getPoint(i, j) {
        return (i<0 || j<0 || !(this._source[i]) || !(this._source[i][j])) ?
                null : this._source[i][j];
    }

    generate() {

        const   space = " ",
                iam = "@",
                wall = "#",
                exit = "$";

        var area = [];

        for (let i=0; i<41; i++) {
            area.push([]);
            while (area[i].length < 100) {
                let o = rnd(0,3),
                    c = rnd(1,rnd(1,5)),
                    j = area[i].length;

                var arr = Array.from({length: c}, () => {
                    var p = new Point();
                    p.x = j++;
                    p.y = i;
                    p.char = (o) ? space : wall;
                    p.enabled = (o) ? true : false;
                    return p});
                area[i] = area[i].concat(arr);
            }
            area[i].length = 100;
        }

        let pAt = area[rnd(0, 40)][rnd(0, 50)],
            p$ = area[rnd(0, 40)][rnd(50, 100)];
        pAt.char = iam;
        p$.char = exit;

        this._start = pAt;
        this._finish = p$;

        this._source = area;
    }
}

export default Area;