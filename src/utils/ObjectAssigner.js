var _typeof =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
        }
        : function (obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function isObject(item) {
    return (
        item &&
        (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" &&
        !Array.isArray(item)
    );
}

function objectAssign(target) {
    for (
        var _len = arguments.length,
            sources = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
        _key < _len;
        _key++
    ) {
        sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
                objectAssign(target[key], source[key]);
            } else {
                Object.assign(target, _defineProperty({}, key, source[key]));
            }
        }
    }
    return objectAssign.apply(undefined, [target].concat(sources));
}



module.exports.objectAssign = objectAssign;
