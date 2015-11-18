class Path {

    constructor(points) {
        this._path = points || [];
        this._incremented = false;
    }

    get incremented() {
        return this._incremented;
    }

    get lastPoint() {
        this._incremented = false;
        return this._path[this._path.length - 1];
    }

    get clonePoints() {
        return this._path.slice(0, this._path.length-1);
    }

    //
    // Public methods
    //

    addPoint(point) {
        this._incremented = true;
        this._path.push(point);
    }

    highlight() {
        if (this._incremented) {
            this._path.pop();
        }
        for (let i=1, l= this._path.length; i < l; i++) {
            let point= this._path[i];
            point.highlighted = true;
            point.position = i-1;
        }
    }
}

export default Path;
