/*
  Note that re-exported types should be explicitly and separately exported
  as types because of issues with parceljs

  The error messages will be very perplexing

  https://github.com/parcel-bundler/parcel/issues/4796
  https://github.com/parcel-bundler/parcel/issues/4240
  https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/#type-only-imports-exports
*/ const $519f1ddd575d759f$export$a5a6e0b888b2c992 = {
    debug: false,
    perf: false
};
function $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(obj) {
    if (obj == null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map($519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27);
    const clone = {};
    for(const key in obj){
        const val = obj[key];
        if (obj != null && typeof obj === "object") clone[key] = $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(val);
        else clone[key] = val;
    }
    return clone;
}
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$c6592bbc1eebb717 = "-xin-data";
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac = `.${$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$c6592bbc1eebb717}`;
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$6a7099543a9795c7 = "-xin-event";
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$21d9322c3477441b = `.${$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$6a7099543a9795c7}`;
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a = Symbol("xin-path");
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534 = Symbol("xin-value");
const $519f1ddd575d759f$export$40700dafb97c3799 = (x)=>{
    return x[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a];
};
function $519f1ddd575d759f$export$5dcba2d45033d435(x) {
    // eslint-disable-next-line
    return typeof x === "object" && x !== null ? x[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] || x : x;
}
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613 = new WeakMap();
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e = new WeakMap();
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4cac8128ba61a55f = (element)=>{
    return {
        eventBindings: $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(element),
        dataBindings: $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element)
    };
};
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f = (element)=>{
    const cloned = element.cloneNode();
    if (cloned instanceof HTMLElement) {
        const dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element);
        const eventHandlers = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(element);
        if (dataBindings != null) $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.set(cloned, $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(dataBindings));
        if (eventHandlers != null) $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.set(cloned, $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(eventHandlers));
    }
    for (const node of element instanceof HTMLTemplateElement ? element.content.childNodes : element.childNodes)if (node instanceof HTMLElement || node instanceof DocumentFragment) cloned.appendChild($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(node));
    else cloned.appendChild(node.cloneNode());
    return cloned;
};
const $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06 = new WeakMap();
const $519f1ddd575d759f$export$4c309843c07ce679 = (element)=>{
    const html = document.body.parentElement;
    while(element.parentElement != null && element.parentElement !== html){
        const item = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.get(element);
        if (item != null) return item;
        element = element.parentElement;
    }
    return false;
};
const $519f1ddd575d759f$export$253d09664e30b967 = Symbol("observer should be removed");
const $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67 = [] // { path_string_or_test, callback }
;
const $519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths = [];
let $519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered = false;
let $519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise;
let $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate;
class $519f1ddd575d759f$var$$f0b099915f91bd21$export$c92b1d5f43586026 {
    constructor(test, callback){
        const callbackDescription = typeof callback === "string" ? `"${callback}"` : `function ${callback.name}`;
        let testDescription;
        if (typeof test === "string") {
            this.test = (t)=>typeof t === "string" && t !== "" && (test.startsWith(t) || t.startsWith(test));
            testDescription = `test = "${test}"`;
        } else if (test instanceof RegExp) {
            this.test = test.test.bind(test);
            testDescription = `test = "${test.toString()}"`;
        } else if (test instanceof Function) {
            this.test = test;
            testDescription = `test = function ${test.name}`;
        } else throw new Error("expect listener test to be a string, RegExp, or test function");
        this.description = `${testDescription}, ${callbackDescription}`;
        if (typeof callback === "function") this.callback = callback;
        else throw new Error("expect callback to be a path or function");
        $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.push(this);
    }
}
const $519f1ddd575d759f$var$$f0b099915f91bd21$export$1c2919332513559b = async ()=>{
    if ($519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise === undefined) return;
    await $519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise;
};
const $519f1ddd575d759f$var$$f0b099915f91bd21$var$update = ()=>{
    if ($519f1ddd575d759f$export$a5a6e0b888b2c992.perf) console.time("xin async update");
    const paths = [
        ...$519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths
    ];
    for (const path of paths)$519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.filter((listener)=>{
        let heard;
        try {
            heard = listener.test(path);
        } catch (e) {
            throw new Error(`Listener ${listener.description} threw "${e}" at "${path}"`);
        }
        if (heard === $519f1ddd575d759f$export$253d09664e30b967) {
            $519f1ddd575d759f$export$23a2283368c55ea2(listener);
            return false;
        }
        return heard;
    }).forEach((listener)=>{
        let outcome;
        try {
            outcome = listener.callback(path);
        } catch (e) {
            console.error(`Listener ${listener.description} threw "${e}" handling "${path}"`);
        }
        if (outcome === $519f1ddd575d759f$export$253d09664e30b967) $519f1ddd575d759f$export$23a2283368c55ea2(listener);
    });
    $519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths.splice(0);
    $519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered = false;
    if (typeof $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate === "function") $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate();
    if ($519f1ddd575d759f$export$a5a6e0b888b2c992.perf) console.timeEnd("xin async update");
};
const $519f1ddd575d759f$export$d0b7ea69ab6056df = (touchable)=>{
    const path = typeof touchable === "string" ? touchable : $519f1ddd575d759f$export$40700dafb97c3799(touchable);
    if (path === undefined) {
        console.error("touch was called on an invalid target", touchable);
        throw new Error("touch was called on an invalid target");
    }
    if ($519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered === false) {
        $519f1ddd575d759f$var$$f0b099915f91bd21$var$updatePromise = new Promise((resolve)=>{
            $519f1ddd575d759f$var$$f0b099915f91bd21$var$resolveUpdate = resolve;
        });
        $519f1ddd575d759f$var$$f0b099915f91bd21$var$updateTriggered = setTimeout($519f1ddd575d759f$var$$f0b099915f91bd21$var$update);
    }
    if ($519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths.find((touchedPath)=>path.startsWith(touchedPath)) == null) $519f1ddd575d759f$var$$f0b099915f91bd21$var$touchedPaths.push(path);
};
const $519f1ddd575d759f$var$$f0b099915f91bd21$export$d1203567a167490e = (test, callback)=>{
    return new $519f1ddd575d759f$var$$f0b099915f91bd21$export$c92b1d5f43586026(test, callback);
};
const $519f1ddd575d759f$export$23a2283368c55ea2 = (listener)=>{
    const index = $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.indexOf(listener);
    if (index > -1) $519f1ddd575d759f$var$$f0b099915f91bd21$export$58bed631278dbc67.splice(index, 1);
    else throw new Error("unobserve failed, listener not found");
};
// unique tokens passed to set by path to delete or create properties
const $519f1ddd575d759f$var$$31366a4b885eb48b$var$stringify = (x)=>{
    try {
        return JSON.stringify(x);
    } catch (_) {
        return "{has circular references}";
    }
};
const $519f1ddd575d759f$var$$31366a4b885eb48b$export$5a4bb2b1c89bdce7 = (...messages)=>new Error(messages.map($519f1ddd575d759f$var$$31366a4b885eb48b$var$stringify).join(" "));
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$now36 = ()=>new Date(parseInt("1000000000", 36) + Date.now()).valueOf().toString(36).slice(1);
let $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_seq = 0;
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$seq = ()=>(parseInt("10000", 36) + ++$519f1ddd575d759f$var$$c62be31ef05b0c90$var$_seq).toString(36).slice(-5);
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$id = ()=>$519f1ddd575d759f$var$$c62be31ef05b0c90$var$now36() + $519f1ddd575d759f$var$$c62be31ef05b0c90$var$seq();
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_ = {};
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_newObject_ = {};
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f5d2dd4cfd729958(path) {
    if (path === "") return [];
    if (Array.isArray(path)) return path;
    else {
        const parts = [];
        while(path.length > 0){
            let index = path.search(/\[[^\]]+\]/);
            if (index === -1) {
                parts.push(path.split("."));
                break;
            } else {
                const part = path.slice(0, index);
                path = path.slice(index);
                if (part !== "") parts.push(part.split("."));
                index = path.indexOf("]") + 1;
                parts.push(path.slice(1, index - 1));
                // handle paths dereferencing array element like foo[0].id
                if (path.slice(index, index + 1) === ".") index += 1;
                path = path.slice(index);
            }
        }
        return parts;
    }
}
const $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps = new WeakMap();
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath) {
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array) === undefined) $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.set(array, {});
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] === undefined) $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] = {};
    const map = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath];
    if (idPath === "_auto_") array.forEach((item, idx)=>{
        if (item._auto_ === undefined) item._auto_ = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$id();
        map[item._auto_ + ""] = idx;
    });
    else array.forEach((item, idx)=>{
        map[$519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(item, idPath) + ""] = idx;
    });
    return map;
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$getIdPathMap(array, idPath) {
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array) === undefined || $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] === undefined) return $519f1ddd575d759f$var$$c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath);
    else return $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.get(array)[idPath];
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$keyToIndex(array, idPath, idValue) {
    idValue = idValue + "";
    let idx = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$getIdPathMap(array, idPath)[idValue];
    if (idx === undefined || $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(array[idx], idPath) + "" !== idValue) idx = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath)[idValue];
    return idx;
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byKey(obj, key, valueToInsert) {
    if (obj[key] === undefined && valueToInsert !== undefined) obj[key] = valueToInsert;
    return obj[key];
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byIdPath(array, idPath, idValue, valueToInsert) {
    let idx = idPath !== "" ? $519f1ddd575d759f$var$$c62be31ef05b0c90$var$keyToIndex(array, idPath, idValue) : idValue;
    if (valueToInsert === $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_) {
        array.splice(idx, 1);
        $519f1ddd575d759f$var$$c62be31ef05b0c90$var$idPathMaps.delete(array);
        return Symbol("deleted");
    } else if (valueToInsert === $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_newObject_) {
        if (idPath === "" && array[idx] === undefined) array[idx] = {};
    } else if (valueToInsert !== undefined) {
        if (idx !== undefined) array[idx] = valueToInsert;
        else if (idPath !== "" && $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(valueToInsert, idPath) + "" === idValue + "") {
            array.push(valueToInsert);
            idx = array.length - 1;
        } else throw new Error(`byIdPath insert failed at [${idPath}=${idValue}]`);
    }
    return array[idx];
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectArray(obj) {
    if (!Array.isArray(obj)) throw $519f1ddd575d759f$var$$31366a4b885eb48b$export$5a4bb2b1c89bdce7("setByPath failed: expected array, found", obj);
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectObject(obj) {
    if (obj == null || !(obj instanceof Object)) throw $519f1ddd575d759f$var$$31366a4b885eb48b$export$5a4bb2b1c89bdce7("setByPath failed: expected Object, found", obj);
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(obj, path) {
    const parts = $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f5d2dd4cfd729958(path);
    let found = obj;
    let i, iMax, j, jMax;
    for(i = 0, iMax = parts.length; found !== undefined && i < iMax; i++){
        const part = parts[i];
        if (Array.isArray(part)) for(j = 0, jMax = part.length; found !== undefined && j < jMax; j++){
            const key = part[j];
            found = found[key];
        }
        else {
            if (found.length === 0) {
                // @ts-expect-error-error
                found = found[part.slice(1)];
                if (part[0] !== "=") return undefined;
            } else if (part.includes("=")) {
                const [idPath, ...tail] = part.split("=");
                found = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byIdPath(found, idPath, tail.join("="));
            } else {
                j = parseInt(part, 10);
                found = found[j];
            }
        }
    }
    return found;
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f65a19d15516795e(orig, path, val) {
    let obj = orig;
    const parts = $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f5d2dd4cfd729958(path);
    while(obj != null && parts.length > 0){
        const part = parts.shift();
        if (typeof part === "string") {
            const equalsOffset = part.indexOf("=");
            if (equalsOffset > -1) {
                if (equalsOffset === 0) $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectObject(obj);
                else $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectArray(obj);
                const idPath = part.slice(0, equalsOffset);
                const idValue = part.slice(equalsOffset + 1);
                obj = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byIdPath(obj, idPath, idValue, parts.length > 0 ? $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_newObject_ : val);
                if (parts.length === 0) return true;
            } else {
                $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectArray(obj);
                const idx = parseInt(part, 10);
                if (parts.length > 0) obj = obj[idx];
                else {
                    if (val !== $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_) {
                        if (obj[idx] === val) return false;
                        obj[idx] = val;
                    } else obj.splice(idx, 1);
                    return true;
                }
            }
        } else if (Array.isArray(part) && part.length > 0) {
            $519f1ddd575d759f$var$$c62be31ef05b0c90$var$expectObject(obj);
            while(part.length > 0){
                const key = part.shift();
                if (part.length > 0 || parts.length > 0) obj = $519f1ddd575d759f$var$$c62be31ef05b0c90$var$byKey(obj, key, part.length > 0 ? {} : []);
                else {
                    if (val !== $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_) {
                        if (obj[key] === val) return false;
                        obj[key] = val;
                    } else {
                        if (!Object.prototype.hasOwnProperty.call(obj, key)) return false;
                        // eslint-disable-next-line
                        delete obj[key];
                    }
                    return true;
                }
            }
        } else throw new Error(`setByPath failed, bad path ${path}`);
    }
    // eslint-disable-next-line
    throw new Error(`setByPath(${orig}, ${path}, ${val}) failed`);
}
function $519f1ddd575d759f$var$$c62be31ef05b0c90$export$102e532907108dad(orig, path) {
    if ($519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(orig, path) !== null) $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f65a19d15516795e(orig, path, $519f1ddd575d759f$var$$c62be31ef05b0c90$var$_delete_);
}
// list of Array functions that change the array
const $519f1ddd575d759f$var$$547f11326d897190$var$ARRAY_MUTATIONS = [
    "sort",
    "splice",
    "copyWithin",
    "fill",
    "pop",
    "push",
    "reverse",
    "shift",
    "unshift"
];
const $519f1ddd575d759f$var$$547f11326d897190$var$registry = {};
const $519f1ddd575d759f$var$$547f11326d897190$var$debugPaths = true;
const $519f1ddd575d759f$var$$547f11326d897190$var$validPath = /^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/;
const $519f1ddd575d759f$var$$547f11326d897190$export$a678af82bf766611 = (path)=>$519f1ddd575d759f$var$$547f11326d897190$var$validPath.test(path);
const $519f1ddd575d759f$var$$547f11326d897190$var$extendPath = (path = "", prop = "")=>{
    if (path === "") return prop;
    else {
        if (prop.match(/^\d+$/) !== null || prop.includes("=")) return `${path}[${prop}]`;
        else return `${path}.${prop}`;
    }
};
const $519f1ddd575d759f$var$$547f11326d897190$var$regHandler = (path = "")=>({
        // TODO figure out how to correctly return array[Symbol.iterator] so that for(const foo of xin.foos) works
        // as you'd expect
        get (target, _prop) {
            if (_prop === $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a) return path;
            else if (_prop === $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534) return target;
            if (typeof _prop === "symbol") return target[_prop];
            let prop = _prop;
            const compoundProp = prop.match(/^([^.[]+)\.(.+)$/) ?? // basePath.subPath (omit '.')
            prop.match(/^([^\]]+)(\[.+)/) ?? // basePath[subPath
            prop.match(/^(\[[^\]]+\])\.(.+)$/) ?? // [basePath].subPath (omit '.')
            prop.match(/^(\[[^\]]+\])\[(.+)$/) // [basePath][subPath
            ;
            if (compoundProp !== null) {
                const [, basePath, subPath] = compoundProp;
                const currentPath = $519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, basePath);
                const value = $519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(target, basePath);
                return value !== null && typeof value === "object" ? new Proxy(value, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler(currentPath))[subPath] : value;
            }
            if (prop.startsWith("[") && prop.endsWith("]")) prop = prop.substring(1, prop.length - 1);
            if (!Array.isArray(target) && target[prop] !== undefined || Array.isArray(target) && prop.includes("=")) {
                let value;
                if (prop.includes("=")) {
                    const [idPath, needle] = prop.split("=");
                    value = target.find((candidate)=>`${$519f1ddd575d759f$var$$c62be31ef05b0c90$export$44b5bed83342a92f(candidate, idPath)}` === needle);
                } else value = target[prop];
                if (value !== null && typeof value === "object") {
                    const currentPath = $519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, prop);
                    return new Proxy(value, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler(currentPath));
                } else if (typeof value === "function") return value.bind(target);
                else return value;
            } else if (Array.isArray(target)) {
                const value = target[prop];
                return typeof value === "function" ? (...items)=>{
                    // @ts-expect-error
                    const result = Array.prototype[prop].apply(target, items);
                    if ($519f1ddd575d759f$var$$547f11326d897190$var$ARRAY_MUTATIONS.includes(prop)) $519f1ddd575d759f$export$d0b7ea69ab6056df(path);
                    return result;
                } : typeof value === "object" ? new Proxy(value, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler($519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, prop))) : value;
            } else return target[prop];
        },
        set (_, prop, value) {
            // eslint-disable-next-line
            if (value != null && value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a]) value = value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534];
            const fullPath = $519f1ddd575d759f$var$$547f11326d897190$var$extendPath(path, prop);
            if ($519f1ddd575d759f$var$$547f11326d897190$var$debugPaths && !$519f1ddd575d759f$var$$547f11326d897190$export$a678af82bf766611(fullPath)) throw new Error(`setting invalid path ${fullPath}`);
            let existing = $519f1ddd575d759f$export$966034e6c6823eb0[fullPath];
            // eslint-disable-next-line
            if (existing != null && existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] != null) existing = existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534];
            if (existing !== value && $519f1ddd575d759f$var$$c62be31ef05b0c90$export$f65a19d15516795e($519f1ddd575d759f$var$$547f11326d897190$var$registry, fullPath, value)) $519f1ddd575d759f$export$d0b7ea69ab6056df(fullPath);
            return true;
        }
    });
const $519f1ddd575d759f$export$d1203567a167490e = (test, callback)=>{
    const func = typeof callback === "function" ? callback : $519f1ddd575d759f$export$966034e6c6823eb0[callback];
    if (typeof func !== "function") throw new Error(`observe expects a function or path to a function, ${callback} is neither`);
    return $519f1ddd575d759f$var$$f0b099915f91bd21$export$d1203567a167490e(test, func);
};
const $519f1ddd575d759f$export$966034e6c6823eb0 = new Proxy($519f1ddd575d759f$var$$547f11326d897190$var$registry, $519f1ddd575d759f$var$$547f11326d897190$var$regHandler());
const { document: $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document, MutationObserver: $519f1ddd575d759f$var$$b5796eaeba5c782e$var$MutationObserver } = globalThis;
const $519f1ddd575d759f$var$$b5796eaeba5c782e$export$80bf2f765c31be6a = (element, changedPath)=>{
    const dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element);
    for (const dataBinding of dataBindings){
        let { path: path, binding: binding, options: options } = dataBinding;
        const { toDOM: toDOM } = binding;
        if (toDOM != null) {
            if (path.startsWith("^")) {
                const dataSource = $519f1ddd575d759f$export$4c309843c07ce679(element);
                if (dataSource != null && dataSource[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] != null) path = dataBinding.path = `${dataSource[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a]}${path.substring(1)}`;
                else {
                    console.error(`Cannot resolve relative binding ${path}`, element, "is not part of a list");
                    throw new Error(`Cannot resolve relative binding ${path}`);
                }
            }
            if (changedPath == null || path.startsWith(changedPath)) toDOM(element, $519f1ddd575d759f$export$966034e6c6823eb0[path], options);
        }
    }
};
// this is just to allow bind to be testable in node
if ($519f1ddd575d759f$var$$b5796eaeba5c782e$var$MutationObserver != null) {
    const observer = new $519f1ddd575d759f$var$$b5796eaeba5c782e$var$MutationObserver((mutationsList)=>{
        mutationsList.forEach((mutation)=>{
            [
                ...mutation.addedNodes
            ].forEach((node)=>{
                if (node instanceof HTMLElement) [
                    ...node.querySelectorAll($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac)
                ].forEach((element)=>$519f1ddd575d759f$var$$b5796eaeba5c782e$export$80bf2f765c31be6a(element));
            });
        });
    });
    observer.observe($519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body, {
        subtree: true,
        childList: true
    });
}
$519f1ddd575d759f$export$d1203567a167490e(()=>true, (changedPath)=>{
    const boundElements = $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.querySelectorAll($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac);
    for (const element of boundElements)$519f1ddd575d759f$var$$b5796eaeba5c782e$export$80bf2f765c31be6a(element, changedPath);
});
const $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleChange = (event)=>{
    // @ts-expect-error-error
    let target = event.target.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac);
    while(target != null){
        const dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(target);
        for (const dataBinding of dataBindings){
            const { binding: binding, path: path } = dataBinding;
            const { fromDOM: fromDOM } = binding;
            if (fromDOM != null) {
                let value;
                try {
                    value = fromDOM(target, dataBinding.options);
                } catch (e) {
                    console.error("Cannot get value from", target, "via", dataBinding);
                    throw new Error("Cannot obtain value fromDOM");
                }
                if (value != null) {
                    const existing = $519f1ddd575d759f$export$966034e6c6823eb0[path];
                    // eslint-disable-next-line
                    if (existing == null) $519f1ddd575d759f$export$966034e6c6823eb0[path] = value;
                    else {
                        // @ts-expect-error-error
                        const existingActual = existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] != null ? existing[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] : existing;
                        const valueActual = value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] != null ? value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534] : value;
                        if (existingActual !== valueActual) $519f1ddd575d759f$export$966034e6c6823eb0[path] = valueActual;
                    }
                }
            }
        }
        target = target.parentElement.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac);
    }
};
if (globalThis.document != null) {
    $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body.addEventListener("change", $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleChange, true);
    $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body.addEventListener("input", $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleChange, true);
}
function $519f1ddd575d759f$export$2385a24977818dd0(element, what, binding, options) {
    if (element instanceof DocumentFragment) throw new Error("bind cannot bind to a DocumentFragment");
    let path;
    if (typeof what === "object" && what[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a] === undefined && options === undefined) {
        const { value: value } = what;
        path = typeof value === "string" ? value : value[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a];
        options = what;
        delete options.value;
    } else path = typeof what === "string" ? what : what[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$a3622eb3b5dd592a];
    if (path == null) throw new Error("bind requires a path or object with xin Proxy");
    const { toDOM: toDOM } = binding;
    element.classList.add($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$c6592bbc1eebb717);
    let dataBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element);
    if (dataBindings == null) {
        dataBindings = [];
        $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.set(element, dataBindings);
    }
    dataBindings.push({
        path: path,
        binding: binding,
        options: options
    });
    if (toDOM != null && !path.startsWith("^")) $519f1ddd575d759f$export$d0b7ea69ab6056df(path);
    return element;
}
const $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handledEventTypes = new Set();
const $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleBoundEvent = (event)=>{
    // @ts-expect-error-error
    let target = event?.target.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$21d9322c3477441b);
    let propagationStopped = false;
    const wrappedEvent = new Proxy(event, {
        get (target, prop) {
            if (prop === "stopPropagation") return ()=>{
                event.stopPropagation();
                propagationStopped = true;
            };
            else {
                // @ts-expect-error-error
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            }
        }
    });
    // eslint-disable-next-line no-unmodified-loop-condition
    while(!propagationStopped && target != null){
        const eventBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(target);
        // eslint-disable-next-line
        const handlers = eventBindings[event.type] || [];
        for (const handler of handlers){
            if (typeof handler === "function") handler(wrappedEvent);
            else {
                const func = $519f1ddd575d759f$export$966034e6c6823eb0[handler];
                if (typeof func === "function") func(wrappedEvent);
                else throw new Error(`no event handler found at path ${handler}`);
            }
            if (propagationStopped) continue;
        }
        target = target.parentElement != null ? target.parentElement.closest($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$21d9322c3477441b) : null;
    }
};
const $519f1ddd575d759f$export$af631764ddc44097 = (element, eventType, eventHandler)=>{
    let eventBindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.get(element);
    element.classList.add($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$6a7099543a9795c7);
    if (eventBindings == null) {
        eventBindings = {};
        $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fe712848e6e66613.set(element, eventBindings);
    }
    // eslint-disable-next-line
    if (!eventBindings[eventType]) eventBindings[eventType] = [];
    if (!eventBindings[eventType].includes(eventHandler)) eventBindings[eventType].push(eventHandler);
    if (!$519f1ddd575d759f$var$$b5796eaeba5c782e$var$handledEventTypes.has(eventType)) {
        $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handledEventTypes.add(eventType);
        $519f1ddd575d759f$var$$b5796eaeba5c782e$var$document.body.addEventListener(eventType, $519f1ddd575d759f$var$$b5796eaeba5c782e$var$handleBoundEvent, true);
    }
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$635e15bbd66f01ea = (target, type)=>{
    const event = new Event(type);
    target.dispatchEvent(event);
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$valueType = (element)=>{
    if (element instanceof HTMLInputElement) return element.type;
    else if (element instanceof HTMLSelectElement && element.hasAttribute("multiple")) return "multi-select";
    else return "other";
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$80746c6bc6142fc8 = (element, newValue)=>{
    switch($519f1ddd575d759f$var$$f314c6851ceb0f9e$var$valueType(element)){
        case "radio":
            // @ts-expect-error
            element.checked = element.value === newValue;
            break;
        case "checkbox":
            // @ts-expect-error
            element.checked = newValue;
            break;
        case "date":
            // @ts-expect-error
            element.valueAsDate = new Date(newValue);
            break;
        case "multi-select":
            for (const option of [
                ...element.querySelectorAll("option")
            ])option.selected = newValue[option.value];
            break;
        default:
            // @ts-expect-error
            element.value = newValue;
    }
};
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$bf7199a9ebcb84a9 = (element)=>{
    switch($519f1ddd575d759f$var$$f314c6851ceb0f9e$var$valueType(element)){
        case "radio":
            {
                const radio = element.parentElement?.querySelector(`[name="${element.name}"]:checked`);
                return radio != null ? radio.value : null;
            }
        case "checkbox":
            // @ts-expect-error
            return element.checked;
        case "date":
            // @ts-expect-error
            return element.valueAsDate.toISOString();
        case "multi-select":
            return [
                ...element.querySelectorAll("option")
            ].reduce((map, option)=>{
                map[option.value] = option.selected;
                return map;
            }, {});
        default:
            return element.value;
    }
};
/* global ResizeObserver */ const { ResizeObserver: $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$ResizeObserver } = globalThis;
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316 = $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$ResizeObserver != null ? new $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$ResizeObserver((entries)=>{
    for (const entry of entries){
        const element = entry.target;
        $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$635e15bbd66f01ea(element, "resize");
    }
}) : {
    observe () {},
    unobserve () {}
};
function $519f1ddd575d759f$var$$f314c6851ceb0f9e$var$convertToXinSlot(slot) {
    const xinSlot = document.createElement("xin-slot");
    if (slot.name !== "") xinSlot.setAttribute("name", slot.name);
    slot.replaceWith(xinSlot);
}
const $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1 = (elt, content)=>{
    let isSlotted = false;
    if (elt != null && content != null) {
        if (typeof content === "string") elt.textContent = content;
        else if (Array.isArray(content)) content.forEach((node)=>{
            elt.append(node instanceof Node ? $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(node) : node);
            if (node instanceof Node && node.querySelector("slot") != null) isSlotted = true;
        });
        else if (content instanceof HTMLElement || content instanceof DocumentFragment) {
            const slots = [
                ...content.querySelectorAll("slot")
            ];
            if (slots.length > 0) {
                isSlotted = true;
                slots.forEach($519f1ddd575d759f$var$$f314c6851ceb0f9e$var$convertToXinSlot);
            }
            elt.append($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(content));
        } else throw new Error("expect text content or document node");
    }
    return isSlotted;
};
const $519f1ddd575d759f$export$61fc7d43ac8f84b0 = (origFn, minInterval = 250)=>{
    let debounceId;
    return (...args)=>{
        if (debounceId !== undefined) clearTimeout(debounceId);
        debounceId = setTimeout(()=>{
            origFn(...args);
        }, minInterval);
    };
};
const $519f1ddd575d759f$export$de363e709c412c8a = (origFn, minInterval = 250)=>{
    let debounceId;
    let previousCall = Date.now() - minInterval;
    let inFlight = false;
    return (...args)=>{
        clearTimeout(debounceId);
        debounceId = setTimeout(async ()=>{
            origFn(...args);
            previousCall = Date.now();
        }, minInterval);
        if (!inFlight && Date.now() - previousCall >= minInterval) {
            inFlight = true;
            try {
                origFn(...args);
                previousCall = Date.now();
            } finally{
                inFlight = false;
            }
        }
    };
};
const $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$listBindingRef = Symbol("list-binding");
const $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$SLICE_INTERVAL_MS = 16 // 60fps
;
function $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$updateRelativeBindings(element, path) {
    const boundElements = [
        ...element.querySelectorAll($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac)
    ];
    if (element.matches($519f1ddd575d759f$var$$e921b0bd4f6415ab$export$4c0223f67078aeac)) boundElements.unshift(element);
    for (const boundElement of boundElements){
        const bindings = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(boundElement);
        for (const binding of bindings){
            if (binding.path.startsWith("^")) binding.path = `${path}${binding.path.substring(1)}`;
            if (binding.binding.toDOM != null) binding.binding.toDOM(boundElement, $519f1ddd575d759f$export$966034e6c6823eb0[binding.path]);
        }
    }
}
class $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$ListBinding {
    _array = [];
    constructor(boundElement, options = {}){
        this.boundElement = boundElement;
        this.itemToElement = new WeakMap();
        if (boundElement.children.length !== 1) throw new Error("ListBinding expects an element with exactly one child element");
        if (boundElement.children[0] instanceof HTMLTemplateElement) {
            const template = boundElement.children[0];
            if (template.content.children.length !== 1) throw new Error("ListBinding expects a template with exactly one child element");
            this.template = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(template.content.children[0]);
        } else {
            this.template = boundElement.children[0];
            this.template.remove();
        }
        this.listTop = document.createElement("div");
        this.listBottom = document.createElement("div");
        this.boundElement.append(this.listTop);
        this.boundElement.append(this.listBottom);
        this.options = options;
        if (options.virtual != null) {
            $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316.observe(this.boundElement);
            this._update = $519f1ddd575d759f$export$de363e709c412c8a(()=>{
                this.update(this._array, true);
            }, $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$SLICE_INTERVAL_MS);
            this.boundElement.addEventListener("scroll", this._update);
            this.boundElement.addEventListener("resize", this._update);
        }
    }
    visibleSlice() {
        const { virtual: virtual, hiddenProp: hiddenProp, visibleProp: visibleProp } = this.options;
        let visibleArray = this._array;
        if (hiddenProp !== undefined) visibleArray = visibleArray.filter((item)=>item[hiddenProp] !== true);
        if (visibleProp !== undefined) visibleArray = visibleArray.filter((item)=>item[visibleProp] === true);
        let firstItem = 0;
        let lastItem = visibleArray.length - 1;
        let topBuffer = 0;
        let bottomBuffer = 0;
        if (virtual != null) {
            const width = this.boundElement.offsetWidth;
            const height = this.boundElement.offsetHeight;
            const visibleColumns = virtual.width != null ? Math.max(1, Math.floor(width / virtual.width)) : 1;
            const visibleRows = Math.ceil(height / virtual.height) + 1;
            const totalRows = Math.ceil(visibleArray.length / visibleColumns);
            const visibleItems = visibleColumns * visibleRows;
            let topRow = Math.floor(this.boundElement.scrollTop / virtual.height);
            if (topRow > totalRows - visibleRows + 1) topRow = Math.max(0, totalRows - visibleRows + 1);
            firstItem = topRow * visibleColumns;
            lastItem = firstItem + visibleItems - 1;
            topBuffer = topRow * virtual.height;
            bottomBuffer = Math.max(totalRows * virtual.height - height - topBuffer, 0);
        }
        return {
            items: visibleArray,
            firstItem: firstItem,
            lastItem: lastItem,
            topBuffer: topBuffer,
            bottomBuffer: bottomBuffer
        };
    }
    update(array, isSlice) {
        if (array == null) array = [];
        this._array = array;
        const { initInstance: initInstance, updateInstance: updateInstance, hiddenProp: hiddenProp, visibleProp: visibleProp } = this.options;
        // @ts-expect-error
        const arrayPath = $519f1ddd575d759f$export$40700dafb97c3799(array);
        const slice = this.visibleSlice();
        this.boundElement.classList.toggle("-xin-empty-list", slice.items.length === 0);
        const previousSlice = this._previousSlice;
        const { firstItem: firstItem, lastItem: lastItem, topBuffer: topBuffer, bottomBuffer: bottomBuffer } = slice;
        if (hiddenProp === undefined && visibleProp === undefined && isSlice === true && previousSlice != null && firstItem === previousSlice.firstItem && lastItem === previousSlice.lastItem) return;
        this._previousSlice = slice;
        let removed = 0;
        let moved = 0;
        let created = 0;
        for (const element of [
            ...this.boundElement.children
        ]){
            if (element === this.listTop || element === this.listBottom) continue;
            const proxy = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.get(element);
            if (proxy == null) element.remove();
            else {
                const idx = slice.items.indexOf(proxy);
                if (idx < firstItem || idx > lastItem) {
                    element.remove();
                    this.itemToElement.delete(proxy);
                    $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.delete(element);
                    removed++;
                }
            }
        }
        this.listTop.style.height = String(topBuffer) + "px";
        this.listBottom.style.height = String(bottomBuffer) + "px";
        // build a complete new set of elements in the right order
        const elements = [];
        const { idPath: idPath } = this.options;
        for(let i = firstItem; i <= lastItem; i++){
            const item = slice.items[i];
            if (item === undefined) continue;
            let element = this.itemToElement.get($519f1ddd575d759f$export$5dcba2d45033d435(item));
            if (element == null) {
                created++;
                element = $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(this.template);
                if (typeof item === "object") {
                    this.itemToElement.set($519f1ddd575d759f$export$5dcba2d45033d435(item), element);
                    $519f1ddd575d759f$var$$e921b0bd4f6415ab$export$86caed35dd837d06.set(element, $519f1ddd575d759f$export$5dcba2d45033d435(item));
                }
                this.boundElement.insertBefore(element, this.listBottom);
                if (idPath != null) {
                    const idValue = item[idPath];
                    const itemPath = `${arrayPath}[${idPath}=${idValue}]`;
                    $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$updateRelativeBindings(element, itemPath);
                } else {
                    const itemPath = `${arrayPath}[${i}]`;
                    $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$updateRelativeBindings(element, itemPath);
                }
                if (initInstance != null) initInstance(element, item);
            }
            if (updateInstance != null) updateInstance(element, item);
            elements.push(element);
        }
        // make sure all the elements are in the DOM and in the correct location
        let insertionPoint = null;
        for (const element of elements){
            if (element.previousElementSibling !== insertionPoint) {
                moved++;
                if (insertionPoint?.nextElementSibling != null) this.boundElement.insertBefore(element, insertionPoint.nextElementSibling);
                else this.boundElement.insertBefore(element, this.listBottom);
            }
            insertionPoint = element;
        }
        if ($519f1ddd575d759f$export$a5a6e0b888b2c992.perf) console.log(arrayPath, "updated", {
            removed: removed,
            created: created,
            moved: moved
        });
    }
}
const $519f1ddd575d759f$var$$ea2c6a36710de0a8$export$b0eb386be3b9fed8 = (boundElement, options)=>{
    let listBinding = boundElement[$519f1ddd575d759f$var$$ea2c6a36710de0a8$var$listBindingRef];
    if (listBinding == null) {
        listBinding = new $519f1ddd575d759f$var$$ea2c6a36710de0a8$var$ListBinding(boundElement, options);
        boundElement[$519f1ddd575d759f$var$$ea2c6a36710de0a8$var$listBindingRef] = listBinding;
    }
    return listBinding;
};
const $519f1ddd575d759f$export$97a1a3e6f39778d2 = {
    value: {
        toDOM (element, value) {
            $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$80746c6bc6142fc8(element, value);
        },
        fromDOM (element) {
            return $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$bf7199a9ebcb84a9(element);
        }
    },
    text: {
        toDOM (element, value) {
            element.textContent = value;
        }
    },
    enabled: {
        toDOM (element, value) {
            // eslint-disable-next-line
            element.disabled = !value;
        }
    },
    disabled: {
        toDOM (element, value) {
            element.disabled = Boolean(value);
        }
    },
    style: {
        toDOM (element, value) {
            if (typeof value === "object") for (const prop of Object.keys(value))element.style[prop] = value[prop];
            else if (typeof value === "string") element.setAttribute("style", value);
            else throw new Error("style binding expects either a string or object");
        }
    },
    list: {
        toDOM (element, value, options) {
            const listBinding = $519f1ddd575d759f$var$$ea2c6a36710de0a8$export$b0eb386be3b9fed8(element, options);
            listBinding.update(value);
        }
    }
};
/*
# more-math

Some simple functions egregiously missing from `Math`
*/ const $519f1ddd575d759f$var$$0e50e8a626908591$export$ba6bc6c220358ed9 = 180 / Math.PI;
const $519f1ddd575d759f$var$$0e50e8a626908591$export$1518e1a62333c8a4 = Math.PI / 180;
function $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(min, v, max) {
    return v < min ? min : v > max ? max : v;
}
function $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(a, b, t) {
    t = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, t, 1);
    return t * (b - a) + a;
}
const $519f1ddd575d759f$export$5e0dd9fd5d74e0c5 = {
    clamp: $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4,
    lerp: $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f
};
const $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2 = (n)=>("00" + Math.round(Number(n)).toString(16)).slice(-2);
class $519f1ddd575d759f$var$$72989831e95a2bab$var$HslColor {
    constructor(r, g, b){
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s !== 0 ? l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s : 0;
        this.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
        this.s = s !== 0 ? l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s)) : 0;
        this.l = (2 * l - s) / 2;
    }
}
const $519f1ddd575d759f$var$$72989831e95a2bab$var$span = globalThis.document !== undefined ? globalThis.document.createElement("span") : undefined;
class $519f1ddd575d759f$export$892596cec99bc70e {
    static fromCss(spec) {
        let converted = spec;
        if ($519f1ddd575d759f$var$$72989831e95a2bab$var$span instanceof HTMLSpanElement) {
            $519f1ddd575d759f$var$$72989831e95a2bab$var$span.style.color = spec;
            document.body.appendChild($519f1ddd575d759f$var$$72989831e95a2bab$var$span);
            converted = getComputedStyle($519f1ddd575d759f$var$$72989831e95a2bab$var$span).color;
            $519f1ddd575d759f$var$$72989831e95a2bab$var$span.remove();
        }
        const [r, g, b, a] = converted.match(/[\d.]+/g);
        return new $519f1ddd575d759f$export$892596cec99bc70e(Number(r), Number(g), Number(b), a == null ? 1 : Number(a));
    }
    static fromHsl(h, s, l, a = 1) {
        return $519f1ddd575d759f$export$892596cec99bc70e.fromCss(`hsla(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%, ${a.toFixed(2)})`);
    }
    constructor(r, g, b, a = 1){
        this.r = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, r, 255);
        this.g = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, g, 255);
        this.b = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, b, 255);
        this.a = a !== undefined ? $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, a, 1) : a = 1;
    }
    get inverse() {
        return new $519f1ddd575d759f$export$892596cec99bc70e(255 - this.r, 255 - this.g, 255 - this.b, this.a);
    }
    get inverseLuminance() {
        const { h: h, s: s, l: l } = this._hsl;
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, 1 - l, this.a);
    }
    get rgb() {
        const { r: r, g: g, b: b } = this;
        return `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`;
    }
    get rgba() {
        const { r: r, g: g, b: b, a: a } = this;
        return `rgba(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)},${a.toFixed(2)})`;
    }
    get RGBA() {
        return [
            this.r / 255,
            this.g / 255,
            this.b / 255,
            this.a
        ];
    }
    get ARGB() {
        return [
            this.a,
            this.r / 255,
            this.g / 255,
            this.b / 255
        ];
    }
    get _hsl() {
        if (this._hslCached == null) this._hslCached = new $519f1ddd575d759f$var$$72989831e95a2bab$var$HslColor(this.r, this.g, this.b);
        return this._hslCached;
    }
    get hsl() {
        const { h: h, s: s, l: l } = this._hsl;
        return `hsl(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
    }
    get hsla() {
        const { h: h, s: s, l: l } = this._hsl;
        return `hsla(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%, ${this.a.toFixed(2)})`;
    }
    get mono() {
        const v = this.brightness * 255;
        return new $519f1ddd575d759f$export$892596cec99bc70e(v, v, v);
    }
    get brightness() {
        // http://www.itu.int/rec/R-REC-BT.601
        return (0.299 * this.r + 0.587 * this.g + 0.114 * this.b) / 255;
    }
    get html() {
        return this.a === 1 ? "#" + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.r) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.g) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.b) : "#" + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.r) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.g) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(this.b) + $519f1ddd575d759f$var$$72989831e95a2bab$var$hex2(Math.floor(255 * this.a));
    }
    brighten(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        l = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, l + amount * (1 - l), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    darken(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        l = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, l * (1 - amount), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    saturate(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        s = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, s + amount * (1 - s), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    desaturate(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        s = $519f1ddd575d759f$var$$0e50e8a626908591$export$7d15b64cf5a3a4c4(0, s * (1 - amount), 1);
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    rotate(amount) {
        let { h: h, s: s, l: l } = this._hsl;
        h = (h + 360 + amount) % 360;
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, this.a);
    }
    opacity(alpha) {
        const { h: h, s: s, l: l } = this._hsl;
        return $519f1ddd575d759f$export$892596cec99bc70e.fromHsl(h, s, l, alpha);
    }
    swatch() {
        const { r: r, g: g, b: b, a: a } = this;
        console.log(`%c   %c ${this.html}, rgba(${r}, ${g}, ${b}, ${a}), ${this.hsla}`, `background-color: rgba(${r}, ${g}, ${b}, ${a})`, "background-color: #eee");
    }
    blend(otherColor, t) {
        return new $519f1ddd575d759f$export$892596cec99bc70e($519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.r, otherColor.r, t), $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.g, otherColor.g, t), $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.b, otherColor.b, t), $519f1ddd575d759f$var$$0e50e8a626908591$export$3a89f8d6f6bf6c9f(this.a, otherColor.a, t));
    }
}
function $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(s) {
    return s.replace(/[A-Z]/g, (c)=>{
        return `-${c.toLocaleLowerCase()}`;
    });
}
function $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$fd322201efdc650f(s) {
    return s.replace(/-([a-z])/g, (_, c)=>{
        return c.toLocaleUpperCase();
    });
}
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates = {};
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$create = (tagType, ...contents)=>{
    if ($519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType] === undefined) $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType] = globalThis.document.createElement(tagType);
    const elt = $519f1ddd575d759f$var$$9e0c0b8784c80412$var$templates[tagType].cloneNode();
    const elementProps = {};
    for (const item of contents)if (item instanceof Element || item instanceof DocumentFragment || typeof item === "string" || typeof item === "number") {
        if (elt instanceof HTMLTemplateElement) elt.content.append(item);
        else elt.append(item);
    } else Object.assign(elementProps, item);
    for (const key of Object.keys(elementProps)){
        const value = elementProps[key];
        if (key === "apply") value(elt);
        else if (key === "style") {
            if (typeof value === "object") {
                for (const prop of Object.keys(value))if (prop.startsWith("--")) elt.style.setProperty(prop, value[prop]);
                else elt.style[prop] = value[prop];
            } else elt.setAttribute("style", value);
        } else if (key.match(/^on[A-Z]/) != null) {
            const eventType = key.substring(2).toLowerCase();
            $519f1ddd575d759f$export$af631764ddc44097(elt, eventType, value);
        } else if (key.match(/^bind[A-Z]/) != null) {
            const bindingType = key.substring(4, 5).toLowerCase() + key.substring(5);
            const binding = $519f1ddd575d759f$export$97a1a3e6f39778d2[bindingType];
            if (binding !== undefined) $519f1ddd575d759f$export$2385a24977818dd0(elt, value, binding);
            else throw new Error(`${key} is not allowed, bindings.${bindingType} is not defined`);
        // @ts-expect-error
        } else if (elt[key] !== undefined) elt[key] = value;
        else {
            const attr = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key);
            if (attr === "class") value.split(" ").forEach((className)=>{
                elt.classList.add(className);
            });
            else if (elt[attr] !== undefined) elt[attr] = value;
            else if (typeof value === "boolean") value ? elt.setAttribute(attr, "") : elt.removeAttribute(attr);
            else elt.setAttribute(attr, value);
        }
    }
    return elt;
};
const $519f1ddd575d759f$var$$9e0c0b8784c80412$var$fragment = (...contents)=>{
    const frag = globalThis.document.createDocumentFragment();
    for (const item of contents)frag.append(item);
    return frag;
};
const $519f1ddd575d759f$export$7a5d735b2ab6389d = new Proxy({
    fragment: $519f1ddd575d759f$var$$9e0c0b8784c80412$var$fragment
}, {
    get (target, tagName) {
        tagName = tagName.replace(/[A-Z]/g, (c)=>`-${c.toLocaleLowerCase()}`);
        if (tagName.match(/^\w+(-\w+)*$/) == null) throw new Error(`${tagName} does not appear to be a valid element tagName`);
        else if (target[tagName] === undefined) target[tagName] = (...contents)=>$519f1ddd575d759f$var$$9e0c0b8784c80412$var$create(tagName, ...contents);
        // @ts-expect-error
        return target[tagName];
    },
    set () {
        throw new Error("You may not add new properties to elements");
    }
});
function $519f1ddd575d759f$var$$49cee7f7f866c751$export$bc59121b0a0fcbd3(styleSheet) {
    return $519f1ddd575d759f$export$7a5d735b2ab6389d.style($519f1ddd575d759f$export$dbf350e5966cf602(styleSheet));
}
const $519f1ddd575d759f$var$$49cee7f7f866c751$var$numericProps = [
    "animation-iteration-count",
    "flex",
    "flex-base",
    "flex-grow",
    "flex-shrink",
    "gap",
    "opacity",
    "order",
    "tab-size",
    "widows",
    "z-index",
    "zoom"
];
const $519f1ddd575d759f$var$$49cee7f7f866c751$var$renderProp = (indentation, cssProp, value)=>{
    if (value === undefined) return "";
    else if (typeof value === "string" || $519f1ddd575d759f$var$$49cee7f7f866c751$var$numericProps.includes(cssProp)) return `${indentation}  ${cssProp}: ${value};`;
    else return `${indentation}  ${cssProp}: ${value}px;`;
};
const $519f1ddd575d759f$var$$49cee7f7f866c751$var$renderStatement = (key, value, indentation = "")=>{
    const cssProp = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key);
    if (typeof value === "object") {
        const renderedRule = Object.keys(value).map((innerKey)=>$519f1ddd575d759f$var$$49cee7f7f866c751$var$renderStatement(innerKey, value[innerKey], `${indentation}  `)).join("\n");
        return `${indentation}  ${key} {\n${renderedRule}\n${indentation}  }`;
    } else return $519f1ddd575d759f$var$$49cee7f7f866c751$var$renderProp(indentation, cssProp, value);
};
const $519f1ddd575d759f$export$dbf350e5966cf602 = (obj, indentation = "")=>{
    const selectors = Object.keys(obj).map((selector)=>{
        const body = obj[selector];
        if (typeof body === "string") {
            if (selector === "@import") return `@import url('${body}');`;
            throw new Error("top-level string value only allowed for `@import`");
        }
        const rule = Object.keys(body).map((prop)=>$519f1ddd575d759f$var$$49cee7f7f866c751$var$renderStatement(prop, body[prop])).join("\n");
        return `${indentation}${selector} {\n${rule}\n}`;
    });
    return selectors.join("\n\n");
};
const $519f1ddd575d759f$export$90d0ea046136e3ed = (obj)=>{
    const rule = {};
    for (const key of Object.keys(obj)){
        const value = obj[key];
        const kabobKey = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key);
        rule[`--${kabobKey}`] = typeof value === "number" && value !== 0 ? String(value) + "px" : value;
    }
    return rule;
};
const $519f1ddd575d759f$export$808aaf1b460dc9af = (obj)=>{
    const rule = {};
    for (const key of Object.keys(obj)){
        let value = obj[key];
        if (typeof value === "string" && value.match(/^(#|rgb[a]?\(|hsl[a]?\()/) != null) {
            value = $519f1ddd575d759f$export$892596cec99bc70e.fromCss(value).inverseLuminance.html;
            rule[`--${$519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(key)}`] = value;
        }
    }
    return rule;
};
const $519f1ddd575d759f$export$3cb96c9f6c8d16a4 = new Proxy({}, {
    get (target, prop) {
        if (target[prop] == null) {
            prop = prop.replace(/[A-Z]/g, (x)=>`-${x.toLocaleLowerCase()}`);
            let [, varName, , isNegative, scaleText, method] = prop.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/);
            varName = `--${varName}`;
            if (scaleText != null) {
                const scale = isNegative == null ? Number(scaleText) / 100 : -Number(scaleText) / 100;
                switch(method){
                    case "b":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = scale > 0 ? $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).brighten(scale).rgba : $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).darken(-scale).rgba;
                        }
                        break;
                    case "s":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = scale > 0 ? $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).saturate(scale).rgba : $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).desaturate(-scale).rgba;
                        }
                        break;
                    case "h":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).rotate(scale * 100).rgba;
                            console.log($519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).hsla, $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).rotate(scale).hsla);
                        }
                        break;
                    case "o":
                        {
                            const baseColor = getComputedStyle(document.body).getPropertyValue(varName);
                            target[prop] = $519f1ddd575d759f$export$892596cec99bc70e.fromCss(baseColor).opacity(scale).rgba;
                        }
                        break;
                    case "":
                        target[prop] = `calc(var(${varName}) * ${scale})`;
                        break;
                    default:
                        console.error(method);
                        throw new Error(`Unrecognized method ${method} for css variable ${varName}`);
                }
            } else target[prop] = `var(${varName})`;
        }
        return target[prop];
    }
});
let $519f1ddd575d759f$var$$cd387b053feba574$var$instanceCount = 0;
class $519f1ddd575d759f$export$16fa2f45be04daa8 extends HTMLElement {
    static elements = $519f1ddd575d759f$export$7a5d735b2ab6389d;
    content = $519f1ddd575d759f$export$7a5d735b2ab6389d.slot();
    static StyleNode(styleSpec) {
        return $519f1ddd575d759f$export$7a5d735b2ab6389d.style($519f1ddd575d759f$export$dbf350e5966cf602(styleSpec));
    }
    static elementCreator(options) {
        if (this._elementCreator == null) {
            let desiredTag = options != null ? options.tag : null;
            if (desiredTag == null) {
                desiredTag = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(this.name);
                if (desiredTag.startsWith("-")) desiredTag = desiredTag.substring(1);
                if (!desiredTag.includes("-")) desiredTag += "-elt";
            }
            let attempts = 0;
            while(this._elementCreator == null){
                attempts += 1;
                const tag = attempts === 1 ? desiredTag : `${desiredTag}-${attempts}`;
                try {
                    window.customElements.define(tag, this, options);
                    this._elementCreator = $519f1ddd575d759f$export$7a5d735b2ab6389d[tag];
                } catch (e) {
                    throw new Error(`could not define ${this.name} as <${tag}>: ${String(e)}`);
                }
            }
        }
        return this._elementCreator;
    }
    initAttributes(...attributeNames) {
        const attributes = {};
        const attributeValues = {};
        const observer = new MutationObserver((mutationsList)=>{
            let triggerRender = false;
            mutationsList.forEach((mutation)=>{
                // eslint-disable-next-line
                triggerRender = !!(mutation.attributeName && attributeNames.includes($519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$fd322201efdc650f(mutation.attributeName)));
            });
            if (triggerRender && this.queueRender !== undefined) this.queueRender(false);
        });
        observer.observe(this, {
            attributes: true
        });
        attributeNames.forEach((attributeName)=>{
            attributes[attributeName] = $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(this[attributeName]);
            const attributeKabob = $519f1ddd575d759f$var$$bed4bed3dcfb6f9a$export$87ae551bf60f4bb(attributeName);
            Object.defineProperty(this, attributeName, {
                enumerable: false,
                get () {
                    if (typeof attributes[attributeName] === "boolean") return this.hasAttribute(attributeKabob);
                    else {
                        // eslint-disable-next-line
                        if (this.hasAttribute(attributeKabob)) return typeof attributes[attributeName] === "number" ? parseFloat(this.getAttribute(attributeKabob)) : this.getAttribute(attributeKabob);
                        else if (attributeValues[attributeName] !== undefined) return attributeValues[attributeName];
                        else return attributes[attributeName];
                    }
                },
                set (value) {
                    if (typeof attributes[attributeName] === "boolean") {
                        if (value !== this[attributeName]) {
                            // eslint-disable-next-line
                            if (value) this.setAttribute(attributeKabob, "");
                            else this.removeAttribute(attributeKabob);
                            this.queueRender();
                        }
                    } else if (typeof attributes[attributeName] === "number") {
                        if (value !== parseFloat(this[attributeName])) {
                            this.setAttribute(attributeKabob, value);
                            this.queueRender();
                        }
                    } else if (typeof value === "object" || `${value}` !== `${this[attributeName]}`) {
                        if (value === null || value === undefined || typeof value === "object") this.removeAttribute(attributeKabob);
                        else this.setAttribute(attributeKabob, value);
                        this.queueRender();
                        // @ts-expect-error
                        attributeValues[attributeName] = value;
                    }
                }
            });
        });
    }
    initValue() {
        const valueDescriptor = Object.getOwnPropertyDescriptor(this, "value");
        if (valueDescriptor === undefined || valueDescriptor.get !== undefined || valueDescriptor.set !== undefined) return;
        let value = this.hasAttribute("value") ? this.getAttribute("value") : $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(this.value);
        delete this.value;
        Object.defineProperty(this, "value", {
            enumerable: false,
            get () {
                return value;
            },
            set (newValue) {
                if (value !== newValue) {
                    value = newValue;
                    this.queueRender(true);
                }
            }
        });
    }
    get refs() {
        const root = this.shadowRoot != null ? this.shadowRoot : this;
        if (this._refs == null) this._refs = new Proxy({}, {
            get (target, ref) {
                if (target[ref] === undefined) {
                    let element = root.querySelector(`[data-ref="${ref}"]`);
                    if (element == null) element = root.querySelector(ref);
                    if (element == null) throw new Error(`elementRef "${ref}" does not exist!`);
                    element.removeAttribute("data-ref");
                    target[ref] = element;
                }
                return target[ref];
            }
        });
        return this._refs;
    }
    constructor(){
        super();
        $519f1ddd575d759f$var$$cd387b053feba574$var$instanceCount += 1;
        this.initAttributes("hidden");
        this.instanceId = `${this.tagName.toLocaleLowerCase()}-${$519f1ddd575d759f$var$$cd387b053feba574$var$instanceCount}`;
        this._value = $519f1ddd575d759f$var$$5165f04a46b33615$export$b7d58db314e0ac27(this.defaultValue);
    }
    connectedCallback() {
        this.hydrate();
        // super annoyingly, chrome loses its shit if you set *any* attributes in the constructor
        if (this.role != null) this.setAttribute("role", this.role);
        if (this.onResize !== undefined) {
            $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316.observe(this);
            if (this._onResize == null) this._onResize = this.onResize.bind(this);
            this.addEventListener("resize", this._onResize);
        }
        if (this.value != null && this.getAttribute("value") != null) this._value = this.getAttribute("value");
        this.queueRender();
    }
    disconnectedCallback() {
        $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$b13421f1ae71d316.unobserve(this);
    }
    _changeQueued = false;
    _renderQueued = false;
    queueRender(triggerChangeEvent = false) {
        if (!this._hydrated) return;
        if (!this._changeQueued) this._changeQueued = triggerChangeEvent;
        if (!this._renderQueued) {
            this._renderQueued = true;
            requestAnimationFrame(()=>{
                // TODO add mechanism to allow component developer to have more control over
                // whether input vs. change events are emitted
                if (this._changeQueued) $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$635e15bbd66f01ea(this, "change");
                this._changeQueued = false;
                this._renderQueued = false;
                this.render();
            });
        }
    }
    _hydrated = false;
    hydrate() {
        if (!this._hydrated) {
            this.initValue();
            const _content = typeof this.content === "function" ? this.content() : this.content;
            if (this.styleNode !== undefined) {
                const shadow = this.attachShadow({
                    mode: "open"
                });
                shadow.appendChild(this.styleNode);
                $519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1(shadow, _content);
            } else {
                const existingChildren = [
                    ...this.childNodes
                ];
                if ($519f1ddd575d759f$var$$f314c6851ceb0f9e$export$6bb13967611cdb1(this, _content) && existingChildren.length > 0) {
                    const slotMap = {
                        "": this
                    };
                    [
                        ...this.querySelectorAll("xin-slot")
                    ].forEach((slot)=>{
                        // @ts-expect-error
                        slotMap[slot.name] = slot;
                    });
                    existingChildren.forEach((child)=>{
                        const defaultSlot = slotMap[""];
                        const destSlot = child instanceof Element ? slotMap[child.slot] : defaultSlot;
                        (destSlot !== undefined ? destSlot : defaultSlot).append(child);
                    });
                }
            }
            this._hydrated = true;
        }
    }
    render() {}
}
class $519f1ddd575d759f$var$$cd387b053feba574$var$XinSlot extends $519f1ddd575d759f$export$16fa2f45be04daa8 {
    name = "";
    content = null;
    constructor(){
        super();
        this.initAttributes("name");
    }
}
const $519f1ddd575d759f$var$$cd387b053feba574$export$a0751b4aa1961d4e = $519f1ddd575d759f$var$$cd387b053feba574$var$XinSlot.elementCreator({
    tag: "xin-slot"
});
const $519f1ddd575d759f$export$93b87f7746612069 = (test = ()=>true)=>{
    const savedState = localStorage.getItem("xin-state");
    if (savedState != null) {
        const state = JSON.parse(savedState);
        for (const key of Object.keys(state).filter(test))if ($519f1ddd575d759f$export$966034e6c6823eb0[key] !== undefined) Object.assign($519f1ddd575d759f$export$966034e6c6823eb0[key], state[key]);
        else $519f1ddd575d759f$export$966034e6c6823eb0[key] = state[key];
    }
    const saveState = $519f1ddd575d759f$export$61fc7d43ac8f84b0(()=>{
        const obj = {};
        const state = $519f1ddd575d759f$export$966034e6c6823eb0[$519f1ddd575d759f$var$$e921b0bd4f6415ab$export$bdd0d039ad781534];
        for (const key of Object.keys(state).filter(test))obj[key] = state[key];
        localStorage.setItem("xin-state", JSON.stringify(obj));
        console.log("xin state saved to localStorage");
    }, 500);
    $519f1ddd575d759f$export$d1203567a167490e(test, saveState);
};
var $519f1ddd575d759f$var$$526cc5d62ff194fb$exports = {};
function $519f1ddd575d759f$export$95a552d2395ab4c4(obj) {
    const registered = {};
    Object.keys(obj).forEach((key)=>{
        $519f1ddd575d759f$export$966034e6c6823eb0[key] = obj[key];
        registered[key] = $519f1ddd575d759f$export$966034e6c6823eb0[key];
    });
    return registered;
}


const $1fe5fe80b15eb088$var$timeNow = new Date();
const $1fe5fe80b15eb088$export$bc6bb0e72ae9e582 = Intl.supportedValuesOf("timeZone").map((name)=>{
    // @ts-expect-error
    const offset = Number(Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "shortOffset",
        timeZone: name
    }).format($1fe5fe80b15eb088$var$timeNow).split("GMT").pop().replace(/\:30/, ".5"));
    const abbr = Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
        timeZone: name
    }).format($1fe5fe80b15eb088$var$timeNow).split(" ").pop();
    return {
        name: name,
        abbr: abbr,
        offset: offset
    };
});
const $1fe5fe80b15eb088$export$80a1beafc835526e = $1fe5fe80b15eb088$export$bc6bb0e72ae9e582.find((z)=>z.name === Intl.DateTimeFormat().resolvedOptions().timeZone);


const $7148e8975cd26971$export$6b408984b31c1b30 = [
    {
        timezone: "Africa/Abidjan",
        country: "CI",
        pin: "244,118",
        offset: 0,
        points: "241,118,240,119,240,117,238,116,238,115,239,114,239,113,239,113,239,111,241,110,241,111,243,111,244,112,246,111,247,113,245,116,246,118,241,118",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Accra",
        country: "GH",
        pin: "250,117",
        offset: 0,
        points: "251,117,247,118,246,118,246,118,246,116,247,114,246,110,250,110,251,113,251,116,252,116,251,117",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Addis_Ababa",
        country: "ET",
        pin: "304,112",
        offset: 3,
        points: "313,118,311,118,308,120,307,119,305,120,300,119,299,116,296,114,296,113,297,113,298,110,299,110,300,107,300,107,301,105,302,105,303,104,303,105,307,105,309,108,308,110,310,110,309,110,310,112,317,114,313,118",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Algiers",
        country: "DZ",
        pin: "254,74",
        offset: 1,
        points: "263,83,264,86,264,88,263,89,264,91,266,91,267,92,258,98,255,99,254,97,252,97,250,95,238,87,238,85,239,85,243,83,243,82,245,82,245,81,246,81,246,80,248,80,249,80,248,79,248,77,247,76,254,74,262,74,261,74,262,77,260,78,263,81,263,83",
        abbr: "CET"
    },
    {
        timezone: "Africa/Asmera",
        country: "ER",
        pin: "304,104",
        offset: 3,
        points: "306,104,310,107,309,108,306,105,303,105,303,104,302,105,301,105,301,101,304,100,305,104,305,103,306,104",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Bamako",
        country: "ML",
        pin: "239,107",
        offset: 0,
        points: "244,107,244,108,242,109,242,111,241,111,241,110,240,111,239,110,239,111,238,110,238,110,238,109,237,108,235,108,234,108,234,107,233,105,234,103,235,104,237,103,242,103,241,90,243,90,252,96,252,97,254,97,255,99,256,98,256,101,255,104,249,104,246,105,245,107,244,106,244,107",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Bangui",
        country: "CF",
        pin: "276,119",
        offset: 1,
        points: "284,118,283,119,282,118,281,119,277,118,276,119,276,120,273,120,272,122,270,119,270,117,272,115,276,114,276,113,278,112,280,110,281,110,283,111,283,113,284,113,284,113,285,114,288,118,285,118,285,118,284,118",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Banjul",
        country: "GM",
        pin: "227,106",
        offset: 0,
        points: "231,106,227,106,229,106,231,106",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Bissau",
        country: "GW",
        pin: "228,109",
        offset: 0,
        points: "228,109,228,109,228,109",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Blantyre",
        country: "MW",
        pin: "299,147",
        offset: 2,
        points: "298,144,300,146,299,149,298,147,298,145,297,145,295,144,297,142,296,140,297,140,296,138,298,139,299,141,298,142,298,144",
        abbr: "CAT"
    },
    {
        timezone: "Africa/Brazzaville",
        country: "CG",
        pin: "271,131",
        offset: 1,
        points: "266,131,267,130,266,128,267,128,268,128,270,128,270,128,270,126,269,125,270,124,269,123,268,123,268,122,272,123,273,120,276,120,275,126,273,128,272,130,270,132,270,131,269,132,268,131,267,132,266,131",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Bujumbura",
        country: "BI",
        pin: "291,130",
        offset: 2,
        points: "292,131,291,131,290,129,291,129,292,128,292,128,293,130,292,131",
        abbr: "CAT"
    },
    {
        timezone: "Asia/Oral",
        country: "KZ",
        pin: "321,54",
        offset: 5,
        points: "316,55,317,56,318,56,317,55,319,54,320,53,323,53,326,54,326,56,323,58,321,57,319,58,315,58,316,55",
        abbr: "ORAT"
    },
    {
        timezone: "Africa/Cairo",
        country: "EG",
        pin: "293,83",
        offset: 2,
        points: "294,94,285,94,284,83,285,81,290,82,293,81,294,81,295,82,298,82,298,84,298,86,296,85,295,83,295,84,300,92,299,92,299,93,297,95,294,94",
        abbr: "EET"
    },
    {
        timezone: "Africa/Casablanca",
        country: "MA",
        pin: "239,78",
        offset: 0,
        points: "242,84,240,84,238,85,238,87,232,87,236,84,237,83,236,81,237,80,241,78,242,75,243,75,244,76,246,76,248,77,248,80,246,80,246,81,245,81,245,82,243,82,242,84",
        abbr: "WET"
    },
    {
        timezone: "Africa/Ceuta",
        country: "ES",
        pin: "243,75",
        offset: 1,
        points: "243,75,243,75,243,75",
        abbr: "CET"
    },
    {
        timezone: "Africa/Conakry",
        country: "GN",
        pin: "231,112",
        offset: 0,
        points: "238,114,237,115,236,113,235,114,235,113,234,111,233,111,232,112,231,111,230,110,229,109,231,109,231,107,234,108,235,108,237,108,238,109,238,110,238,110,239,111,239,112,239,113,239,113,239,114,238,114",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Dakar",
        country: "SN",
        pin: "226,105",
        offset: 0,
        points: "227,107,229,106,231,106,229,106,227,106,226,105,227,102,230,102,233,105,234,108,229,107,227,108,227,108,227,108,227,107",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Dar_es_Salaam",
        country: "TZ",
        pin: "305,134",
        offset: 3,
        points: "306,139,306,139,306,140,302,141,299,141,297,138,293,137,291,134,291,132,293,130,292,129,293,128,292,126,297,126,302,129,302,130,304,131,304,134,305,135,305,137,306,139",
        abbr: "EAT"
    },
    {
        timezone: "Asia/Yekaterinburg",
        country: "RU",
        pin: "334,46",
        offset: 6,
        points: "333,53,335,54,335,54,333,55,331,54,329,54,327,55,326,54,326,55,324,53,321,53,322,51,322,50,324,50,325,49,324,48,325,48,324,47,326,47,325,46,326,46,325,44,325,43,324,43,325,42,323,41,322,40,326,40,329,40,332,39,333,35,342,31,341,31,342,31,341,31,341,30,340,29,342,29,342,29,341,29,345,30,346,29,345,28,343,28,344,28,344,27,343,27,345,25,346,24,351,24,350,26,351,27,351,27,351,29,352,30,350,32,346,32,346,33,350,33,354,31,353,30,356,29,357,30,357,31,358,31,361,32,358,31,359,30,358,29,353,29,352,28,353,27,351,26,354,25,354,24,355,25,354,26,355,26,359,27,356,25,358,25,357,25,358,25,362,25,360,26,362,26,362,27,360,28,365,29,365,30,364,31,364,31,364,32,366,32,366,34,367,34,367,35,369,35,369,36,368,37,369,37,367,39,369,40,369,40,364,41,357,40,356,42,353,44,349,44,348,44,348,45,350,46,348,47,348,48,346,48,341,50,335,50,335,51,336,51,335,51,334,52,335,52,333,53",
        abbr: "YEKT"
    },
    {
        timezone: "Africa/Djibouti",
        country: "DJ",
        pin: "310,109",
        offset: 3,
        points: "310,109,310,109,310,109",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Douala",
        country: "CM",
        pin: "263,119",
        offset: 1,
        points: "270,117,270,119,272,121,272,123,270,122,264,122,263,119,263,120,262,119,262,117,264,116,265,115,266,116,266,115,269,110,270,109,270,107,271,107,271,110,272,111,269,112,272,114,270,117",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Freetown",
        country: "SL",
        pin: "232,113",
        offset: 0,
        points: "235,115,234,115,232,114,232,112,233,111,234,111,235,112,235,114,236,114,235,115",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Gaborone",
        country: "BW",
        pin: "286,159",
        offset: 2,
        points: "287,158,285,161,282,160,281,162,279,162,279,161,278,159,278,156,279,156,279,150,282,150,283,151,285,150,286,152,289,153,289,155,291,156,287,158",
        abbr: "CAT"
    },
    {
        timezone: "Africa/Harare",
        country: "ZW",
        pin: "293,150",
        offset: 2,
        points: "293,156,289,155,289,153,286,152,285,150,288,150,291,147,296,148,295,151,296,153,295,155,293,156",
        abbr: "CAT"
    },
    {
        timezone: "Africa/El_Aaiun",
        country: "EH",
        pin: "232,87",
        offset: 0,
        points: "233,89,233,92,232,93,232,95,227,95,226,96,226,95,228,92,228,92,229,91,230,89,231,88,232,87,238,87,238,89,233,89",
        abbr: "WET"
    },
    {
        timezone: "Africa/Johannesburg",
        country: "ZA",
        pin: "289,161",
        offset: 2,
        points: "283,172,278,173,276,172,276,173,275,171,275,170,275,169,273,165,274,164,274,165,275,165,278,164,278,159,279,161,279,162,280,162,282,160,285,161,288,158,290,156,293,156,294,159,294,161,294,161,293,162,294,163,294,163,294,162,296,162,295,165,289,171,286,172,283,172",
        abbr: "SAST"
    },
    {
        timezone: "Africa/Juba",
        country: "SS",
        pin: "294,118",
        offset: 3,
        points: "299,117,299,118,300,118,300,119,298,119,297,120,293,120,291,119,289,119,289,119,287,116,284,113,285,111,286,111,287,112,290,112,292,111,293,111,295,110,295,108,296,108,296,110,297,111,297,113,296,113,296,114,297,115,299,117",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Kampala",
        country: "UG",
        pin: "295,125",
        offset: 3,
        points: "293,126,291,127,292,124,293,122,293,122,293,120,297,120,297,119,299,122,297,125,297,126,293,126",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Khartoum",
        country: "SD",
        pin: "295,103",
        offset: 3,
        points: "300,107,299,110,298,110,297,112,296,110,296,108,295,108,295,108,295,110,293,111,292,111,290,112,287,112,286,111,285,111,284,113,283,113,283,111,282,110,281,107,280,107,282,103,283,103,283,97,285,97,285,94,294,94,297,95,299,93,301,94,302,96,302,99,304,100,301,101,301,106,300,107,300,107",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Kinshasa",
        country: "CD",
        pin: "271,131",
        offset: 1,
        points: "271,131,272,130,273,128,275,126,276,119,277,118,277,118,279,119,283,120,281,120,283,122,281,122,281,123,283,125,282,126,283,126,282,126,284,127,281,128,281,128,281,128,279,128,279,131,278,131,278,135,277,135,277,136,274,136,273,133,267,133,268,131,269,132,270,131,270,132,271,131",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Lagos",
        country: "NG",
        pin: "255,116",
        offset: 1,
        points: "261,119,258,119,256,116,254,116,254,112,255,110,255,109,256,106,258,106,260,107,261,106,263,107,265,106,267,107,269,106,270,108,270,109,269,110,266,115,266,116,264,115,262,117,262,118,261,119",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Libreville",
        country: "GA",
        pin: "263,124",
        offset: 1,
        points: "269,125,270,126,270,128,267,128,267,128,266,128,267,130,266,131,263,128,262,126,263,126,263,125,264,125,263,124,263,124,266,124,266,122,268,122,268,123,270,123,270,124,269,125",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Lome",
        country: "TG",
        pin: "252,116",
        offset: 0,
        points: "252,116,251,116,251,113,250,110,251,110,251,111,252,111,253,116,252,116",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Kigali",
        country: "RW",
        pin: "292,128",
        offset: 2,
        points: "292,128,291,129,290,129,291,127,292,126,293,128,292,128",
        abbr: "CAT"
    },
    {
        timezone: "Africa/Luanda",
        country: "AO",
        pin: "268,137",
        offset: 1,
        points: "281,140,281,141,283,140,283,143,281,143,281,148,283,149,279,150,276,149,269,149,268,149,266,149,267,144,269,142,269,140,268,138,269,137,267,133,273,133,274,136,277,136,277,135,280,135,280,138,281,140",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Lubumbashi",
        country: "CD",
        pin: "288,141",
        offset: 2,
        points: "291,132,291,134,293,136,290,137,289,138,290,139,289,141,290,142,291,142,291,144,290,144,288,141,287,142,286,142,285,141,284,141,283,140,281,141,280,135,278,135,277,134,278,133,278,131,279,131,279,128,281,128,281,128,281,128,284,127,282,126,283,126,282,126,283,125,281,123,281,122,283,122,281,120,283,120,281,119,282,118,285,118,285,118,288,118,289,119,291,119,293,120,293,122,293,122,292,124,291,127,290,128,291,132",
        abbr: "CAT"
    },
    {
        timezone: "Africa/Lusaka",
        country: "ZM",
        pin: "289,146",
        offset: 2,
        points: "290,147,290,148,287,150,284,149,283,149,281,148,281,143,283,143,283,140,284,141,285,141,286,142,287,142,288,141,290,144,291,144,291,142,290,142,289,141,290,139,289,138,290,137,293,136,296,138,297,140,296,140,297,142,295,144,296,144,292,146,292,147,290,147",
        abbr: "CAT"
    },
    {
        timezone: "Africa/Malabo",
        country: "GQ",
        pin: "262,120",
        offset: 1,
        points: "266,123,266,124,263,123,264,122,266,122,266,123",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Maputo",
        country: "MZ",
        pin: "295,161",
        offset: 2,
        points: "296,160,295,161,295,162,296,161,296,162,295,162,294,159,293,156,295,155,296,153,295,151,296,148,292,147,292,146,296,144,297,145,298,145,298,146,298,147,299,149,300,146,298,144,298,141,302,141,306,140,306,146,305,148,303,149,300,151,298,152,298,154,299,156,299,158,296,160",
        abbr: "CAT"
    },
    {
        timezone: "Africa/Mbabane",
        country: "SZ",
        pin: "293,162",
        offset: 2,
        points: "294,161,295,162,294,163,293,162,294,161,294,161",
        abbr: "SAST"
    },
    {
        timezone: "Africa/Mogadishu",
        country: "SO",
        pin: "313,122",
        offset: 3,
        points: "310,125,308,127,307,126,307,121,308,119,312,118,317,114,311,113,309,110,310,109,312,111,321,109,321,111,321,111,321,111,321,112,317,119,310,125",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Monrovia",
        country: "LR",
        pin: "235,116",
        offset: 0,
        points: "239,118,240,119,238,119,234,116,236,113,237,113,237,115,238,115,238,114,239,115,238,116,240,117,239,118",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Nairobi",
        country: "KE",
        pin: "301,127",
        offset: 3,
        points: "308,127,306,129,304,131,302,130,302,129,297,126,297,125,299,122,297,119,298,119,300,119,305,120,307,119,308,119,307,121,307,126,308,127",
        abbr: "EAT"
    },
    {
        timezone: "Africa/Maseru",
        country: "LS",
        pin: "288,166",
        offset: 2,
        points: "289,167,289,167,288,166,290,165,291,166,289,167",
        abbr: "SAST"
    },
    {
        timezone: "Africa/Ndjamena",
        country: "TD",
        pin: "271,108",
        offset: 1,
        points: "278,112,276,113,276,114,272,115,269,112,270,111,272,111,271,110,271,107,270,107,269,105,272,102,272,97,271,95,271,93,272,92,283,98,283,103,282,103,280,107,281,107,282,110,280,110,279,112,278,112",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Niamey",
        country: "NE",
        pin: "253,106",
        offset: 1,
        points: "256,106,255,108,255,109,254,108,253,108,253,107,251,107,252,106,251,106,250,104,255,104,256,101,256,98,258,98,267,92,270,94,271,93,271,95,272,97,272,102,269,105,269,106,267,107,265,106,263,107,261,106,260,107,258,106,256,106",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Nouakchott",
        country: "MR",
        pin: "228,100",
        offset: 0,
        points: "234,103,233,105,230,102,227,102,227,103,228,100,227,98,228,97,227,95,226,96,232,95,232,93,233,92,233,89,238,89,238,87,243,90,241,90,242,103,237,103,235,104,234,103",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Ouagadougou",
        country: "BF",
        pin: "248,108",
        offset: 0,
        points: "249,110,246,110,246,112,246,111,243,112,242,111,242,109,244,108,244,106,245,107,247,105,250,104,250,104,251,106,252,106,251,107,253,107,253,109,252,110,249,110",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Porto-Novo",
        country: "BJ",
        pin: "254,116",
        offset: 1,
        points: "254,114,254,116,252,116,252,112,251,111,252,109,253,109,254,108,255,109,255,110,254,112,254,114",
        abbr: "WAT"
    },
    {
        timezone: "Africa/Tunis",
        country: "TN",
        pin: "264,74",
        offset: 1,
        points: "266,80,264,81,264,82,263,83,263,80,261,79,260,78,262,76,261,74,263,73,264,73,264,74,265,74,265,75,266,76,264,78,266,79,266,80",
        abbr: "CET"
    },
    {
        timezone: "Africa/Sao_Tome",
        country: "ST",
        pin: "259,125",
        offset: 0,
        points: "260,123,260,123,260,123",
        abbr: "GMT"
    },
    {
        timezone: "Africa/Tripoli",
        country: "LY",
        pin: "268,79",
        offset: 2,
        points: "285,88,285,97,283,97,283,98,272,92,270,94,264,91,263,89,264,88,264,86,263,83,264,82,264,81,266,80,266,79,271,80,272,81,276,83,278,82,278,80,281,79,282,80,285,81,284,83,285,88",
        abbr: "EET"
    },
    {
        timezone: "Africa/Windhoek",
        country: "NA",
        pin: "274,156",
        offset: 2,
        points: "278,163,278,164,277,165,274,165,274,164,273,165,272,164,271,162,270,156,267,151,266,149,268,149,269,149,276,149,279,150,284,149,285,150,283,151,282,150,279,150,279,156,278,156,278,163",
        abbr: "WAST"
    },
    {
        timezone: "America/Adak",
        country: "US",
        pin: "5,53",
        offset: -10,
        points: "7,53,6,53,8,52,7,53",
        abbr: "HST"
    },
    {
        timezone: "America/Argentina/Salta",
        country: "AR",
        pin: "159,159",
        offset: -3,
        points: "162,180,162,182,163,182,160,182,160,183,150,183,150,180,152,179,151,176,152,175,153,177,155,177,155,175,160,175,160,174,162,174,162,180",
        abbr: "ART"
    },
    {
        timezone: "America/Argentina/Salta",
        country: "AR",
        pin: "159,159",
        offset: -3,
        points: "159,156,161,157,161,156,163,156,163,156,163,159,162,161,158,162,157,161,158,160,155,160,155,159,157,158,158,159,158,157,159,159,161,159,161,158,160,158,159,156",
        abbr: "ART"
    },
    {
        timezone: "America/Anchorage",
        country: "US",
        pin: "42,40",
        offset: -9,
        points: "42,42,40,43,39,43,40,42,39,42,40,41,43,41,42,40,42,40,40,40,36,43,37,43,36,44,30,47,30,47,25,48,25,48,27,48,27,47,31,45,31,44,32,43,30,44,30,43,29,44,27,43,25,44,25,37,27,36,26,36,27,35,25,35,25,33,26,33,25,33,25,32,26,33,25,32,25,27,33,26,34,26,33,27,35,26,39,27,39,27,38,27,39,27,51,28,54,28,54,42,54,41,50,42,46,41,47,40,44,40,45,40,43,41,44,41,44,41,44,41,42,42",
        abbr: "AKST"
    },
    {
        timezone: "America/Anguilla",
        country: "AI",
        pin: "162,100",
        offset: -4,
        points: "162,100,162,100,162,100",
        abbr: "AST"
    },
    {
        timezone: "America/Antigua",
        country: "AG",
        pin: "164,101",
        offset: -4,
        points: "164,101,164,101,164,101",
        abbr: "AST"
    },
    {
        timezone: "America/Araguaina",
        country: "BR",
        pin: "183,135",
        offset: -3,
        points: "185,136,185,136,185,138,186,139,185,141,186,141,186,143,184,143,182,143,182,142,181,143,180,143,180,142,180,143,180,140,182,137,182,135,183,134,183,133,183,132,184,133,184,135,185,136",
        abbr: "BRT"
    },
    {
        timezone: "America/Buenos_Aires",
        country: "AR",
        pin: "169,173",
        offset: -3,
        points: "167,171,169,172,169,173,171,174,170,175,171,176,169,178,165,179,163,179,164,180,163,180,163,181,164,181,163,182,162,182,162,173,164,173,165,172,167,171",
        abbr: "ART"
    },
    {
        timezone: "America/Catamarca",
        country: "AR",
        pin: "159,165",
        offset: -3,
        points: "159,188,157,188,156,189,151,189,151,188,150,187,151,187,150,187,151,186,150,184,160,183,161,184,161,183,162,184,160,184,161,185,159,186,159,188",
        abbr: "ART"
    },
    {
        timezone: "America/Catamarca",
        country: "AR",
        pin: "159,165",
        offset: -3,
        points: "160,167,158,164,154,164,155,162,155,160,158,160,157,161,159,162,158,163,159,164,159,164,160,167",
        abbr: "ART"
    },
    {
        timezone: "America/Cordoba",
        country: "AR",
        pin: "161,169",
        offset: -3,
        points: "163,173,162,173,162,174,160,174,160,170,159,169,159,168,160,166,159,164,161,161,162,161,163,159,163,156,165,158,170,160,169,163,173,163,174,162,174,161,175,161,175,163,173,164,170,167,169,172,166,171,164,173,163,173",
        abbr: "ART"
    },
    {
        timezone: "America/Jujuy",
        country: "AR",
        pin: "159,159",
        offset: -3,
        points: "157,157,158,155,159,156,159,157,160,158,161,158,161,159,160,159,159,159,158,157,158,159,157,158,157,157",
        abbr: "ART"
    },
    {
        timezone: "America/Argentina/La_Rioja",
        country: "AR",
        pin: "157,166",
        offset: -3,
        points: "156,167,154,166,154,165,153,164,154,164,158,164,160,167,159,169,157,169,156,167",
        abbr: "ART"
    },
    {
        timezone: "America/Mendoza",
        country: "AR",
        pin: "154,171",
        offset: -3,
        points: "152,170,156,170,157,171,157,175,155,175,155,177,153,177,152,175,152,174,153,171,152,170",
        abbr: "ART"
    },
    {
        timezone: "America/Argentina/Rio_Gallegos",
        country: "AR",
        pin: "154,197",
        offset: -3,
        points: "151,189,156,189,157,190,159,191,158,192,154,195,154,197,155,198,150,197,149,197,150,195,148,196,148,195,148,193,150,192,149,191,150,191,151,189",
        abbr: "ART"
    },
    {
        timezone: "America/Argentina/San_Juan",
        country: "AR",
        pin: "155,169",
        offset: -3,
        points: "153,167,154,164,154,165,154,166,156,167,157,169,156,169,156,170,154,169,152,170,152,168,153,167",
        abbr: "ART"
    },
    {
        timezone: "America/Argentina/San_Luis",
        country: "AR",
        pin: "158,171",
        offset: -3,
        points: "159,169,160,170,160,175,157,175,156,169,159,169",
        abbr: "ART"
    },
    {
        timezone: "America/Argentina/Tucuman",
        country: "AR",
        pin: "159,162",
        offset: -3,
        points: "158,161,160,161,160,164,159,164,158,163,159,162,158,161",
        abbr: "ART"
    },
    {
        timezone: "America/Aruba",
        country: "AW",
        pin: "153,108",
        offset: -4,
        points: "153,108,153,108,153,108",
        abbr: "AST"
    },
    {
        timezone: "America/Argentina/Ushuaia",
        country: "AR",
        pin: "155,201",
        offset: -3,
        points: "155,201,155,198,155,199,155,199,156,200,160,201,158,201,155,201",
        abbr: "ART"
    },
    {
        timezone: "America/Asuncion",
        country: "PY",
        pin: "170,160",
        offset: -3,
        points: "174,161,173,163,169,163,170,160,165,158,163,156,164,152,167,152,169,152,169,156,172,156,173,158,175,158,174,161",
        abbr: "PYST"
    },
    {
        timezone: "America/Bahia_Banderas",
        country: "MX",
        pin: "104,96",
        offset: -6,
        points: "104,96,103,96,104,96",
        abbr: "CST"
    },
    {
        timezone: "America/Toronto",
        country: "CA",
        pin: "123,57",
        offset: -5,
        points: "125,58,122,58,123,57,124,57,124,58,125,58",
        abbr: "EST"
    },
    {
        timezone: "America/Bahia",
        country: "BR",
        pin: "197,143",
        offset: -3,
        points: "187,146,186,146,186,141,185,141,186,140,187,139,188,140,189,140,189,138,191,138,193,137,194,138,195,137,197,137,198,139,197,140,198,141,196,143,196,147,195,150,194,149,195,147,194,147,193,147,192,146,189,145,189,145,187,146",
        abbr: "BRT"
    },
    {
        timezone: "America/Barbados",
        country: "BB",
        pin: "167,107",
        offset: -4,
        points: "167,106,167,107,167,106",
        abbr: "AST"
    },
    {
        timezone: "America/Belem",
        country: "BR",
        pin: "183,127",
        offset: -3,
        points: "179,126,180,125,179,126,180,125,183,125,182,127,180,128,182,127,181,128,183,127,183,126,186,127,185,130,182,132,183,133,182,135,182,137,180,139,177,138,178,138,177,136,178,134,177,132,177,130,178,129,177,127,178,127,177,126,176,123,174,122,174,122,177,122,178,119,180,122,181,123,179,126",
        abbr: "BRT"
    },
    {
        timezone: "America/Belize",
        country: "BZ",
        pin: "128,101",
        offset: -6,
        points: "128,101,128,101,128,101",
        abbr: "CST"
    },
    {
        timezone: "America/Blanc-Sablon",
        country: "CA",
        pin: "171,54",
        offset: -4,
        points: "169,54,167,55,169,54",
        abbr: "AST"
    },
    {
        timezone: "America/Boa_Vista",
        country: "BR",
        pin: "166,121",
        offset: -4,
        points: "167,118,166,119,167,120,167,121,167,122,168,123,168,125,167,125,166,126,165,126,164,127,163,126,163,122,161,122,160,119,163,120,163,119,165,119,166,118,167,118",
        abbr: "AMT"
    },
    {
        timezone: "America/Bogota",
        country: "CO",
        pin: "147,119",
        offset: -5,
        points: "154,126,153,131,152,130,153,129,152,128,150,128,149,128,146,125,142,124,140,123,143,120,142,119,143,117,142,115,143,114,143,113,143,114,143,113,145,112,145,110,148,109,150,108,151,108,149,110,148,112,149,113,149,115,150,115,153,115,154,117,156,117,156,119,157,120,156,121,157,122,157,123,156,122,153,123,153,124,154,124,153,124,154,126",
        abbr: "COT"
    },
    {
        timezone: "America/Boise",
        country: "US",
        pin: "89,64",
        offset: -7,
        points: "96,66,96,67,87,67,87,66,86,66,86,64,87,63,88,62,88,61,89,62,92,62,93,63,96,63,96,66",
        abbr: "MST"
    },
    {
        timezone: "America/Cambridge_Bay",
        country: "CA",
        pin: "104,29",
        offset: -7,
        points: "99,18,100,19,99,19,101,19,100,20,102,19,104,20,103,21,97,21,97,20,99,20,97,20,98,19,97,19,99,18",
        abbr: "MST"
    },
    {
        timezone: "America/Cambridge_Bay",
        country: "CA",
        pin: "104,29",
        offset: -7,
        points: "108,36,97,35,95,34,92,34,81,30,81,28,89,29,92,30,89,31,90,31,97,31,100,32,99,32,101,33,100,32,101,32,101,32,101,32,100,31,103,30,99,30,100,30,103,29,105,31,106,30,109,31,113,31,113,30,115,30,116,30,116,31,117,30,116,31,118,32,117,30,120,30,120,30,120,29,119,30,120,28,116,28,117,27,116,27,116,26,119,25,118,25,120,25,121,26,121,27,123,28,122,27,121,28,122,28,121,28,125,29,123,29,124,29,124,30,125,30,126,29,126,32,108,32,108,36",
        abbr: "MST"
    },
    {
        timezone: "America/Cambridge_Bay",
        country: "CA",
        pin: "104,29",
        offset: -7,
        points: "115,24,116,24,116,25,116,25,114,25,114,26,113,26,107,24,111,24,110,23,115,24",
        abbr: "MST"
    },
    {
        timezone: "America/Cambridge_Bay",
        country: "CA",
        pin: "104,29",
        offset: -7,
        points: "100,23,103,24,105,26,105,26,110,27,110,28,106,28,107,28,107,29,108,28,109,29,107,29,104,29,104,29,102,28,99,30,93,30,92,29,93,29,88,29,87,28,97,28,97,24,99,24,100,26,101,25,100,23,100,23",
        abbr: "MST"
    },
    {
        timezone: "America/Campo_Grande",
        country: "BR",
        pin: "174,153",
        offset: -3,
        points: "176,150,177,151,179,152,179,153,175,158,173,158,172,156,169,156,170,150,172,149,173,150,175,149,175,150,176,150",
        abbr: "AMST"
    },
    {
        timezone: "America/Cancun",
        country: "MX",
        pin: "129,96",
        offset: -6,
        points: "128,95,130,96,128,98,129,98,128,100,128,99,127,100,126,100,126,98,128,96,128,95",
        abbr: "EST"
    },
    {
        timezone: "America/Caracas",
        country: "VE",
        pin: "157,110",
        offset: -4.5,
        points: "163,111,165,112,165,113,167,113,166,115,166,115,165,116,165,117,166,118,163,119,163,120,160,119,161,122,162,122,159,124,159,124,158,124,157,123,157,122,156,121,157,120,156,119,156,116,154,117,153,115,150,115,149,112,148,112,149,110,151,109,150,109,151,110,150,111,150,112,151,112,151,112,151,110,153,109,153,108,153,109,155,109,155,110,158,110,160,111,162,110,161,110,164,110,163,110,163,111",
        abbr: "VET"
    },
    {
        timezone: "America/Cayenne",
        country: "GF",
        pin: "177,118",
        offset: -3,
        points: "176,117,178,119,177,122,175,122,175,120,174,118,175,117,176,117",
        abbr: "GFT"
    },
    {
        timezone: "America/Cayman",
        country: "KY",
        pin: "137,98",
        offset: -5,
        points: "139,98,139,98,139,98",
        abbr: "EST"
    },
    {
        timezone: "America/Chicago",
        country: "US",
        pin: "128,67",
        offset: -6,
        points: "128,72,132,74,132,75,131,76,132,80,132,84,130,83,130,83,129,83,129,82,128,83,128,82,128,83,124,83,126,83,125,84,126,84,126,85,125,84,125,85,120,83,118,84,118,84,118,85,116,86,117,85,116,85,116,86,115,86,115,87,114,87,115,87,115,89,112,88,112,87,109,84,107,84,107,85,105,84,104,82,104,81,107,81,107,74,108,74,108,73,109,73,109,70,108,70,108,69,109,69,109,67,110,67,109,64,111,63,110,63,111,62,111,61,109,61,110,60,110,59,106,59,105,57,118,57,118,56,119,57,126,58,122,60,124,60,124,60,128,61,128,62,128,63,129,63,128,66,129,67,130,67,128,68,128,72",
        abbr: "CST"
    },
    {
        timezone: "America/Chihuahua",
        country: "MX",
        pin: "103,85",
        offset: -7,
        points: "106,85,106,86,106,88,105,88,103,88,101,89,98,86,99,86,99,82,100,82,100,81,102,81,104,83,105,84,106,85",
        abbr: "MST"
    },
    {
        timezone: "America/Coral_Harbour",
        country: "",
        pin: "250,125",
        offset: -5,
        points: "131,33,132,34,133,34,136,35,137,36,136,36,139,36,137,37,135,36,131,37,131,36,129,37,130,36,130,34,131,33",
        abbr: "EST"
    },
    {
        timezone: "America/Costa_Rica",
        country: "CR",
        pin: "133,111",
        offset: -6,
        points: "132,112,131,111,131,109,134,110,135,112,135,112,135,114,131,111,132,112",
        abbr: "CST"
    },
    {
        timezone: "America/Creston",
        country: "CA",
        pin: "88,57",
        offset: -7,
        points: "89,57,87,57,88,56,89,57",
        abbr: "MST"
    },
    {
        timezone: "America/Cuiaba",
        country: "BR",
        pin: "172,147",
        offset: -3,
        points: "179,146,176,148,176,150,175,150,175,149,173,150,172,149,170,150,169,149,169,148,166,148,166,144,167,142,167,141,165,140,164,137,169,137,169,135,170,137,171,138,180,139,180,141,180,143,179,146",
        abbr: "AMST"
    },
    {
        timezone: "America/Curacao",
        country: "CW",
        pin: "154,108",
        offset: -4,
        points: "154,108,154,108,154,108",
        abbr: "AST"
    },
    {
        timezone: "America/Danmarkshavn",
        country: "GL",
        pin: "224,18",
        offset: 0,
        points: "223,15,223,15,224,15,221,16,221,16,220,17,221,17,223,17,224,17,221,17,224,18,225,18,218,18,223,19,220,19,223,20,218,20,219,14,223,15",
        abbr: "GMT"
    },
    {
        timezone: "America/Dawson",
        country: "CA",
        pin: "56,36",
        offset: -8,
        points: "56,36,56,36,56,36",
        abbr: "PST"
    },
    {
        timezone: "America/Dawson_Creek",
        country: "CA",
        pin: "83,42",
        offset: -7,
        points: "83,45,83,50,79,48,78,46,83,45",
        abbr: "MST"
    },
    {
        timezone: "America/Denver",
        country: "US",
        pin: "104,70",
        offset: -7,
        points: "93,63,92,62,91,62,91,60,89,59,89,57,105,57,106,59,108,59,108,60,110,61,109,61,111,61,111,62,110,63,111,63,109,64,110,67,109,67,109,69,108,69,108,70,109,70,109,73,108,73,108,74,107,74,107,81,104,81,104,82,102,81,99,81,99,76,96,76,95,74,95,74,92,74,92,67,96,67,96,63,93,63",
        abbr: "MST"
    },
    {
        timezone: "America/Detroit",
        country: "US",
        pin: "135,66",
        offset: -5,
        points: "132,67,129,67,130,66,130,64,130,63,131,62,132,63,132,61,134,62,134,62,134,63,133,65,135,64,136,65,134,67,132,67",
        abbr: "EST"
    },
    {
        timezone: "America/Detroit",
        country: "US",
        pin: "135,66",
        offset: -5,
        points: "125,60,127,59,127,60,130,61,132,60,134,61,131,61,130,62,129,61,128,62,129,62,128,61,126,61,125,60",
        abbr: "EST"
    },
    {
        timezone: "America/Dominica",
        country: "DM",
        pin: "165,104",
        offset: -4,
        points: "165,103,165,104,165,103",
        abbr: "AST"
    },
    {
        timezone: "America/Edmonton",
        country: "CA",
        pin: "92,51",
        offset: -7,
        points: "92,57,88,56,88,55,85,53,86,52,86,52,83,51,83,42,97,42,97,51,99,51,97,52,97,57,92,57",
        abbr: "MST"
    },
    {
        timezone: "America/Eirunepe",
        country: "BR",
        pin: "153,134",
        offset: -4,
        points: "156,138,148,135,148,134,149,132,150,131,153,131,156,138",
        abbr: "ACT"
    },
    {
        timezone: "America/El_Salvador",
        country: "SV",
        pin: "126,106",
        offset: -6,
        points: "126,106,125,106,126,105,128,106,128,107,126,106",
        abbr: "CST"
    },
    {
        timezone: "America/Fortaleza",
        country: "BR",
        pin: "197,130",
        offset: -3,
        points: "201,134,202,135,201,135,199,137,198,136,198,135,197,136,194,135,194,136,192,138,189,138,189,140,187,140,186,139,185,138,185,136,184,135,184,133,182,132,185,130,186,126,187,127,187,127,188,127,188,128,188,130,188,128,189,129,190,128,191,129,194,129,198,132,201,132,201,134",
        abbr: "BRT"
    },
    {
        timezone: "America/Glace_Bay",
        country: "CA",
        pin: "167,61",
        offset: -4,
        points: "167,61,166,61,166,61,167,61",
        abbr: "AST"
    },
    {
        timezone: "America/Godthab",
        country: "GL",
        pin: "178,36",
        offset: -3,
        points: "188,42,187,42,188,41,187,41,188,41,187,41,187,41,186,41,187,40,186,41,187,40,183,41,184,40,183,40,183,40,182,40,183,39,182,39,182,39,181,39,182,39,181,39,182,39,180,38,181,37,180,38,180,38,180,37,180,37,179,37,180,37,179,37,180,37,179,37,179,36,178,36,180,36,178,36,180,35,179,35,180,35,181,36,179,34,180,35,178,36,178,35,179,35,177,35,178,34,177,34,180,34,177,34,177,34,176,34,178,33,176,33,180,32,175,33,176,33,175,33,177,33,176,32,177,32,175,32,180,32,175,31,181,31,177,31,178,31,175,31,176,30,178,31,176,30,180,31,179,30,179,30,176,30,179,30,180,29,179,30,179,29,180,29,180,29,180,29,180,29,179,29,180,28,179,28,180,28,174,27,180,27,179,27,179,27,178,26,179,26,177,26,178,26,177,26,179,26,176,26,178,25,176,25,175,25,175,26,173,26,172,25,174,25,173,25,174,25,173,24,174,24,173,23,174,23,172,23,173,22,172,22,172,22,170,22,172,21,168,20,169,20,169,20,161,19,158,15,160,15,160,14,162,14,156,13,162,12,163,13,162,12,165,12,165,12,166,12,165,11,166,11,172,12,167,11,169,11,174,11,176,11,175,12,176,11,181,12,179,11,181,11,179,10,180,10,188,11,189,11,188,11,188,11,188,11,191,11,186,10,195,10,187,10,196,10,196,10,199,10,196,9,202,9,214,9,201,10,215,9,216,10,214,10,220,10,204,11,216,11,213,12,213,12,221,11,220,12,217,13,224,12,223,12,228,11,234,12,229,13,221,13,228,13,221,14,222,14,226,14,225,14,219,14,218,20,223,20,223,21,219,20,220,20,219,20,222,21,219,21,224,22,219,22,219,22,219,22,220,23,220,22,222,22,221,23,219,23,217,23,219,23,214,22,216,23,212,23,213,23,212,23,212,24,215,24,212,24,216,24,213,24,215,24,215,25,216,25,216,26,210,25,212,25,210,26,215,26,211,26,212,26,209,27,213,27,210,28,212,28,215,27,219,28,213,30,208,30,206,30,205,30,206,31,204,31,202,33,198,33,198,34,197,33,198,33,197,33,197,33,197,33,197,34,195,34,194,34,195,34,194,35,193,35,194,36,192,36,194,36,194,37,192,36,193,37,192,37,192,37,191,37,192,38,190,38,191,38,190,38,192,39,190,39,191,39,190,40,191,40,189,40,191,40,190,41,190,41,189,41,190,42,189,41,188,42",
        abbr: "WGT"
    },
    {
        timezone: "America/Goose_Bay",
        country: "CA",
        pin: "166,51",
        offset: -4,
        points: "171,53,161,53,161,52,162,52,162,52,161,52,160,53,158,53,158,51,156,52,157,51,156,50,157,49,156,49,157,49,157,48,159,49,161,49,162,48,161,48,161,47,162,47,161,47,162,45,160,44,162,43,160,43,161,43,161,42,160,42,160,41,162,43,161,43,163,43,162,44,163,44,162,44,164,45,163,45,165,46,163,46,164,46,164,47,166,48,166,48,166,49,167,48,167,48,168,48,167,49,168,48,168,49,170,49,167,50,169,50,166,51,170,50,171,50,170,51,171,53",
        abbr: "AST"
    },
    {
        timezone: "America/Grand_Turk",
        country: "TC",
        pin: "151,95",
        offset: -5,
        points: "151,95,151,95,151,95",
        abbr: "AST"
    },
    {
        timezone: "America/Grenada",
        country: "GD",
        pin: "164,108",
        offset: -4,
        points: "165,108,165,108,165,108",
        abbr: "AST"
    },
    {
        timezone: "America/Guadeloupe",
        country: "GP",
        pin: "165,102",
        offset: -4,
        points: "165,102,165,102,165,102",
        abbr: "AST"
    },
    {
        timezone: "America/Guatemala",
        country: "GT",
        pin: "124,105",
        offset: -6,
        points: "125,106,123,105,122,104,123,103,124,103,123,101,124,101,124,100,126,100,126,103,127,103,125,106",
        abbr: "CST"
    },
    {
        timezone: "America/Guayaquil",
        country: "EC",
        pin: "139,128",
        offset: -5,
        points: "141,130,140,132,139,131,138,131,139,128,139,129,137,128,139,124,141,123,142,124,144,124,145,125,145,125,146,126,141,130",
        abbr: "ECT"
    },
    {
        timezone: "America/Guyana",
        country: "GY",
        pin: "169,116",
        offset: -4,
        points: "170,116,171,118,170,118,169,119,172,122,170,122,168,123,167,122,167,121,167,120,166,119,167,118,165,117,165,116,166,115,166,115,167,114,167,113,169,115,169,116,169,115,170,116",
        abbr: "GYT"
    },
    {
        timezone: "America/Halifax",
        country: "CA",
        pin: "162,63",
        offset: -4,
        points: "161,63,162,62,160,62,161,61,163,62,164,61,165,62,161,63,159,65,158,64,158,63,160,62,161,63",
        abbr: "AST"
    },
    {
        timezone: "America/Havana",
        country: "CU",
        pin: "136,93",
        offset: -5,
        points: "146,96,147,97,142,97,143,96,141,96,141,95,136,94,136,94,137,94,136,93,132,95,134,93,138,93,146,96",
        abbr: "CST"
    },
    {
        timezone: "America/Hermosillo",
        country: "MX",
        pin: "96,85",
        offset: -7,
        points: "90,81,91,80,96,81,99,81,99,86,98,86,99,88,98,88,96,87,97,86,94,85,93,82,90,81",
        abbr: "MST"
    },
    {
        timezone: "America/Indiana/Petersburg",
        country: "US",
        pin: "129,72",
        offset: -5,
        points: "129,72,129,72,129,72",
        abbr: "EST"
    },
    {
        timezone: "America/Indiana/Tell_City",
        country: "US",
        pin: "129,72",
        offset: -6,
        points: "130,72,130,72,130,72",
        abbr: "CST"
    },
    {
        timezone: "America/Indiana/Vevay",
        country: "US",
        pin: "132,71",
        offset: -5,
        points: "132,71,132,71,132,71",
        abbr: "EST"
    },
    {
        timezone: "America/Indianapolis",
        country: "US",
        pin: "130,70",
        offset: -5,
        points: "132,71,130,72,130,71,128,71,128,68,130,68,130,67,132,67,132,70,132,71",
        abbr: "EST"
    },
    {
        timezone: "America/Indiana/Knox",
        country: "US",
        pin: "130,68",
        offset: -6,
        points: "130,67,129,68,130,67",
        abbr: "CST"
    },
    {
        timezone: "America/Indiana/Marengo",
        country: "US",
        pin: "130,72",
        offset: -5,
        points: "130,72,130,72,130,72,130,72",
        abbr: "EST"
    },
    {
        timezone: "America/Indiana/Vincennes",
        country: "US",
        pin: "128,71",
        offset: -5,
        points: "128,72,128,71,130,71,130,72,128,72",
        abbr: "EST"
    },
    {
        timezone: "America/Indiana/Winamac",
        country: "US",
        pin: "130,68",
        offset: -5,
        points: "130,68,129,68,130,68",
        abbr: "EST"
    },
    {
        timezone: "America/Inuvik",
        country: "CA",
        pin: "64,30",
        offset: -7,
        points: "65,30,64,30,65,30",
        abbr: "MST"
    },
    {
        timezone: "America/Iqaluit",
        country: "CA",
        pin: "155,36",
        offset: -5,
        points: "139,20,138,20,140,20,138,21,140,21,132,21,132,20,139,20",
        abbr: "EST"
    },
    {
        timezone: "America/Iqaluit",
        country: "CA",
        pin: "155,36",
        offset: -5,
        points: "139,10,145,10,144,11,145,10,142,10,156,10,155,10,156,10,156,12,154,12,156,12,152,12,156,12,156,13,152,13,153,14,149,14,152,14,151,14,147,14,146,14,148,15,142,15,147,15,142,15,146,16,143,16,145,16,145,17,141,17,142,17,141,18,136,18,142,18,141,19,137,19,138,19,135,18,136,19,132,19,132,18,134,18,134,17,136,17,132,17,132,15,136,16,134,16,137,15,132,15,134,15,132,15,132,14,138,14,139,14,134,13,144,13,140,13,143,12,140,12,140,12,139,13,132,13,132,12,136,12,132,12,132,11,133,11,132,10,140,11,135,11,138,10,137,10,141,10,138,10,139,10",
        abbr: "EST"
    },
    {
        timezone: "America/Iqaluit",
        country: "CA",
        pin: "155,36",
        offset: -5,
        points: "132,30,133,29,132,29,132,28,136,28,134,28,137,29,136,29,137,30,135,30,137,31,134,33,133,32,132,32,132,30",
        abbr: "EST"
    },
    {
        timezone: "America/Iqaluit",
        country: "CA",
        pin: "155,36",
        offset: -5,
        points: "144,24,140,24,138,23,142,23,144,24",
        abbr: "EST"
    },
    {
        timezone: "America/Iqaluit",
        country: "CA",
        pin: "155,36",
        offset: -5,
        points: "133,23,137,23,139,24,138,24,138,24,138,25,139,24,142,25,140,25,142,25,141,24,142,24,146,24,146,25,144,25,147,25,145,26,146,25,146,26,148,25,147,26,148,26,147,26,149,26,148,26,149,25,151,26,149,27,150,27,149,27,152,26,150,27,151,27,151,28,153,27,152,27,155,27,152,28,155,28,153,28,156,27,155,28,153,28,156,29,154,29,155,29,154,29,155,29,155,29,156,29,154,29,156,30,156,33,155,33,156,34,156,37,154,36,156,37,156,39,151,37,150,37,151,37,149,36,148,36,148,35,148,36,148,35,147,36,147,35,146,35,146,35,147,36,142,36,141,35,142,34,148,34,147,33,150,32,148,30,148,30,147,30,148,30,145,29,144,30,145,29,143,28,143,28,143,28,143,28,142,28,142,27,140,27,139,27,140,27,141,28,136,28,138,28,135,27,137,28,132,28,132,26,133,25,132,25,132,25,133,25,132,25,132,24,133,24,132,23,133,24,132,23,133,23",
        abbr: "EST"
    },
    {
        timezone: "America/La_Paz",
        country: "BO",
        pin: "155,148",
        offset: -4,
        points: "164,154,163,156,161,156,161,157,160,156,158,155,157,157,156,157,155,153,155,152,153,149,154,148,154,147,155,142,153,140,155,140,157,139,159,138,160,142,166,144,166,148,169,148,169,149,170,150,170,153,168,152,164,152,164,154",
        abbr: "BOT"
    },
    {
        timezone: "America/Jamaica",
        country: "JM",
        pin: "143,100",
        offset: -5,
        points: "144,100,143,100,141,100,143,99,144,100",
        abbr: "EST"
    },
    {
        timezone: "America/Juneau",
        country: "US",
        pin: "63,44",
        offset: -9,
        points: "59,43,62,42,66,45,65,46,65,45,64,45,65,45,64,45,65,45,64,44,64,44,63,44,62,42,62,42,62,44,61,44,61,43,61,43,61,43,60,43,61,44,60,44,58,43,59,43",
        abbr: "AKST"
    },
    {
        timezone: "America/Louisville",
        country: "US",
        pin: "131,72",
        offset: -5,
        points: "130,72,130,72,131,71,130,72",
        abbr: "EST"
    },
    {
        timezone: "America/Kentucky/Monticello",
        country: "US",
        pin: "132,74",
        offset: -5,
        points: "132,74,133,74,132,74,132,74",
        abbr: "EST"
    },
    {
        timezone: "America/Kralendijk",
        country: "BQ",
        pin: "155,108",
        offset: -4,
        points: "162,101,162,100,162,101",
        abbr: "AST"
    },
    {
        timezone: "America/Lima",
        country: "PE",
        pin: "143,142",
        offset: -5,
        points: "153,149,153,150,152,150,151,149,146,146,144,145,144,144,139,135,137,133,138,133,137,131,138,130,139,130,138,131,140,132,141,130,145,127,146,126,145,125,146,125,149,128,150,128,153,129,152,130,153,131,152,131,149,132,148,134,147,135,149,137,148,138,150,138,150,139,152,138,152,140,153,140,155,142,154,147,154,148,153,149",
        abbr: "PET"
    },
    {
        timezone: "America/Managua",
        country: "NI",
        pin: "130,108",
        offset: -6,
        points: "132,110,131,110,128,107,129,107,129,106,131,106,132,104,135,104,134,110,132,110",
        abbr: "CST"
    },
    {
        timezone: "America/Manaus",
        country: "BR",
        pin: "167,129",
        offset: -4,
        points: "167,125,168,125,169,127,172,128,169,134,169,135,169,137,164,137,163,136,162,136,161,137,160,138,158,138,157,139,156,138,153,131,154,127,153,124,154,124,153,124,153,123,156,122,157,123,158,124,159,124,159,124,161,122,162,122,163,124,163,126,164,127,165,126,166,126,167,125",
        abbr: "AMT"
    },
    {
        timezone: "America/Los_Angeles",
        country: "US",
        pin: "86,78",
        offset: -8,
        points: "91,62,88,62,88,61,88,62,87,63,86,64,86,66,87,66,87,67,92,67,92,75,91,75,91,77,91,79,91,79,87,80,85,78,82,77,82,76,80,73,80,72,79,72,78,71,77,69,78,67,77,66,78,61,78,61,78,61,78,60,78,60,78,60,78,60,77,58,80,58,79,59,80,58,80,59,79,60,80,59,80,57,89,57,89,59,91,60,91,62",
        abbr: "PST"
    },
    {
        timezone: "America/Lower_Princes",
        country: "SX",
        pin: "162,100",
        offset: -4,
        points: "162,100,162,100,162,100",
        abbr: "AST"
    },
    {
        timezone: "America/Maceio",
        country: "BR",
        pin: "200,138",
        offset: -3,
        points: "199,140,198,141,197,140,198,139,197,138,198,137,199,138,201,137,199,140",
        abbr: "BRT"
    },
    {
        timezone: "America/Marigot",
        country: "MF",
        pin: "162,100",
        offset: -4,
        points: "162,100,162,100,162,100",
        abbr: "AST"
    },
    {
        timezone: "America/Martinique",
        country: "MQ",
        pin: "165,105",
        offset: -4,
        points: "165,104,165,104,165,104",
        abbr: "AST"
    },
    {
        timezone: "America/Matamoros",
        country: "MX",
        pin: "115,89",
        offset: -6,
        points: "113,89,112,89,109,84,108,84,107,85,107,85,107,84,109,84,112,87,112,88,115,89,115,90,113,89",
        abbr: "CST"
    },
    {
        timezone: "America/Mazatlan",
        country: "MX",
        pin: "102,93",
        offset: -7,
        points: "104,93,106,95,105,96,104,96,104,95,103,94,100,90,98,89,98,88,100,88,101,90,104,93",
        abbr: "MST"
    },
    {
        timezone: "America/Mazatlan",
        country: "MX",
        pin: "102,93",
        offset: -7,
        points: "91,86,93,86,98,93,97,93,94,91,94,89,93,88,92,88,90,86,92,87,91,86",
        abbr: "MST"
    },
    {
        timezone: "America/Menominee",
        country: "US",
        pin: "128,62",
        offset: -6,
        points: "128,62,128,61,124,60,128,61,129,62,128,62",
        abbr: "CST"
    },
    {
        timezone: "America/Mexico_City",
        country: "MX",
        pin: "112,98",
        offset: -6,
        points: "119,103,118,102,116,103,114,103,104,98,103,97,104,96,105,96,106,95,105,94,106,92,108,91,107,90,110,91,111,93,114,94,117,99,119,100,122,99,122,100,124,100,124,101,123,101,124,102,123,103,122,105,119,102,119,103",
        abbr: "CST"
    },
    {
        timezone: "America/Merida",
        country: "MX",
        pin: "126,96",
        offset: -6,
        points: "124,96,125,95,128,95,128,96,126,98,126,100,122,100,122,99,123,99,124,96",
        abbr: "CST"
    },
    {
        timezone: "America/Metlakatla",
        country: "US",
        pin: "67,48",
        offset: -8,
        points: "67,48,67,48,67,48",
        abbr: "PST"
    },
    {
        timezone: "America/Miquelon",
        country: "PM",
        pin: "172,60",
        offset: -3,
        points: "172,60,172,60,172,60",
        abbr: "PMST"
    },
    {
        timezone: "America/Moncton",
        country: "CA",
        pin: "160,61",
        offset: -4,
        points: "157,58,160,59,159,60,160,60,160,61,161,61,158,62,156,62,156,62,156,60,154,59,155,58,157,58",
        abbr: "AST"
    },
    {
        timezone: "America/Monterrey",
        country: "MX",
        pin: "111,89",
        offset: -6,
        points: "107,90,108,91,106,92,105,94,104,94,101,90,103,88,105,88,106,88,106,86,106,85,108,84,109,84,112,89,115,89,115,90,115,90,114,90,114,94,111,93,110,91,107,90",
        abbr: "CST"
    },
    {
        timezone: "America/Montevideo",
        country: "UY",
        pin: "172,173",
        offset: -2,
        points: "172,173,170,173,169,172,170,167,171,167,172,168,173,168,176,170,175,173,172,173",
        abbr: "UYT"
    },
    {
        timezone: "America/Montreal",
        country: "",
        pin: "250,125",
        offset: -5,
        points: "146,63,147,62,144,62,141,61,139,59,140,53,140,54,140,53,141,52,140,51,140,50,139,49,142,48,144,47,143,44,141,44,143,42,142,41,143,41,142,41,142,40,141,41,142,40,142,39,142,38,146,39,148,38,150,39,150,39,151,39,150,40,151,40,153,40,153,42,151,42,153,42,153,43,154,43,152,44,154,43,155,44,154,45,156,44,155,44,156,44,156,45,158,43,158,44,158,43,159,43,159,43,160,43,159,42,160,41,160,42,161,42,161,43,160,43,162,43,160,44,162,45,161,47,162,47,161,47,161,48,162,48,161,49,159,49,157,48,157,49,156,49,157,49,156,50,157,51,156,52,158,51,158,53,160,53,161,52,162,52,162,52,161,52,161,53,171,53,171,53,168,54,167,55,164,55,158,55,158,55,156,57,155,57,152,60,149,61,157,57,160,57,161,58,159,58,155,58,153,60,152,62,151,63,146,63",
        abbr: "EST"
    },
    {
        timezone: "America/Montserrat",
        country: "MS",
        pin: "164,102",
        offset: -4,
        points: "164,102,164,102,164,102",
        abbr: "AST"
    },
    {
        timezone: "America/Nassau",
        country: "BS",
        pin: "143,90",
        offset: -5,
        points: "143,90,143,90,143,90",
        abbr: "EST"
    },
    {
        timezone: "America/New_York",
        country: "US",
        pin: "147,68",
        offset: -5,
        points: "132,82,131,76,132,75,133,74,130,72,132,71,132,71,132,67,136,67,140,66,140,65,144,65,144,64,146,63,152,62,154,59,156,60,156,62,157,63,155,64,154,63,154,64,152,64,151,66,152,67,153,67,153,67,151,67,151,67,151,68,148,68,146,71,145,70,146,72,145,73,145,72,144,71,145,70,144,70,144,72,143,72,144,72,143,72,144,74,143,73,144,74,145,75,144,74,145,75,143,75,145,76,143,76,144,76,143,76,144,76,144,77,138,80,137,82,139,88,138,90,137,90,136,88,136,88,136,88,135,87,136,86,135,86,135,84,133,83,131,84,132,82",
        abbr: "EST"
    },
    {
        timezone: "America/Nipigon",
        country: "CA",
        pin: "127,57",
        offset: -5,
        points: "127,57,127,57,127,57",
        abbr: "EST"
    },
    {
        timezone: "America/Nome",
        country: "US",
        pin: "20,35",
        offset: -9,
        points: "25,32,23,32,22,31,18,30,19,29,23,29,25,27,25,32",
        abbr: "AKST"
    },
    {
        timezone: "America/Nome",
        country: "US",
        pin: "20,35",
        offset: -9,
        points: "25,35,24,36,19,35,18,35,19,34,16,34,23,33,22,33,25,33,25,35",
        abbr: "AKST"
    },
    {
        timezone: "America/Nome",
        country: "US",
        pin: "20,35",
        offset: -9,
        points: "25,42,22,42,20,41,21,40,19,39,22,37,23,37,25,37,25,42",
        abbr: "AKST"
    },
    {
        timezone: "America/Noronha",
        country: "BR",
        pin: "205,130",
        offset: -2,
        points: "205,130,205,130,205,130",
        abbr: "FNT"
    },
    {
        timezone: "America/North_Dakota/Beulah",
        country: "US",
        pin: "109,59",
        offset: -6,
        points: "109,59,108,60,108,59,109,59",
        abbr: "CST"
    },
    {
        timezone: "America/North_Dakota/Center",
        country: "US",
        pin: "109,60",
        offset: -6,
        points: "110,60,109,60,110,60",
        abbr: "CST"
    },
    {
        timezone: "America/North_Dakota/New_Salem",
        country: "US",
        pin: "109,60",
        offset: -6,
        points: "110,60,110,60,110,61,108,60,110,60",
        abbr: "CST"
    },
    {
        timezone: "America/Ojinaga",
        country: "MX",
        pin: "105,84",
        offset: -7,
        points: "102,81,106,85,105,84,104,83,102,81,99,82,100,81,100,81,102,81",
        abbr: "MST"
    },
    {
        timezone: "America/Panama",
        country: "PA",
        pin: "140,113",
        offset: -5,
        points: "142,113,143,114,142,115,141,114,141,113,142,114,140,112,138,114,139,115,138,115,138,115,137,114,137,114,136,113,135,114,135,113,135,112,137,113,140,112,142,113",
        abbr: "EST"
    },
    {
        timezone: "America/Pangnirtung",
        country: "CA",
        pin: "159,33",
        offset: -5,
        points: "156,10,160,10,165,11,156,12,156,10",
        abbr: "EST"
    },
    {
        timezone: "America/Pangnirtung",
        country: "CA",
        pin: "159,33",
        offset: -5,
        points: "156,34,157,34,157,35,157,35,160,35,159,36,160,36,160,36,160,37,159,36,160,38,159,37,159,38,158,37,158,37,156,37,156,34",
        abbr: "EST"
    },
    {
        timezone: "America/Pangnirtung",
        country: "CA",
        pin: "159,33",
        offset: -5,
        points: "156,30,157,30,156,30,158,30,157,31,158,31,158,31,158,31,160,31,159,31,160,31,161,31,160,31,161,32,160,32,162,31,161,32,163,32,163,32,164,32,165,32,163,33,164,33,162,33,163,33,163,33,163,34,162,33,162,35,159,34,161,33,159,33,159,33,158,33,156,32,157,33,156,33,157,33,156,33,156,30",
        abbr: "EST"
    },
    {
        timezone: "America/Paramaribo",
        country: "SR",
        pin: "173,117",
        offset: -3,
        points: "175,118,175,120,174,122,172,121,172,122,171,122,169,119,170,118,171,118,171,117,175,117,175,118",
        abbr: "SRT"
    },
    {
        timezone: "America/Phoenix",
        country: "US",
        pin: "94,79",
        offset: -7,
        points: "99,80,99,81,96,81,91,80,91,77,91,75,91,75,92,74,95,74,95,74,96,76,99,76,99,80",
        abbr: "MST"
    },
    {
        timezone: "America/Port-au-Prince",
        country: "HT",
        pin: "150,99",
        offset: -5,
        points: "148,99,149,99,148,99",
        abbr: "EST"
    },
    {
        timezone: "America/Port_of_Spain",
        country: "TT",
        pin: "165,110",
        offset: -4,
        points: "164,110,164,110,164,110",
        abbr: "AST"
    },
    {
        timezone: "America/Porto_Velho",
        country: "BR",
        pin: "161,137",
        offset: -4,
        points: "167,142,166,144,164,144,160,142,159,138,157,139,158,138,160,138,161,137,162,136,163,136,165,137,165,140,167,140,167,142",
        abbr: "AMT"
    },
    {
        timezone: "America/Puerto_Rico",
        country: "PR",
        pin: "158,99",
        offset: -4,
        points: "158,99,158,99,158,99",
        abbr: "AST"
    },
    {
        timezone: "America/Rainy_River",
        country: "CA",
        pin: "119,57",
        offset: -6,
        points: "119,57,119,57,119,57",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "132,12,125,12,125,12,129,12,122,12,132,11,132,12",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "113,19,114,19,114,20,115,20,111,21,110,20,111,20,108,20,108,20,109,20,108,19,111,20,111,19,112,19,110,19,113,19",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "125,16,126,16,122,16,121,16,123,16,119,15,124,15,118,15,117,15,119,14,116,14,119,14,118,14,119,14,116,13,120,13,117,13,121,12,119,12,120,12,127,14,128,13,128,14,129,14,129,15,132,15,128,16,128,15,127,16,128,16,127,16,127,16,125,16",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "132,21,122,21,122,21,122,20,121,19,118,19,118,19,115,18,117,18,121,18,120,19,124,19,124,19,123,19,126,19,123,19,126,20,132,20,132,21",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "132,19,125,19,130,18,127,17,129,17,132,18,132,19",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "132,28,127,27,126,26,129,26,125,26,125,25,126,25,125,24,128,23,132,23,130,24,130,24,130,25,132,26,129,26,132,26,132,28",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "125,36,124,37,119,36,123,37,124,37,122,38,122,38,120,39,120,39,119,40,120,40,118,42,108,42,108,32,126,32,126,29,128,30,128,30,127,31,129,32,130,31,131,30,132,30,132,33,130,33,131,33,129,34,123,33,129,35,128,36,125,36",
        abbr: "CST"
    },
    {
        timezone: "America/Rankin_Inlet",
        country: "CA",
        pin: "122,38",
        offset: -6,
        points: "118,22,120,22,125,22,122,24,119,24,120,24,120,25,117,24,117,23,119,23,118,22",
        abbr: "CST"
    },
    {
        timezone: "America/Recife",
        country: "BR",
        pin: "202,136",
        offset: -3,
        points: "196,136,197,136,198,135,199,137,201,135,202,136,201,137,199,138,198,137,197,138,195,137,194,138,193,137,194,136,194,135,196,136",
        abbr: "BRT"
    },
    {
        timezone: "America/Regina",
        country: "CA",
        pin: "105,55",
        offset: -6,
        points: "104,57,97,57,97,52,99,51,97,51,97,42,108,42,108,48,108,49,109,50,109,57,104,57",
        abbr: "CST"
    },
    {
        timezone: "America/Resolute",
        country: "CA",
        pin: "118,21",
        offset: -6,
        points: "118,20,120,20,120,21,116,21,118,20",
        abbr: "CST"
    },
    {
        timezone: "America/Rio_Branco",
        country: "BR",
        pin: "156,139",
        offset: -4,
        points: "148,135,152,136,157,139,155,140,152,140,152,138,150,139,150,138,148,138,149,137,147,135,148,135",
        abbr: "ACT"
    },
    {
        timezone: "America/Santa_Isabel",
        country: "MX",
        pin: "90,83",
        offset: -8,
        points: "91,80,91,83,93,86,91,86,92,85,89,84,88,81,88,80,91,80",
        abbr: "PST"
    },
    {
        timezone: "America/Santarem",
        country: "BR",
        pin: "174,128",
        offset: -3,
        points: "176,125,177,126,178,127,177,127,178,129,177,130,177,132,178,134,177,136,178,138,177,138,171,138,170,137,169,134,172,128,168,126,168,123,170,122,172,122,172,121,174,121,174,123,176,123,176,125",
        abbr: "BRT"
    },
    {
        timezone: "America/Santiago",
        country: "CL",
        pin: "152,171",
        offset: -3,
        points: "152,199,154,198,155,198,155,201,150,201,153,201,152,200,154,201,154,201,154,201,153,200,154,199,152,199,152,199",
        abbr: "CLT"
    },
    {
        timezone: "America/Santiago",
        country: "CL",
        pin: "152,171",
        offset: -3,
        points: "148,193,148,195,148,196,150,195,149,197,150,197,155,198,152,198,151,200,149,199,150,199,151,198,151,198,149,198,149,199,148,199,149,198,148,198,148,197,149,198,149,197,149,198,149,198,149,198,149,197,148,196,148,197,149,197,148,197,149,197,148,197,148,197,148,197,147,197,148,196,147,196,148,195,148,195,147,196,147,195,146,195,147,195,147,194,148,194,147,193,147,194,147,193,147,193,147,193,147,192,146,192,148,192,148,191,146,191,147,191,147,191,147,191,147,190,145,190,146,189,147,189,147,190,148,188,148,189,148,188,149,188,148,188,149,187,148,186,149,184,149,184,149,184,149,183,149,183,150,183,148,183,147,182,148,180,148,177,148,177,151,172,151,165,152,162,152,157,153,155,152,150,154,149,155,152,155,153,156,157,157,157,156,158,155,159,155,162,153,164,153,167,152,168,153,173,152,174,152,175,151,176,152,179,150,180,150,183,150,184,151,186,150,187,151,187,150,187,151,188,150,188,150,190,149,191,149,193,148,193",
        abbr: "CLT"
    },
    {
        timezone: "America/Santo_Domingo",
        country: "DO",
        pin: "153,99",
        offset: -4,
        points: "151,100,150,100,150,99,150,97,153,98,154,98,153,98,155,99,155,100,151,100",
        abbr: "AST"
    },
    {
        timezone: "America/Scoresbysund",
        country: "GL",
        pin: "219,27",
        offset: -1,
        points: "216,25,219,25,218,26,220,25,219,26,220,26,220,26,219,26,220,26,219,26,220,27,217,27,216,26,216,25",
        abbr: "EGT"
    },
    {
        timezone: "America/Sao_Paulo",
        country: "BR",
        pin: "185,158",
        offset: -2,
        points: "181,166,179,168,178,170,180,167,179,167,179,168,176,172,176,171,176,170,175,170,173,168,172,168,171,167,170,167,173,164,175,162,175,161,174,161,175,159,176,157,178,155,179,152,177,151,176,149,179,146,180,142,181,143,182,142,182,143,184,143,186,143,186,146,189,145,195,147,194,149,195,150,195,152,193,155,193,156,192,157,188,157,183,160,182,160,183,161,182,161,183,161,182,164,181,166",
        abbr: "BRST"
    },
    {
        timezone: "America/Sitka",
        country: "US",
        pin: "62,46",
        offset: -9,
        points: "66,45,67,46,65,46,66,45,66,45",
        abbr: "AKST"
    },
    {
        timezone: "America/St_Barthelemy",
        country: "BL",
        pin: "163,100",
        offset: -4,
        points: "163,100,163,100,163,100",
        abbr: "AST"
    },
    {
        timezone: "America/St_Johns",
        country: "CA",
        pin: "177,59",
        offset: -3.5,
        points: "173,53,172,54,173,54,172,54,171,56,172,55,173,56,172,56,173,56,173,57,174,56,176,57,175,58,176,57,175,58,175,59,177,58,176,59,177,59,176,60,176,60,176,59,175,60,175,59,175,58,173,60,174,59,172,59,173,59,173,58,171,59,168,59,169,58,168,58,169,57,170,57,169,57,170,56,169,56,170,55,173,53",
        abbr: "NST"
    },
    {
        timezone: "America/Thule",
        country: "GL",
        pin: "154,19",
        offset: -4,
        points: "161,19,155,19,153,19,156,18,151,18,158,17,153,17,153,17,149,16,158,15,161,19",
        abbr: "AST"
    },
    {
        timezone: "America/St_Kitts",
        country: "KN",
        pin: "163,101",
        offset: -4,
        points: "163,101,163,101,163,101",
        abbr: "AST"
    },
    {
        timezone: "America/St_Lucia",
        country: "LC",
        pin: "165,106",
        offset: -4,
        points: "165,105,165,106,165,105",
        abbr: "AST"
    },
    {
        timezone: "America/St_Thomas",
        country: "VI",
        pin: "160,100",
        offset: -4,
        points: "160,99,160,99,160,99",
        abbr: "AST"
    },
    {
        timezone: "America/St_Vincent",
        country: "VC",
        pin: "165,107",
        offset: -4,
        points: "165,106,165,107,165,106",
        abbr: "AST"
    },
    {
        timezone: "America/Swift_Current",
        country: "CA",
        pin: "100,55",
        offset: -6,
        points: "100,55,100,55,100,55",
        abbr: "CST"
    },
    {
        timezone: "America/Tegucigalpa",
        country: "HN",
        pin: "129,105",
        offset: -6,
        points: "129,106,129,107,128,106,126,105,126,104,128,103,131,103,133,103,135,104,132,104,131,106,129,106",
        abbr: "CST"
    },
    {
        timezone: "America/Thunder_Bay",
        country: "CA",
        pin: "126,58",
        offset: -5,
        points: "126,58,126,58,126,58",
        abbr: "EST"
    },
    {
        timezone: "America/Tijuana",
        country: "MX",
        pin: "87,80",
        offset: -8,
        points: "87,80,87,80,87,80",
        abbr: "PST"
    },
    {
        timezone: "America/Toronto",
        country: "CA",
        pin: "140,64",
        offset: -5,
        points: "146,62,147,62,143,64,142,63,143,64,143,64,140,64,139,65,140,65,135,67,137,65,137,63,137,62,138,63,139,63,138,61,137,61,136,62,133,61,133,60,132,58,131,58,130,57,127,57,128,58,126,58,126,58,124,58,124,57,125,56,125,55,124,53,125,53,125,52,126,52,127,51,126,50,125,50,125,47,127,46,128,47,132,48,136,48,136,51,138,54,140,54,140,60,141,61,144,62,146,62",
        abbr: "EST"
    },
    {
        timezone: "America/Tortola",
        country: "VG",
        pin: "160,99",
        offset: -4,
        points: "160,99,160,99,160,99",
        abbr: "AST"
    },
    {
        timezone: "America/Vancouver",
        country: "CA",
        pin: "79,57",
        offset: -8,
        points: "72,54,76,55,79,58,76,57,77,57,76,57,75,56,74,56,75,56,72,55,73,55,72,54",
        abbr: "PST"
    },
    {
        timezone: "America/Vancouver",
        country: "CA",
        pin: "79,57",
        offset: -8,
        points: "63,43,62,42,59,43,57,42,83,42,83,45,78,46,79,48,86,52,86,52,85,53,88,55,88,57,79,57,81,56,81,57,80,56,81,57,80,57,80,56,79,57,79,56,79,56,79,55,79,56,78,56,78,56,78,56,78,55,77,56,77,55,77,55,76,55,77,54,76,54,76,55,75,55,76,54,75,55,74,54,75,54,73,54,74,54,73,54,74,53,73,53,72,53,73,52,74,53,74,52,75,52,73,52,73,52,73,52,72,53,72,52,72,52,72,52,71,51,73,51,71,51,71,50,70,51,69,50,70,50,69,49,69,50,69,49,70,48,69,49,70,48,70,48,69,49,69,47,67,46,65,44,63,43",
        abbr: "PST"
    },
    {
        timezone: "America/Whitehorse",
        country: "CA",
        pin: "62,41",
        offset: -8,
        points: "57,29,60,29,61,32,64,32,64,33,66,33,66,35,69,36,70,37,69,37,70,37,70,39,73,40,74,41,77,40,78,42,54,41,54,28,57,29",
        abbr: "PST"
    },
    {
        timezone: "America/Winnipeg",
        country: "CA",
        pin: "115,56",
        offset: -6,
        points: "122,58,119,57,118,56,118,57,109,57,109,50,108,49,108,48,108,42,118,42,118,43,121,43,122,45,121,46,124,45,126,46,125,47,125,50,126,50,127,51,126,52,125,52,125,53,124,53,125,55,125,56,123,57,122,58",
        abbr: "CST"
    },
    {
        timezone: "America/Yakutat",
        country: "US",
        pin: "56,42",
        offset: -9,
        points: "56,42,56,42,56,42",
        abbr: "AKST"
    },
    {
        timezone: "America/Yellowknife",
        country: "CA",
        pin: "91,38",
        offset: -7,
        points: "83,31,92,34,95,34,97,35,108,36,108,42,78,42,77,40,74,41,73,40,70,39,70,37,69,37,70,37,69,36,66,35,66,33,64,33,64,32,61,32,60,29,62,30,61,29,63,28,64,28,64,29,70,28,67,28,67,29,68,28,68,29,69,28,73,27,72,27,76,29,77,28,78,28,77,29,79,28,82,28,81,28,81,30,83,31",
        abbr: "MST"
    },
    {
        timezone: "America/Yellowknife",
        country: "CA",
        pin: "91,38",
        offset: -7,
        points: "88,17,90,18,88,18,89,18,87,19,86,19,86,18,83,20,79,19,84,18,88,17",
        abbr: "MST"
    },
    {
        timezone: "America/Yellowknife",
        country: "CA",
        pin: "91,38",
        offset: -7,
        points: "84,22,87,22,90,23,85,24,83,25,83,26,79,26,75,25,78,23,77,22,81,21,84,22",
        abbr: "MST"
    },
    {
        timezone: "America/Yellowknife",
        country: "CA",
        pin: "91,38",
        offset: -7,
        points: "91,19,97,20,97,21,93,22,91,21,96,20,87,20,90,20,87,20,91,20,88,20,91,19",
        abbr: "MST"
    },
    {
        timezone: "America/Yellowknife",
        country: "CA",
        pin: "91,38",
        offset: -7,
        points: "90,23,92,23,91,24,93,24,96,24,95,25,97,24,97,28,87,28,87,28,87,28,95,27,87,27,86,26,90,26,86,26,87,25,85,25,86,25,86,24,90,23",
        abbr: "MST"
    },
    {
        timezone: "Antarctica/Macquarie",
        country: "AU",
        pin: "471,201",
        offset: 11,
        points: "471,201,471,201,471,201",
        abbr: "MIST"
    },
    {
        timezone: "Arctic/Longyearbyen",
        country: "SJ",
        pin: "272,17",
        offset: 1,
        points: "275,14,275,14,275,15,275,14,280,16,276,16,276,17,274,18,274,19,273,19,272,18,273,18,269,17,273,17,270,17,274,17,269,17,269,17,274,16,273,16,273,16,271,16,271,15,270,16,271,16,268,16,267,16,268,16,266,15,267,15,266,15,267,15,266,15,265,15,269,14,267,14,269,15,269,15,270,14,273,15,272,14,275,14",
        abbr: "CET"
    },
    {
        timezone: "Arctic/Longyearbyen",
        country: "SJ",
        pin: "272,17",
        offset: 1,
        points: "285,14,288,14,283,15,275,14,277,14,276,13,278,14,277,13,281,14,282,13,282,13,282,14,285,14",
        abbr: "CET"
    },
    {
        timezone: "Asia/Aden",
        country: "YE",
        pin: "313,107",
        offset: 3,
        points: "313,107,310,107,309,104,310,101,314,102,314,103,318,100,322,99,324,102,323,102,322,103,313,107",
        abbr: "AST"
    },
    {
        timezone: "Asia/Almaty",
        country: "KZ",
        pin: "357,65",
        offset: 6,
        points: "348,66,345,68,343,68,342,66,344,65,345,64,344,63,343,61,337,60,339,58,339,58,340,57,342,57,345,55,344,54,344,52,342,52,342,51,342,51,342,51,342,49,346,48,348,48,349,50,352,50,352,51,357,49,356,50,358,51,361,55,362,54,363,55,366,54,368,56,371,56,371,57,369,58,369,60,365,59,364,62,365,62,363,62,361,63,362,63,362,65,361,66,359,65,355,66,353,65,352,65,352,66,350,66,348,66",
        abbr: "ALMT"
    },
    {
        timezone: "Asia/Amman",
        country: "JO",
        pin: "300,81",
        offset: 2,
        points: "302,82,303,83,302,83,300,84,299,84,299,80,301,80,304,79,305,80,301,81,302,82",
        abbr: "EET"
    },
    {
        timezone: "Asia/Anadyr",
        country: "RU",
        pin: "497,35",
        offset: 12,
        points: "10,32,14,33,13,34,12,34,12,34,10,34,11,34,11,35,9,35,11,36,10,36,6,35,6,34,2,34,2,33,2,33,0,33,1,34,0,35,0,29,7,31,8,33,9,33,7,32,10,32",
        abbr: "ANAT"
    },
    {
        timezone: "Asia/Anadyr",
        country: "RU",
        pin: "497,35",
        offset: 12,
        points: "497,35,493,35,498,36,499,38,499,39,496,38,492,39,491,38,487,39,484,37,486,37,484,36,473,35,471,34,471,33,470,33,471,32,469,31,470,30,476,30,476,29,475,28,476,28,483,28,486,30,488,29,486,28,487,28,495,28,500,29,500,35,498,35,497,35",
        abbr: "ANAT"
    },
    {
        timezone: "Asia/Aqtau",
        country: "KZ",
        pin: "320,63",
        offset: 5,
        points: "328,63,328,68,325,66,323,67,323,66,321,65,320,63,322,63,321,63,321,62,324,62,323,60,321,60,319,61,317,60,318,60,318,59,315,58,319,58,325,57,325,57,326,57,327,60,329,61,329,62,328,63",
        abbr: "AQTT"
    },
    {
        timezone: "Asia/Aqtobe",
        country: "KZ",
        pin: "329,55",
        offset: 5,
        points: "326,55,326,54,327,55,328,54,331,54,333,55,335,54,336,54,337,56,337,57,339,58,337,60,335,59,331,62,329,62,328,60,326,59,326,57,324,57,326,56,326,55",
        abbr: "AQTT"
    },
    {
        timezone: "Asia/Ashgabat",
        country: "TM",
        pin: "331,72",
        offset: 5,
        points: "340,74,340,75,337,76,335,75,335,74,334,74,332,73,329,72,325,73,325,71,324,71,324,70,325,70,323,69,324,68,323,67,325,66,327,68,329,68,329,67,331,66,331,66,331,66,331,66,333,66,334,68,336,68,337,70,343,72,342,73,341,73,340,74",
        abbr: "TMT"
    },
    {
        timezone: "Asia/Baghdad",
        country: "IQ",
        pin: "312,79",
        offset: 3,
        points: "315,83,315,85,312,84,308,82,304,80,304,79,307,77,307,74,309,73,312,73,313,75,314,75,313,78,314,79,316,80,316,81,316,82,317,83,315,83",
        abbr: "AST"
    },
    {
        timezone: "Asia/Bahrain",
        country: "BH",
        pin: "320,88",
        offset: 3,
        points: "320,89,320,89,320,89",
        abbr: "AST"
    },
    {
        timezone: "Asia/Bangkok",
        country: "TH",
        pin: "390,106",
        offset: 7,
        points: "391,116,392,117,390,117,390,116,389,116,389,116,386,113,387,110,388,109,388,106,386,104,387,102,385,99,386,99,386,97,387,98,389,97,390,97,390,98,391,98,390,101,392,100,393,100,393,99,394,100,397,103,396,105,394,105,392,106,393,109,391,107,390,107,390,106,389,107,388,112,389,112,390,115,391,116",
        abbr: "ICT"
    },
    {
        timezone: "Asia/Baku",
        country: "AZ",
        pin: "319,69",
        offset: 4,
        points: "314,67,316,68,317,67,320,69,319,69,318,72,317,71,317,70,317,70,315,71,315,70,313,69,314,69,313,68,315,68,314,67",
        abbr: "AZT"
    },
    {
        timezone: "Asia/Shanghai",
        country: "CN",
        pin: "250,125",
        offset: 8,
        points: "403,95,402,95,401,95,401,95,399,95,398,94,398,93,396,93,394,94,394,93,393,94,392,93,391,94,391,96,391,96,390,95,389,95,389,94,388,94,388,93,387,93,387,91,385,92,386,90,387,89,387,87,386,86,387,86,387,85,388,84,387,81,385,80,386,79,385,78,387,78,388,77,387,77,388,77,387,75,388,73,388,72,389,72,385,71,386,70,384,70,385,68,386,68,385,66,390,66,396,67,399,66,403,66,404,65,407,67,409,66,408,67,408,69,406,69,404,70,403,72,404,73,403,77,404,79,402,79,403,80,402,80,403,82,401,83,401,84,402,85,402,87,401,87,402,87,402,88,402,89,405,89,404,90,405,90,406,91,405,93,406,92,407,95,405,95,405,94,405,94,404,93,403,95",
        abbr: "CST"
    },
    {
        timezone: "Asia/Beirut",
        country: "LB",
        pin: "299,78",
        offset: 2,
        points: "300,79,299,79,300,77,301,77,301,77,300,79",
        abbr: "EET"
    },
    {
        timezone: "Asia/Bishkek",
        country: "KG",
        pin: "354,65",
        offset: 6,
        points: "354,69,353,69,353,70,350,71,346,70,352,68,350,67,349,68,347,67,349,66,348,66,349,66,352,66,352,65,353,65,355,66,359,65,361,66,359,68,357,68,356,69,354,69",
        abbr: "KGT"
    },
    {
        timezone: "Asia/Brunei",
        country: "BN",
        pin: "410,118",
        offset: 8,
        points: "410,118,410,119,410,118",
        abbr: "BNT"
    },
    {
        timezone: "Asia/Choibalsan",
        country: "MN",
        pin: "409,58",
        offset: 8,
        points: "412,61,411,62,409,62,408,63,406,62,405,60,405,59,407,59,406,56,409,55,412,56,410,58,411,59,415,58,416,59,416,61,415,60,412,61",
        abbr: "CHOT"
    },
    {
        timezone: "Asia/Colombo",
        country: "LK",
        pin: "361,115",
        offset: 5.5,
        points: "363,116,362,117,361,116,361,114,361,111,363,113,364,115,363,116",
        abbr: "IST"
    },
    {
        timezone: "Asia/Damascus",
        country: "SY",
        pin: "300,78",
        offset: 2,
        points: "302,80,301,80,299,80,299,79,301,77,300,76,301,75,301,74,304,74,309,73,307,75,307,77,302,80",
        abbr: "EET"
    },
    {
        timezone: "Asia/Dhaka",
        country: "BD",
        pin: "376,92",
        offset: 6,
        points: "375,94,375,94,375,95,374,95,373,91,372,91,374,90,372,89,373,88,374,89,375,89,375,90,378,90,377,92,377,93,378,92,379,95,378,95,378,96,378,94,378,94,377,94,377,93,376,93,376,92,375,92,376,93,374,92,375,92,376,94,375,94",
        abbr: "BDT"
    },
    {
        timezone: "Asia/Dili",
        country: "TL",
        pin: "424,137",
        offset: 9,
        points: "424,137,427,137,424,138,424,137",
        abbr: "TLT"
    },
    {
        timezone: "Asia/Dubai",
        country: "AE",
        pin: "327,90",
        offset: 4,
        points: "328,91,328,92,327,92,327,94,323,93,322,92,325,91,328,89,328,90,328,91",
        abbr: "GST"
    },
    {
        timezone: "Asia/Dushanbe",
        country: "TJ",
        pin: "346,71",
        offset: 5,
        points: "346,73,344,73,345,72,344,70,345,70,346,69,345,69,348,68,348,68,348,69,349,69,347,69,346,70,349,70,350,71,352,70,352,71,354,72,354,73,352,73,350,74,349,72,349,72,346,73",
        abbr: "TJT"
    },
    {
        timezone: "Asia/Gaza",
        country: "PS",
        pin: "298,81",
        offset: 2,
        points: "298,81,298,82,298,81",
        abbr: "EET"
    },
    {
        timezone: "Asia/Shanghai",
        country: "CN",
        pin: "250,125",
        offset: 8,
        points: "424,68,423,65,423,66,421,65,421,63,420,64,420,62,419,61,420,61,421,60,422,60,420,59,423,58,423,58,425,54,424,53,421,54,420,53,423,51,425,52,427,56,431,57,432,59,437,58,437,59,435,62,433,62,432,63,432,65,431,66,431,66,430,65,430,66,428,67,428,68,426,67,424,68",
        abbr: "CST"
    },
    {
        timezone: "Asia/Hebron",
        country: "PS",
        pin: "299,81",
        offset: 2,
        points: "299,81,299,80,299,81,298,81,299,81",
        abbr: "EET"
    },
    {
        timezone: "Asia/Saigon",
        country: "VN",
        pin: "398,110",
        offset: 7,
        points: "397,112,395,113,396,111,395,111,396,110,397,110,397,109,399,108,400,104,396,99,394,98,396,97,395,97,395,96,393,96,393,95,392,94,392,93,394,94,396,93,398,93,398,94,400,95,398,96,398,96,397,99,401,104,402,107,401,109,398,110,398,112,397,112",
        abbr: "ICT"
    },
    {
        timezone: "Asia/Hong_Kong",
        country: "HK",
        pin: "409,94",
        offset: 8,
        points: "409,94,408,94,409,94",
        abbr: "HKT"
    },
    {
        timezone: "Asia/Hovd",
        country: "MN",
        pin: "377,58",
        offset: 7,
        points: "387,63,386,64,386,66,384,66,383,63,376,62,376,60,375,59,372,58,372,57,378,54,381,55,381,56,385,56,385,56,386,57,388,57,388,58,386,58,387,59,385,60,387,61,387,63",
        abbr: "HOVT"
    },
    {
        timezone: "Asia/Irkutsk",
        country: "RU",
        pin: "395,52",
        offset: 9,
        points: "411,46,410,46,411,48,412,48,412,49,408,51,409,51,408,52,406,52,404,53,401,53,400,55,401,55,400,56,396,55,393,55,392,55,392,54,387,52,388,51,384,50,383,50,384,49,384,48,386,47,385,46,386,45,389,44,390,45,390,44,392,43,392,43,395,44,396,43,396,42,397,42,396,41,395,41,398,39,398,38,397,37,398,37,398,36,400,36,401,36,400,37,402,37,402,38,402,38,403,38,402,39,402,40,404,40,402,42,402,43,406,42,406,43,411,41,413,42,413,42,415,43,415,44,413,44,413,45,414,45,413,46,411,46",
        abbr: "IRKT"
    },
    {
        timezone: "Asia/Jakarta",
        country: "ID",
        pin: "398,134",
        offset: 7,
        points: "406,135,407,136,409,136,409,137,400,136,396,134,397,133,400,134,401,134,403,135,404,134,406,135",
        abbr: "WIB"
    },
    {
        timezone: "Asia/Jakarta",
        country: "ID",
        pin: "398,134",
        offset: 7,
        points: "397,131,397,133,396,133,396,133,395,133,395,133,392,131,389,125,388,125,387,123,383,119,382,117,385,118,386,119,393,124,393,125,394,125,394,126,395,126,395,129,397,128,397,129,397,131",
        abbr: "WIB"
    },
    {
        timezone: "Asia/Jayapura",
        country: "ID",
        pin: "445,129",
        offset: 9,
        points: "438,131,437,131,437,130,436,130,436,129,435,130,435,131,434,130,433,129,435,128,436,129,436,128,434,128,433,127,432,127,432,126,434,125,436,126,436,128,438,130,441,127,446,129,446,138,444,136,445,136,443,136,443,136,443,135,444,135,442,135,443,135,441,132,438,131",
        abbr: "WIT"
    },
    {
        timezone: "Asia/Kabul",
        country: "AF",
        pin: "346,77",
        offset: 4.5,
        points: "338,84,335,84,336,82,335,81,334,79,335,78,334,78,335,76,337,76,341,73,344,74,346,73,349,72,349,72,350,74,352,73,354,73,349,75,350,76,349,78,347,78,348,79,347,79,346,81,345,81,344,81,343,82,342,84,338,84",
        abbr: "AFT"
    },
    {
        timezone: "Asia/Jerusalem",
        country: "IL",
        pin: "299,81",
        offset: 2,
        points: "298,81,299,79,300,79,299,80,299,80,299,81,298,81,299,81,298,84,298,82,298,81",
        abbr: "IST"
    },
    {
        timezone: "Asia/Kamchatka",
        country: "RU",
        pin: "470,51",
        offset: 12,
        points: "476,45,477,47,475,47,475,48,475,49,472,50,472,51,470,51,470,52,468,54,466,47,468,45,468,45,471,44,475,41,477,41,477,40,478,40,478,39,480,38,477,38,476,39,477,39,476,39,475,39,476,38,475,37,476,37,476,36,477,36,477,35,484,36,486,37,484,37,486,38,491,38,492,39,489,40,487,42,484,41,481,42,481,41,479,42,477,42,477,43,475,44,477,45,476,45",
        abbr: "PETT"
    },
    {
        timezone: "Asia/Karachi",
        country: "PK",
        pin: "343,90",
        offset: 5,
        points: "348,86,347,88,348,89,349,91,348,91,346,91,344,92,344,91,343,91,342,89,336,90,336,89,338,88,338,87,337,87,337,86,336,85,335,84,339,84,342,84,343,82,346,81,347,79,348,79,347,78,349,78,349,77,350,76,349,75,350,74,354,74,355,74,356,75,358,76,355,77,353,77,353,79,355,80,354,81,354,82,350,86,348,86",
        abbr: "PKT"
    },
    {
        timezone: "Asia/Kashgar",
        country: "",
        pin: "250,125",
        offset: 6,
        points: "361,83,359,82,359,80,360,80,360,79,359,78,360,77,359,77,358,76,356,75,355,74,354,74,354,73,354,72,352,71,352,70,354,69,356,69,357,68,358,68,362,67,361,66,362,65,362,63,361,63,363,62,365,63,363,63,368,65,365,64,366,65,365,65,365,67,364,68,364,70,365,70,364,74,365,75,364,76,365,76,364,77,366,80,365,81,365,81,366,81,366,82,365,82,363,83,361,83",
        abbr: "XJT"
    },
    {
        timezone: "Asia/Katmandu",
        country: "NP",
        pin: "368,87",
        offset: 5.8,
        points: "368,86,372,86,372,88,369,88,367,87,366,87,361,85,362,84,363,83,368,85,368,86",
        abbr: "NPT"
    },
    {
        timezone: "Asia/Calcutta",
        country: "IN",
        pin: "373,94",
        offset: 5.5,
        points: "362,106,361,109,361,111,360,111,360,112,360,112,359,112,358,113,357,114,356,113,352,103,351,97,351,96,351,95,352,95,351,95,351,94,351,94,350,96,348,96,346,94,347,94,348,93,346,93,345,92,346,92,345,92,346,91,349,91,347,87,348,86,350,86,354,82,354,81,355,80,353,79,353,77,355,77,358,76,359,77,360,77,359,78,360,79,360,80,359,80,359,82,363,83,361,85,369,88,372,88,372,86,373,86,374,88,378,88,378,87,377,86,379,86,381,84,384,84,384,85,384,85,384,86,385,86,385,87,385,87,384,87,382,88,381,92,380,92,379,95,378,92,377,93,377,92,378,90,375,90,375,89,374,89,373,88,372,89,374,90,372,91,373,91,374,95,373,94,373,95,372,94,371,95,371,96,370,97,368,98,364,101,364,102,362,103,362,106",
        abbr: "IST"
    },
    {
        timezone: "Asia/Krasnoyarsk",
        country: "RU",
        pin: "379,47",
        offset: 8,
        points: "396,16,388,17,392,15,393,15,392,16,394,15,396,16,396,16",
        abbr: "KRAT"
    },
    {
        timezone: "Asia/Krasnoyarsk",
        country: "RU",
        pin: "379,47",
        offset: 8,
        points: "385,14,386,14,384,14,389,14,389,15,388,15,389,15,382,15,380,14,379,14,385,14",
        abbr: "KRAT"
    },
    {
        timezone: "Asia/Krasnoyarsk",
        country: "RU",
        pin: "379,47",
        offset: 8,
        points: "383,12,386,13,384,13,385,14,380,14,377,14,383,12",
        abbr: "KRAT"
    },
    {
        timezone: "Asia/Krasnoyarsk",
        country: "RU",
        pin: "379,47",
        offset: 8,
        points: "384,51,388,51,386,54,386,55,385,56,381,56,381,55,378,54,374,56,374,55,375,55,374,54,372,53,374,52,373,51,374,50,373,49,373,49,373,48,374,47,373,46,374,45,372,44,373,43,373,43,371,42,367,42,368,41,367,40,369,40,367,39,369,37,368,37,369,36,369,35,367,35,367,34,366,34,366,32,364,32,364,31,364,31,365,30,365,29,360,28,362,27,360,26,362,25,359,24,366,25,364,26,364,27,364,27,364,27,364,28,367,28,365,27,366,27,366,26,366,26,362,24,362,24,362,23,362,23,362,23,371,22,371,22,369,22,371,22,369,21,371,21,372,21,371,21,374,20,381,20,379,19,380,19,388,19,387,19,390,19,391,18,395,17,398,18,395,18,399,18,398,19,404,18,406,19,405,19,408,20,408,20,406,20,408,20,407,21,400,23,397,23,399,23,396,24,404,23,404,23,403,23,404,24,404,24,406,25,406,26,407,26,403,27,402,28,397,29,398,29,398,31,397,32,397,32,398,34,399,34,397,35,400,36,398,36,398,37,397,37,398,38,398,39,396,40,395,41,397,41,397,42,396,42,396,43,396,43,393,43,390,45,390,45,389,44,386,45,385,46,386,47,384,48,384,49,383,50,384,51",
        abbr: "KRAT"
    },
    {
        timezone: "Asia/Kuala_Lumpur",
        country: "MY",
        pin: "391,121",
        offset: 8,
        points: "394,121,395,123,394,123,391,121,390,119,389,116,390,116,390,117,392,116,393,117,394,121",
        abbr: "MYT"
    },
    {
        timezone: "Asia/Kuching",
        country: "MY",
        pin: "403,123",
        offset: 8,
        points: "410,118,412,115,412,116,413,115,413,116,414,117,416,118,414,118,415,119,411,119,409,123,406,123,405,124,404,124,402,123,402,122,405,123,404,123,405,121,407,121,408,119,409,119,410,118,410,119,410,118",
        abbr: "MYT"
    },
    {
        timezone: "Asia/Kuwait",
        country: "KW",
        pin: "317,84",
        offset: 3,
        points: "317,83,317,83,317,83",
        abbr: "AST"
    },
    {
        timezone: "Asia/Macau",
        country: "MO",
        pin: "408,94",
        offset: 8,
        points: "408,94,408,94,408,94",
        abbr: "CST"
    },
    {
        timezone: "Asia/Magadan",
        country: "RU",
        pin: "459,42",
        offset: 12,
        points: "464,42,464,42,466,43,460,43,460,43,462,43,458,42,457,43,455,43,454,43,454,42,452,41,454,40,453,39,450,39,445,38,444,37,445,36,444,35,445,34,444,33,445,32,443,32,446,31,446,30,447,30,447,29,448,29,447,28,448,28,446,28,450,25,457,25,458,25,457,25,461,27,470,26,472,27,472,28,474,28,474,29,476,28,476,29,476,30,470,30,469,31,471,32,470,33,471,33,471,34,477,35,477,36,476,36,476,37,475,37,476,38,475,39,476,39,472,41,473,40,472,40,473,39,469,39,464,42",
        abbr: "MAGT"
    },
    {
        timezone: "Asia/Makassar",
        country: "ID",
        pin: "416,132",
        offset: 8,
        points: "412,128,411,130,409,131,409,129,411,127,410,125,410,125,410,124,408,124,410,122,411,119,413,119,414,120,413,120,413,120,413,120,414,122,414,122,415,124,414,123,413,126,411,127,412,128",
        abbr: "WITA"
    },
    {
        timezone: "Asia/Makassar",
        country: "ID",
        pin: "416,132",
        offset: 8,
        points: "420,129,420,130,421,131,419,132,418,130,418,129,417,129,417,133,416,133,416,131,416,130,415,130,415,129,416,127,416,126,417,124,418,123,422,124,424,123,423,124,417,124,417,125,417,126,418,127,419,126,421,126,421,126,418,128,420,129",
        abbr: "WITA"
    },
    {
        timezone: "Asia/Manila",
        country: "PH",
        pin: "418,105",
        offset: 8,
        points: "423,117,422,116,423,115,422,114,421,115,420,114,420,115,419,115,420,114,421,113,422,113,422,114,423,113,423,112,424,112,424,111,425,112,426,115,425,116,425,115,424,117,424,117,423,117",
        abbr: "PHT"
    },
    {
        timezone: "Asia/Manila",
        country: "PH",
        pin: "418,105",
        offset: 8,
        points: "421,105,421,106,421,105,422,106,422,106,422,107,422,108,420,106,420,107,419,106,418,106,418,105,417,104,417,105,417,104,416,102,417,103,418,99,420,99,420,102,419,104,419,106,421,105",
        abbr: "PHT"
    },
    {
        timezone: "Asia/Muscat",
        country: "OM",
        pin: "331,92",
        offset: 4,
        points: "328,100,327,100,326,101,324,102,322,99,326,97,327,94,327,93,327,92,328,92,328,90,329,92,332,92,333,94,331,97,330,97,330,99,329,99,328,100",
        abbr: "GST"
    },
    {
        timezone: "Asia/Nicosia",
        country: "CY",
        pin: "296,76",
        offset: 2,
        points: "296,77,295,76,298,75,297,76,297,76,296,77",
        abbr: "EET"
    },
    {
        timezone: "Asia/Novokuznetsk",
        country: "RU",
        pin: "371,50",
        offset: 7,
        points: "373,46,374,47,373,48,373,49,373,49,374,50,374,50,373,51,374,52,373,53,371,52,370,51,371,51,368,49,367,47,373,46",
        abbr: "KRAT"
    },
    {
        timezone: "Asia/Novosibirsk",
        country: "RU",
        pin: "365,49",
        offset: 7,
        points: "367,47,368,49,367,50,366,50,365,51,362,49,358,51,356,50,357,49,355,50,355,49,354,48,356,47,355,47,356,46,354,44,356,42,357,40,364,41,366,40,368,41,368,42,371,42,373,43,372,44,374,45,373,46,367,47",
        abbr: "NOVT"
    },
    {
        timezone: "Asia/Omsk",
        country: "RU",
        pin: "352,49",
        offset: 7,
        points: "354,44,356,46,355,47,356,47,354,48,355,49,355,50,352,51,352,50,349,50,349,48,348,48,348,47,350,46,348,45,348,44,349,44,351,44,354,44",
        abbr: "OMST"
    },
    {
        timezone: "Asia/Omsk",
        country: "RU",
        pin: "352,49",
        offset: 7,
        points: "373,53,372,53,374,54,375,55,374,55,375,56,371,57,371,56,368,56,366,54,363,55,362,54,361,55,358,51,362,49,365,51,366,50,368,49,371,51,370,51,371,52,373,53",
        abbr: "OMST"
    },
    {
        timezone: "Asia/Phnom_Penh",
        country: "KH",
        pin: "396,109",
        offset: 7,
        points: "397,109,397,110,394,110,394,109,393,110,392,106,394,105,397,106,397,105,399,105,399,108,397,109",
        abbr: "ICT"
    },
    {
        timezone: "Asia/Pontianak",
        country: "ID",
        pin: "402,125",
        offset: 7,
        points: "411,127,409,130,407,129,405,130,405,129,403,129,403,127,402,126,401,123,402,122,404,124,405,124,406,123,408,123,408,124,410,124,410,125,410,125,411,127",
        abbr: "WIB"
    },
    {
        timezone: "Asia/Pyongyang",
        country: "KP",
        pin: "425,71",
        offset: 9,
        points: "426,72,424,73,423,72,424,71,424,71,424,70,423,70,423,69,425,68,426,67,428,68,428,67,429,67,431,65,431,66,430,67,430,68,427,70,428,72,426,72",
        abbr: "KST"
    },
    {
        timezone: "Asia/Qatar",
        country: "QA",
        pin: "322,90",
        offset: 3,
        points: "322,90,321,91,321,90,321,89,322,90",
        abbr: "AST"
    },
    {
        timezone: "Asia/Qyzylorda",
        country: "KZ",
        pin: "341,63",
        offset: 6,
        points: "344,52,344,54,345,55,342,57,340,57,339,58,337,57,337,56,336,54,333,53,335,52,334,52,335,51,336,51,335,51,336,51,335,51,335,50,342,49,342,51,342,52,344,52",
        abbr: "QYZT"
    },
    {
        timezone: "Asia/Qyzylorda",
        country: "KZ",
        pin: "341,63",
        offset: 6,
        points: "342,65,340,64,336,65,334,63,334,61,335,60,334,60,333,61,334,61,333,61,333,61,331,61,335,59,341,61,343,61,344,63,345,64,344,65,342,66,342,65",
        abbr: "QYZT"
    },
    {
        timezone: "Asia/Rangoon",
        country: "MM",
        pin: "384,102",
        offset: 6.5,
        points: "386,104,388,106,388,109,387,111,387,107,386,106,386,102,385,102,384,101,384,102,383,102,383,103,382,102,382,103,382,102,381,103,382,102,381,103,381,101,381,98,380,99,380,98,381,98,380,98,381,98,380,97,379,96,379,97,378,96,379,94,380,92,381,92,382,88,384,87,385,87,385,87,386,85,387,87,387,88,387,89,385,91,385,92,387,91,387,93,388,93,388,94,389,94,389,95,391,95,389,97,386,97,386,99,385,99,387,102,386,104",
        abbr: "MMT"
    },
    {
        timezone: "Asia/Riyadh",
        country: "SA",
        pin: "315,91",
        offset: 3,
        points: "310,101,309,102,307,98,304,96,303,92,302,91,299,86,298,86,299,84,300,84,303,83,301,81,304,80,306,81,312,84,317,85,318,87,320,88,319,89,321,91,322,91,321,91,323,93,327,93,327,94,326,97,318,100,314,103,314,102,312,101,310,101,310,101",
        abbr: "AST"
    },
    {
        timezone: "Asia/Sakhalin",
        country: "RU",
        pin: "448,60",
        offset: 11,
        points: "450,56,451,57,450,57,449,57,448,59,449,61,449,61,448,60,447,61,447,57,448,54,447,52,447,51,448,50,448,50,449,50,449,52,449,53,450,56",
        abbr: "SAKT"
    },
    {
        timezone: "Asia/Samarkand",
        country: "UZ",
        pin: "343,70",
        offset: 5,
        points: "345,71,345,72,344,73,342,73,343,72,337,70,336,68,334,68,333,66,331,66,331,66,331,66,331,66,329,67,329,68,328,68,328,63,331,62,331,63,333,64,334,63,336,65,340,64,342,65,342,67,342,67,343,68,343,69,344,70,344,71,345,71",
        abbr: "UZT"
    },
    {
        timezone: "Asia/Seoul",
        country: "KR",
        pin: "426,73",
        offset: 9,
        points: "429,76,427,76,427,77,427,77,426,77,425,77,426,75,425,74,426,74,426,73,426,72,428,71,429,73,430,75,429,76",
        abbr: "KST"
    },
    {
        timezone: "Asia/Shanghai",
        country: "CN",
        pin: "419,82",
        offset: 8,
        points: "401,84,401,83,403,82,402,80,403,80,402,79,404,79,403,77,404,73,403,72,404,70,406,69,408,69,408,67,409,66,407,67,406,66,404,65,406,64,405,63,405,63,406,62,408,63,414,60,416,61,416,59,415,58,411,59,410,58,412,56,414,56,416,55,415,55,418,53,417,52,418,51,423,51,420,53,421,54,424,53,425,54,423,58,423,58,420,59,422,60,421,60,420,61,419,61,420,62,420,64,421,63,421,65,423,66,423,65,425,68,418,71,419,70,418,70,419,70,420,69,418,68,415,71,414,71,413,71,414,72,415,72,415,73,416,73,418,72,420,73,420,74,417,75,416,76,417,77,418,80,419,81,417,81,419,82,417,83,420,83,419,84,419,84,419,85,419,86,418,86,417,88,416,88,417,88,416,90,416,89,415,91,414,91,413,92,412,92,412,93,409,93,409,94,408,94,408,93,408,94,407,94,406,93,406,92,405,93,406,91,405,90,404,90,405,89,402,89,402,88,402,87,401,87,402,87,402,85,401,84",
        abbr: "CST"
    },
    {
        timezone: "Asia/Singapore",
        country: "SG",
        pin: "394,123",
        offset: 8,
        points: "394,123,394,123,394,123",
        abbr: "SGT"
    },
    {
        timezone: "Asia/Taipei",
        country: "TW",
        pin: "419,90",
        offset: 8,
        points: "417,94,417,92,418,91,419,90,419,90,418,95,417,94",
        abbr: "CST"
    },
    {
        timezone: "Asia/Tashkent",
        country: "UZ",
        pin: "346,68",
        offset: 5,
        points: "345,69,346,69,345,70,344,70,343,68,345,68,349,66,347,67,349,68,350,67,352,68,350,69,348,69,348,68,345,69",
        abbr: "UZT"
    },
    {
        timezone: "Asia/Tbilisi",
        country: "GE",
        pin: "312,67",
        offset: 4,
        points: "309,67,308,67,308,66,306,64,310,65,311,66,313,66,315,68,310,68,309,67",
        abbr: "GET"
    },
    {
        timezone: "Asia/Tehran",
        country: "IR",
        pin: "321,75",
        offset: 3.5,
        points: "335,81,336,82,335,84,336,85,337,86,337,87,338,87,338,88,336,89,335,90,330,89,329,87,326,88,325,88,321,86,320,83,319,83,318,83,318,83,317,83,316,82,316,81,316,80,314,79,313,77,314,75,313,75,311,72,312,72,311,70,312,70,314,71,317,70,317,70,317,71,318,72,318,73,322,74,325,74,325,73,328,72,332,73,334,74,335,74,335,77,334,78,335,78,334,79,335,81",
        abbr: "IRST"
    },
    {
        timezone: "Asia/Thimphu",
        country: "BT",
        pin: "375,87",
        offset: 6,
        points: "378,87,378,88,375,88,373,87,375,86,377,86,378,87",
        abbr: "BTT"
    },
    {
        timezone: "Asia/Tokyo",
        country: "JP",
        pin: "444,75",
        offset: 9,
        points: "448,63,451,64,452,63,452,65,453,65,450,65,449,67,447,66,445,66,445,66,446,67,445,67,444,66,445,65,445,65,446,65,447,62,448,63",
        abbr: "JST"
    },
    {
        timezone: "Asia/Tokyo",
        country: "JP",
        pin: "444,75",
        offset: 9,
        points: "432,78,433,78,433,79,433,79,432,81,431,82,432,81,431,82,431,81,431,79,431,79,431,80,430,80,430,79,431,79,430,79,432,78",
        abbr: "JST"
    },
    {
        timezone: "Asia/Tokyo",
        country: "JP",
        pin: "444,75",
        offset: 9,
        points: "437,76,439,75,440,73,441,73,440,73,441,74,442,73,444,71,444,69,445,68,446,68,446,67,446,67,447,70,447,72,446,72,445,75,446,75,445,76,444,76,445,76,444,75,443,77,443,76,442,77,440,77,441,77,440,76,440,77,439,79,438,78,438,77,434,77,434,78,432,78,432,77,434,76,437,76",
        abbr: "JST"
    },
    {
        timezone: "Asia/Ulaanbaatar",
        country: "MN",
        pin: "398,58",
        offset: 8,
        points: "396,67,390,66,386,66,386,64,387,62,385,60,387,59,386,58,388,58,388,57,385,56,386,55,386,54,387,53,392,54,392,55,394,55,398,55,401,56,403,57,406,56,407,59,405,59,405,60,406,62,405,63,406,64,403,66,399,66,396,67",
        abbr: "ULAT"
    },
    {
        timezone: "Asia/Urumqi",
        country: "CN",
        pin: "372,64",
        offset: 6,
        points: "386,86,384,86,384,85,383,84,381,84,378,86,375,86,374,87,373,86,369,86,364,83,364,83,365,82,365,83,366,82,365,81,365,81,366,80,364,77,365,76,364,76,365,75,364,74,365,70,364,70,364,68,365,67,365,65,366,65,365,64,368,65,363,63,365,63,364,62,365,59,369,60,369,58,372,57,372,58,375,59,376,60,376,62,383,63,384,66,385,66,386,68,385,68,384,70,386,70,385,71,389,72,388,72,388,73,387,75,388,77,387,77,388,77,387,78,385,78,386,79,385,80,386,80,387,82,388,84,387,85,387,86,386,86",
        abbr: "XJT"
    },
    {
        timezone: "Asia/Vientiane",
        country: "LA",
        pin: "393,100",
        offset: 7,
        points: "398,105,397,106,396,105,397,103,394,100,393,99,393,100,392,100,390,101,391,98,390,98,390,97,389,97,390,95,391,96,391,94,393,95,393,96,395,96,395,97,396,97,394,98,396,99,398,102,399,103,399,105,398,105",
        abbr: "ICT"
    },
    {
        timezone: "Asia/Vladivostok",
        country: "RU",
        pin: "433,65",
        offset: 11,
        points: "433,63,433,62,435,62,437,59,437,58,432,59,431,57,432,57,433,56,432,54,433,53,435,52,435,52,437,52,437,51,437,51,433,51,433,51,433,50,431,50,435,48,432,48,432,47,433,46,432,46,433,45,433,44,433,44,434,44,433,43,433,42,435,40,435,40,436,39,437,40,439,39,433,37,434,36,434,35,433,34,431,33,435,31,435,30,434,29,435,28,435,28,435,27,433,27,433,26,435,25,435,25,434,25,436,26,444,26,444,25,445,25,443,25,446,24,446,24,455,25,449,25,446,28,448,28,447,28,448,29,447,29,447,30,446,30,446,31,443,32,445,32,444,33,445,34,444,35,445,35,445,36,445,37,444,37,444,38,448,39,453,39,454,40,452,41,454,42,454,42,448,43,438,49,440,49,440,50,441,50,441,51,442,50,442,51,443,50,444,50,446,51,445,51,447,53,445,55,445,57,441,61,436,65,435,66,433,65,431,66,431,66,432,65,432,63,433,63",
        abbr: "VLAT"
    },
    {
        timezone: "Asia/Vladivostok",
        country: "RU",
        pin: "433,65",
        offset: 11,
        points: "443,19,445,20,447,19,446,19,452,20,449,21,444,21,443,21,440,20,441,20,443,19",
        abbr: "VLAT"
    },
    {
        timezone: "Asia/Yakutsk",
        country: "RU",
        pin: "430,39",
        offset: 10,
        points: "432,48,435,48,431,50,433,50,433,51,437,51,437,51,437,52,435,52,435,52,433,53,431,55,433,55,433,56,432,57,428,56,425,52,422,51,418,51,417,52,418,52,418,53,416,55,416,55,414,56,409,55,404,57,400,56,400,55,401,55,400,55,401,53,404,53,406,52,408,52,409,51,408,51,412,49,412,49,411,48,410,46,413,46,414,45,413,45,413,44,415,44,415,42,413,42,413,42,411,41,406,43,406,42,403,43,402,43,404,40,402,40,402,39,403,38,402,38,402,38,402,37,400,37,401,36,401,36,397,35,399,34,398,34,397,32,397,32,398,31,398,29,397,29,402,28,403,27,406,26,406,26,406,25,404,24,404,24,404,24,403,23,405,22,407,22,408,23,411,23,421,24,422,23,421,23,423,22,430,24,429,24,430,24,429,24,430,25,428,25,430,25,429,26,432,27,434,26,433,27,435,27,435,28,435,28,434,29,435,30,435,31,431,33,433,34,434,35,434,36,433,37,439,39,437,40,436,39,435,40,435,40,433,42,433,43,434,44,433,44,433,44,433,45,432,46,433,46,432,47,432,48",
        abbr: "YAKT"
    },
    {
        timezone: "Asia/Yerevan",
        country: "AM",
        pin: "312,69",
        offset: 4,
        points: "313,68,314,69,313,69,315,70,315,71,314,71,314,70,311,69,310,68,313,68",
        abbr: "AMT"
    },
    {
        timezone: "Atlantic/Azores",
        country: "PT",
        pin: "214,73",
        offset: -1,
        points: "202,79,220,65",
        abbr: "AZOT"
    },
    {
        timezone: "Atlantic/Bermuda",
        country: "BM",
        pin: "160,80",
        offset: -4,
        points: "155,85,165,75",
        abbr: "AST"
    },
    {
        timezone: "Atlantic/Canary",
        country: "ES",
        pin: "229,86",
        offset: 0,
        points: "220,92,236,79",
        abbr: "WET"
    },
    {
        timezone: "Atlantic/Cape_Verde",
        country: "CV",
        pin: "217,104",
        offset: -1,
        points: "210,109,224,96",
        abbr: "CVT"
    },
    {
        timezone: "Atlantic/Faroe",
        country: "FO",
        pin: "241,39",
        offset: 0,
        points: "234,45,246,33",
        abbr: "WET"
    },
    {
        timezone: "Atlantic/Madeira",
        country: "PT",
        pin: "227,80",
        offset: 0,
        points: "221,88,233,74",
        abbr: "WET"
    },
    {
        timezone: "Atlantic/Reykjavik",
        country: "IS",
        pin: "220,36",
        offset: 0,
        points: "218,42,231,28",
        abbr: "GMT"
    },
    {
        timezone: "Atlantic/South_Georgia",
        country: "GS",
        pin: "199,200",
        offset: -2,
        points: "192,213,214,195",
        abbr: "GST"
    },
    {
        timezone: "Atlantic/St_Helena",
        country: "SH",
        pin: "242,147",
        offset: 0,
        points: "230,181,242,136",
        abbr: "GMT"
    },
    {
        timezone: "Atlantic/Stanley",
        country: "FK",
        pin: "170,197",
        offset: -3,
        points: "160,203,175,191",
        abbr: "FKST"
    },
    {
        timezone: "Australia/Adelaide",
        country: "AU",
        pin: "442,173",
        offset: 10.5,
        points: "438,161,446,161,446,178,444,177,444,175,443,174,444,175,444,175,442,174,442,173,442,172,441,174,440,174,441,173,442,172,441,170,441,171,439,173,439,174,438,173,438,173,438,172,436,170,432,169,429,169,429,161,438,161",
        abbr: "ACDT"
    },
    {
        timezone: "Australia/Brisbane",
        country: "AU",
        pin: "463,163",
        offset: 10,
        points: "458,156,459,156,460,158,459,157,461,158,463,161,463,163,463,164,462,164,460,166,459,165,457,165,446,165,446,161,442,161,442,148,444,150,446,149,447,146,446,144,447,142,447,142,448,140,449,142,450,145,451,145,452,146,453,151,457,153,458,156,458,156,458,156",
        abbr: "AEST"
    },
    {
        timezone: "Australia/Broken_Hill",
        country: "AU",
        pin: "446,169",
        offset: 10.5,
        points: "446,170,446,169,447,169,447,170,446,170",
        abbr: "ACDT"
    },
    {
        timezone: "Australia/Currie",
        country: "AU",
        pin: "450,180",
        offset: 11,
        points: "450,180,450,180,450,180",
        abbr: "AEDT"
    },
    {
        timezone: "Australia/Darwin",
        country: "AU",
        pin: "432,142",
        offset: 9.5,
        points: "429,146,430,146,430,145,430,145,431,143,432,143,431,142,432,143,432,142,434,142,434,141,433,140,436,142,438,142,439,142,438,142,439,142,439,142,440,141,440,142,440,143,439,143,438,145,437,146,442,148,442,161,429,161,429,146",
        abbr: "ACST"
    },
    {
        timezone: "Australia/Eucla",
        country: "AU",
        pin: "429,169",
        offset: 8.8,
        points: "429,168,428,169,424,170,424,168,429,168",
        abbr: "ACWST"
    },
    {
        timezone: "Australia/Hobart",
        country: "AU",
        pin: "455,185",
        offset: 11,
        points: "456,182,456,185,454,184,454,186,452,185,452,184,452,184,451,182,452,182,454,183,454,182,456,182",
        abbr: "AEDT"
    },
    {
        timezone: "Australia/Lindeman",
        country: "AU",
        pin: "457,153",
        offset: 10,
        points: "457,153,457,153,457,153",
        abbr: "AEST"
    },
    {
        timezone: "Australia/Lord_Howe",
        country: "AU",
        pin: "471,169",
        offset: 11,
        points: "471,169,471,169,471,169",
        abbr: "LHDT"
    },
    {
        timezone: "Australia/Melbourne",
        country: "AU",
        pin: "451,178",
        offset: 11,
        points: "448,173,449,173,451,175,455,175,456,176,458,177,455,178,453,179,453,179,452,178,451,178,452,178,451,178,449,179,446,178,446,178,446,172,447,172,448,173",
        abbr: "AEDT"
    },
    {
        timezone: "Australia/Perth",
        country: "AU",
        pin: "411,169",
        offset: 8,
        points: "424,146,424,145,424,145,425,145,425,144,426,145,426,144,428,145,428,147,428,146,428,147,428,146,429,146,429,168,424,168,424,170,423,171,422,172,417,172,414,174,411,173,410,173,410,172,411,171,411,169,410,165,407,161,408,162,408,160,408,161,409,162,407,159,408,156,409,155,409,156,409,155,412,154,413,154,418,152,420,150,420,149,421,148,422,149,422,148,422,147,423,148,423,148,423,147,423,147,423,147,423,146,424,147,423,146,424,146",
        abbr: "AWST"
    },
    {
        timezone: "Australia/Sydney",
        country: "AU",
        pin: "460,172",
        offset: 11,
        points: "459,174,458,175,458,177,456,176,455,175,451,175,449,173,446,172,446,170,447,170,447,169,446,169,446,165,457,165,459,165,460,166,462,164,463,164,462,169,460,172,460,171,460,172,459,174",
        abbr: "AEDT"
    },
    {
        timezone: "Europe/Amsterdam",
        country: "NL",
        pin: "257,52",
        offset: 1,
        points: "258,53,258,55,257,53,255,53,256,53,256,53,256,52,258,52,257,52,258,51,260,51,259,52,260,52,259,53,258,53",
        abbr: "CET"
    },
    {
        timezone: "Europe/Andorra",
        country: "AD",
        pin: "252,66",
        offset: 1,
        points: "252,66,252,66,252,66",
        abbr: "CET"
    },
    {
        timezone: "Europe/Athens",
        country: "GR",
        pin: "283,72",
        offset: 2,
        points: "282,72,283,73,282,73,282,74,281,74,281,74,281,74,280,74,279,72,280,72,282,72,279,72,279,71,279,71,278,70,279,68,287,67,286,68,283,68,284,69,283,69,283,70,281,69,282,71,282,70,282,71,281,71,283,72,283,73,282,72",
        abbr: "EET"
    },
    {
        timezone: "Europe/Belgrade",
        country: "RS",
        pin: "278,63",
        offset: 1,
        points: "280,63,282,63,281,64,282,65,281,66,279,67,278,66,278,65,277,65,277,64,277,63,276,62,277,62,276,61,278,61,280,63",
        abbr: "CET"
    },
    {
        timezone: "Europe/Bucharest",
        country: "RO",
        pin: "286,63",
        offset: 2,
        points: "289,62,291,62,290,64,288,64,284,64,282,64,281,63,282,63,280,63,280,62,278,61,279,61,281,59,282,58,285,59,287,58,289,60,289,62",
        abbr: "EET"
    },
    {
        timezone: "Europe/Berlin",
        country: "DE",
        pin: "269,52",
        offset: 1,
        points: "260,57,259,56,258,53,260,52,259,52,260,50,262,51,262,50,264,51,262,50,262,50,263,49,262,49,262,49,264,49,264,50,265,49,265,50,267,49,270,50,270,52,270,52,271,54,267,55,269,57,268,58,268,59,261,59,261,57,260,57",
        abbr: "CET"
    },
    {
        timezone: "Europe/Budapest",
        country: "HU",
        pin: "277,59",
        offset: 1,
        points: "279,61,275,61,272,60,273,60,273,59,274,58,276,59,279,58,282,58,279,61",
        abbr: "CET"
    },
    {
        timezone: "Europe/Chisinau",
        country: "MD",
        pin: "290,60",
        offset: 2,
        points: "292,60,290,60,290,61,289,62,289,60,287,58,288,58,291,58,292,60",
        abbr: "EET"
    },
    {
        timezone: "Europe/Bratislava",
        country: "SK",
        pin: "274,58",
        offset: 1,
        points: "274,58,274,57,276,56,281,57,281,58,278,58,276,59,274,58",
        abbr: "CET"
    },
    {
        timezone: "Europe/Brussels",
        country: "BE",
        pin: "256,54",
        offset: 1,
        points: "254,54,254,54,257,53,259,55,258,56,257,55,256,56,254,54",
        abbr: "CET"
    },
    {
        timezone: "Europe/Copenhagen",
        country: "DK",
        pin: "267,48",
        offset: 1,
        points: "263,48,264,49,262,49,262,48,261,48,261,46,265,45,264,46,265,47,263,48",
        abbr: "CET"
    },
    {
        timezone: "Europe/Dublin",
        country: "IE",
        pin: "241,51",
        offset: 0,
        points: "241,50,242,50,241,53,237,54,236,53,237,53,236,53,237,52,238,52,236,52,238,51,236,51,237,50,236,50,238,50,239,49,238,49,240,48,240,48,239,49,241,50",
        abbr: "GMT"
    },
    {
        timezone: "Europe/Gibraltar",
        country: "GI",
        pin: "243,75",
        offset: 1,
        points: "243,75,243,75,243,75",
        abbr: "CET"
    },
    {
        timezone: "Europe/Guernsey",
        country: "GG",
        pin: "246,56",
        offset: 0,
        points: "247,56,247,56,247,56",
        abbr: "GMT"
    },
    {
        timezone: "Europe/Helsinki",
        country: "FI",
        pin: "285,41",
        offset: 2,
        points: "287,41,282,42,282,41,280,41,280,40,279,38,280,37,281,37,282,36,285,35,285,34,283,33,283,32,283,31,283,31,279,29,280,29,281,30,285,30,287,28,289,28,291,28,290,30,292,31,290,32,292,34,291,35,292,36,292,36,294,38,289,41,287,41",
        abbr: "EET"
    },
    {
        timezone: "Europe/Isle_of_Man",
        country: "IM",
        pin: "244,50",
        offset: 0,
        points: "244,50,243,50,244,50",
        abbr: "GMT"
    },
    {
        timezone: "Europe/Istanbul",
        country: "TR",
        pin: "290,68",
        offset: 2,
        points: "301,74,300,75,300,75,300,74,296,75,293,74,291,75,290,74,288,74,289,74,288,74,288,73,288,73,288,72,286,72,287,71,288,72,287,71,287,70,286,70,286,69,287,69,292,68,291,68,293,68,295,67,299,67,301,68,303,68,309,67,311,68,311,69,312,70,311,70,312,72,311,72,312,73,312,74,309,73,304,74,301,74",
        abbr: "EET"
    },
    {
        timezone: "Europe/Jersey",
        country: "JE",
        pin: "247,57",
        offset: 0,
        points: "247,57,247,57,247,57",
        abbr: "GMT"
    },
    {
        timezone: "Europe/Kaliningrad",
        country: "RU",
        pin: "278,49",
        offset: 3,
        points: "279,48,279,49,281,49,282,49,277,49,278,49,278,49,278,49,279,48",
        abbr: "EET"
    },
    {
        timezone: "Europe/Kiev",
        country: "UA",
        pin: "292,55",
        offset: 2,
        points: "304,59,303,60,301,60,302,59,301,59,298,58,298,59,298,59,299,61,298,61,295,61,294,60,295,60,294,60,291,61,291,62,290,62,289,62,290,60,292,61,291,58,288,58,285,59,282,57,281,56,283,55,283,53,284,53,292,54,293,53,297,52,298,53,297,53,298,54,299,54,299,55,302,55,303,56,306,56,305,57,306,57,305,57,305,59,304,59",
        abbr: "EET"
    },
    {
        timezone: "Europe/Lisbon",
        country: "PT",
        pin: "237,71",
        offset: 0,
        points: "240,73,239,74,238,74,238,72,237,71,238,71,237,71,238,68,238,67,239,66,239,67,241,67,241,67,240,68,240,70,240,70,240,72,240,73",
        abbr: "WET"
    },
    {
        timezone: "Europe/Ljubljana",
        country: "SI",
        pin: "270,61",
        offset: 1,
        points: "272,60,273,60,272,61,271,62,269,62,269,62,269,61,269,60,272,60",
        abbr: "CET"
    },
    {
        timezone: "Europe/London",
        country: "GB",
        pin: "250,53",
        offset: 0,
        points: "246,53,245,54,243,53,245,52,244,51,243,52,244,51,246,51,246,51,246,50,245,49,246,49,243,49,244,48,243,47,242,47,242,48,242,47,243,46,241,46,243,46,242,45,243,45,242,44,243,44,243,44,246,44,244,45,245,45,244,45,247,45,246,46,245,47,246,47,245,47,247,47,248,49,250,50,250,51,249,50,250,51,250,52,252,52,252,53,250,54,252,54,251,54,245,55,245,55,242,55,244,54,246,54,247,53,246,53",
        abbr: "GMT"
    },
    {
        timezone: "Europe/Luxembourg",
        country: "LU",
        pin: "259,56",
        offset: 1,
        points: "259,56,258,56,258,55,259,56,259,56",
        abbr: "CET"
    },
    {
        timezone: "Europe/Madrid",
        country: "ES",
        pin: "245,69",
        offset: 1,
        points: "249,72,247,74,244,74,242,75,241,74,242,74,241,74,240,73,240,72,240,70,240,70,240,68,241,67,241,67,239,67,239,66,238,67,238,66,237,65,239,64,248,65,249,66,255,66,254,67,251,68,251,68,250,70,250,71,249,72",
        abbr: "CET"
    },
    {
        timezone: "Europe/Malta",
        country: "MT",
        pin: "270,75",
        offset: 1,
        points: "270,75,270,75,270,75",
        abbr: "CET"
    },
    {
        timezone: "Europe/Mariehamn",
        country: "AX",
        pin: "278,42",
        offset: 2,
        points: "279,41,279,41,279,41",
        abbr: "EET"
    },
    {
        timezone: "Europe/Minsk",
        country: "BY",
        pin: "288,50",
        offset: 3,
        points: "292,53,285,53,283,53,283,53,282,52,283,52,283,50,286,50,286,49,287,48,287,48,287,48,289,47,292,47,293,48,293,49,296,51,294,51,294,53,293,53,292,54,292,53",
        abbr: "MSK"
    },
    {
        timezone: "Europe/Monaco",
        country: "MC",
        pin: "260,64",
        offset: 1,
        points: "260,64,260,64,260,64",
        abbr: "CET"
    },
    {
        timezone: "Europe/Moscow",
        country: "RU",
        pin: "302,48",
        offset: 4,
        points: "326,23,329,23,327,24,327,24,327,24,327,25,327,25,330,27,324,27,325,26,321,25,324,24,323,24,325,24,323,24,326,23",
        abbr: "MSK"
    },
    {
        timezone: "Europe/Moscow",
        country: "RU",
        pin: "302,48",
        offset: 4,
        points: "333,20,344,18,346,18,345,19,335,20,333,21,333,21,332,21,332,22,331,21,332,22,329,22,330,23,329,22,330,23,328,23,329,23,329,23,325,23,328,23,324,23,328,22,327,22,329,21,328,21,329,21,328,21,333,20",
        abbr: "MSK"
    },
    {
        timezone: "Europe/Moscow",
        country: "RU",
        pin: "302,48",
        offset: 4,
        points: "315,63,315,63,316,64,316,65,317,67,316,68,313,66,311,66,310,65,306,65,301,62,303,61,302,60,305,60,303,60,303,59,305,59,306,58,305,57,306,57,305,57,306,56,303,56,302,55,299,55,299,54,298,54,297,53,298,53,297,52,294,53,293,51,296,51,293,49,293,48,289,47,289,45,288,45,289,45,288,44,289,43,289,42,292,42,290,41,290,41,289,41,294,38,292,36,292,36,291,35,292,34,290,32,292,31,290,30,290,29,289,29,294,28,296,28,295,28,295,28,295,29,297,29,296,29,300,29,307,31,307,32,304,33,294,32,297,33,296,33,298,33,298,34,299,35,298,35,302,36,303,36,301,35,306,35,305,34,309,33,311,33,312,32,311,32,312,31,310,30,314,30,315,31,312,32,315,32,316,32,316,31,318,31,317,31,323,30,325,29,326,29,324,29,325,30,324,30,332,29,333,30,332,30,333,30,335,29,334,28,335,28,340,29,340,29,341,30,341,31,342,31,341,31,342,31,333,35,332,39,329,40,326,40,322,40,323,41,319,42,319,43,317,42,318,41,317,40,316,40,314,41,315,42,315,43,316,43,314,44,316,45,315,45,315,46,318,45,322,47,321,47,323,47,324,46,324,47,324,47,324,47,325,48,324,48,325,49,324,50,321,49,320,49,319,50,317,51,317,52,310,52,309,53,310,54,307,54,309,56,308,57,309,57,308,58,310,59,312,59,312,58,315,59,315,59,316,60,315,61,316,61,315,62,316,62,315,63",
        abbr: "MSK"
    },
    {
        timezone: "Europe/Oslo",
        country: "NO",
        pin: "265,42",
        offset: 1,
        points: "261,44,259,44,260,44,258,44,258,43,259,43,258,43,259,42,257,42,260,41,258,42,258,41,257,41,258,41,257,41,257,41,258,40,257,40,260,40,261,40,257,40,257,40,258,40,257,40,258,40,257,39,259,39,257,39,259,39,258,39,259,38,260,39,259,38,261,38,260,38,260,37,262,38,261,37,262,38,261,37,266,36,265,36,266,36,264,37,263,37,267,35,266,35,268,34,267,34,268,34,267,34,268,33,268,34,268,33,270,33,268,33,269,33,268,33,269,32,268,32,269,32,269,32,271,32,270,32,272,31,271,31,272,31,271,30,272,30,273,31,272,31,273,30,272,30,275,30,273,30,275,30,274,30,275,30,274,29,275,29,277,29,277,28,277,28,277,29,278,28,278,29,279,29,278,28,279,28,281,28,280,28,281,28,279,27,280,27,283,28,282,27,284,27,284,27,284,26,286,27,285,27,285,28,287,26,287,27,288,27,288,26,290,26,289,27,289,27,289,27,290,27,293,27,290,28,291,28,291,28,293,28,290,29,290,28,288,28,286,28,286,29,285,30,281,30,280,29,278,29,278,29,278,30,276,30,275,31,273,31,272,33,270,33,270,34,269,35,270,35,269,36,267,37,267,39,268,40,267,40,268,41,266,42,266,43,265,43,265,42,264,43,263,43,261,44",
        abbr: "CET"
    },
    {
        timezone: "Europe/Paris",
        country: "FR",
        pin: "253,57",
        offset: 1,
        points: "256,65,254,65,254,66,254,66,248,65,248,65,249,63,248,62,249,62,248,62,248,61,247,60,247,59,246,59,244,59,243,58,244,58,243,58,246,57,246,58,248,57,247,56,248,57,251,56,250,56,252,55,252,54,254,54,256,56,257,55,258,56,261,57,261,59,260,59,258,61,259,61,260,62,259,62,260,64,261,64,260,64,259,65,256,65",
        abbr: "CET"
    },
    {
        timezone: "Europe/Podgorica",
        country: "ME",
        pin: "277,66",
        offset: 1,
        points: "276,65,278,65,277,66,277,67,276,66,276,65",
        abbr: "CET"
    },
    {
        timezone: "Europe/Prague",
        country: "CZ",
        pin: "270,55",
        offset: 1,
        points: "271,57,270,57,268,56,267,55,271,54,273,55,273,55,275,55,276,56,274,57,271,57",
        abbr: "CET"
    },
    {
        timezone: "Europe/Riga",
        country: "LV",
        pin: "283,46",
        offset: 2,
        points: "281,45,283,46,284,45,284,45,285,44,288,45,289,47,287,48,285,47,279,47,279,46,281,45",
        abbr: "EET"
    },
    {
        timezone: "Europe/Rome",
        country: "IT",
        pin: "267,67",
        offset: 1,
        points: "273,69,273,70,274,71,272,72,273,71,272,69,265,66,264,64,262,63,260,64,261,64,260,64,259,62,260,62,259,61,262,60,263,61,263,60,264,61,265,60,267,60,269,60,269,61,269,62,267,62,267,63,267,63,269,65,270,67,272,67,272,67,276,69,275,70,274,69,273,69",
        abbr: "CET"
    },
    {
        timezone: "Europe/Samara",
        country: "RU",
        pin: "320,51",
        offset: 4,
        points: "320,49,323,49,322,50,322,51,321,53,317,52,317,51,317,51,319,50,320,49",
        abbr: "SAMT"
    },
    {
        timezone: "Europe/Samara",
        country: "RU",
        pin: "320,51",
        offset: 4,
        points: "325,47,324,47,324,47,324,47,324,46,323,47,321,47,321,47,322,46,321,45,322,45,322,44,325,44,326,46,325,46,325,47",
        abbr: "SAMT"
    },
    {
        timezone: "Europe/San_Marino",
        country: "SM",
        pin: "267,64",
        offset: 1,
        points: "267,64,267,64,267,64",
        abbr: "CET"
    },
    {
        timezone: "Europe/Sarajevo",
        country: "BA",
        pin: "276,64",
        offset: 1,
        points: "272,63,277,63,277,63,277,64,277,64,277,64,276,65,276,66,274,65,272,63",
        abbr: "CET"
    },
    {
        timezone: "Europe/Simferopol",
        country: "RU",
        pin: "297,63",
        offset: 2,
        points: "298,61,299,62,301,62,297,63,296,62,296,62,295,62,297,61,297,61,298,61",
        abbr: "MSK"
    },
    {
        timezone: "Europe/Skopje",
        country: "MK",
        pin: "280,67",
        offset: 1,
        points: "281,66,282,67,282,68,279,68,278,67,279,67,281,66",
        abbr: "CET"
    },
    {
        timezone: "Europe/Sofia",
        country: "BG",
        pin: "282,66",
        offset: 2,
        points: "289,66,288,66,289,67,287,67,286,68,282,68,281,66,282,65,281,64,281,64,282,64,285,64,288,64,290,64,289,66",
        abbr: "EET"
    },
    {
        timezone: "Europe/Stockholm",
        country: "SE",
        pin: "275,43",
        offset: 1,
        points: "267,47,268,46,267,45,267,44,266,44,265,43,266,43,266,42,268,41,267,40,268,40,267,39,267,37,268,36,270,36,269,35,270,34,270,33,272,33,273,32,272,31,274,30,275,31,275,30,278,30,278,29,283,31,283,31,283,32,283,33,284,34,280,34,281,34,280,34,280,35,279,35,280,36,279,36,275,38,274,37,275,38,274,38,275,39,274,39,274,41,277,42,275,42,276,43,275,43,275,43,274,43,272,44,274,44,273,44,273,44,273,45,273,45,272,47,270,47,270,48,269,48,268,48,268,48,267,47",
        abbr: "CET"
    },
    {
        timezone: "Europe/Tallinn",
        country: "EE",
        pin: "284,42",
        offset: 2,
        points: "283,43,286,42,289,43,288,44,289,45,287,45,285,44,284,45,284,44,283,44,283,43,283,43",
        abbr: "EET"
    },
    {
        timezone: "Europe/Tirane",
        country: "AL",
        pin: "278,68",
        offset: 1,
        points: "278,70,277,69,277,67,277,66,277,66,279,66,278,68,279,69,278,70",
        abbr: "CET"
    },
    {
        timezone: "Europe/Uzhgorod",
        country: "UA",
        pin: "281,57",
        offset: 2,
        points: "282,57,284,58,282,58,281,58,282,57",
        abbr: "EET"
    },
    {
        timezone: "Europe/Vaduz",
        country: "LI",
        pin: "263,60",
        offset: 1,
        points: "263,59,263,60,263,59",
        abbr: "CET"
    },
    {
        timezone: "Europe/Vatican",
        country: "VA",
        pin: "267,67",
        offset: 1,
        points: "267,67,267,67,267,67",
        abbr: "CET"
    },
    {
        timezone: "Europe/Vienna",
        country: "AT",
        pin: "273,58",
        offset: 1,
        points: "263,59,268,59,268,58,271,57,273,57,274,58,273,59,273,60,272,60,270,61,267,60,267,60,264,60,263,59",
        abbr: "CET"
    },
    {
        timezone: "Europe/Vilnius",
        country: "LT",
        pin: "285,49",
        offset: 2,
        points: "279,47,285,47,287,48,286,49,286,50,283,50,282,49,281,49,280,48,279,47",
        abbr: "EET"
    },
    {
        timezone: "Europe/Volgograd",
        country: "RU",
        pin: "312,57",
        offset: 4,
        points: "315,57,316,59,318,59,318,60,317,60,318,61,318,62,317,61,317,62,315,62,316,61,315,61,316,60,315,59,315,59,314,59,313,58,312,58,312,59,311,59,308,58,309,57,308,57,309,56,307,54,310,54,309,53,310,52,317,52,320,53,320,54,317,55,318,56,316,55,315,57",
        abbr: "MSK"
    },
    {
        timezone: "Europe/Volgograd",
        country: "RU",
        pin: "312,57",
        offset: 4,
        points: "317,40,318,41,317,42,319,43,319,42,321,42,324,41,324,43,325,43,325,44,322,44,322,45,321,45,322,46,321,47,318,45,315,46,315,45,316,45,314,44,316,43,315,43,315,42,314,41,316,40,317,40",
        abbr: "MSK"
    },
    {
        timezone: "Europe/Warsaw",
        country: "PL",
        pin: "279,52",
        offset: 1,
        points: "283,55,282,56,282,57,280,56,276,56,275,55,273,55,273,55,271,54,270,52,270,52,270,50,275,49,277,49,277,50,282,49,283,51,282,52,284,54,283,55",
        abbr: "CET"
    },
    {
        timezone: "Europe/Zagreb",
        country: "HR",
        pin: "272,61",
        offset: 1,
        points: "277,63,272,62,274,65,272,65,270,62,269,63,269,62,271,62,272,61,273,60,275,61,276,61,277,62,277,63",
        abbr: "CET"
    },
    {
        timezone: "Europe/Zaporozhye",
        country: "UA",
        pin: "299,59",
        offset: 2,
        points: "298,59,298,59,298,58,299,58,302,59,301,60,299,61,299,61,298,59",
        abbr: "EET"
    },
    {
        timezone: "Europe/Zurich",
        country: "CH",
        pin: "262,59",
        offset: 1,
        points: "259,61,258,61,260,59,262,59,263,59,263,60,265,60,264,61,263,60,263,61,262,60,260,61,259,61,259,61",
        abbr: "CET"
    },
    {
        timezone: "Indian/Antananarivo",
        country: "MG",
        pin: "316,151",
        offset: 3,
        points: "305,160,324,142",
        abbr: "EAT"
    },
    {
        timezone: "Indian/Chagos",
        country: "IO",
        pin: "351,135",
        offset: 6,
        points: "344,140,356,127",
        abbr: "IOT"
    },
    {
        timezone: "Indian/Christmas",
        country: "CX",
        pin: "397,139",
        offset: 7,
        points: "392,145,402,134",
        abbr: "CXT"
    },
    {
        timezone: "Indian/Cocos",
        country: "CC",
        pin: "385,142",
        offset: 6.5,
        points: "379,147,390,136",
        abbr: "CCT"
    },
    {
        timezone: "Indian/Comoro",
        country: "KM",
        pin: "310,141",
        offset: 3,
        points: "305,147,317,136",
        abbr: "EAT"
    },
    {
        timezone: "Indian/Kerguelen",
        country: "TF",
        pin: "348,194",
        offset: 5,
        points: "320,194,358,177",
        abbr: "TFT"
    },
    {
        timezone: "Indian/Mahe",
        country: "SC",
        pin: "327,131",
        offset: 4,
        points: "314,144,328,125",
        abbr: "SCT"
    },
    {
        timezone: "Indian/Maldives",
        country: "MV",
        pin: "352,119",
        offset: 5,
        points: "346,126,357,115",
        abbr: "MVT"
    },
    {
        timezone: "Indian/Mauritius",
        country: "MU",
        pin: "330,153",
        offset: 4,
        points: "328,154,338,139",
        abbr: "MUT"
    },
    {
        timezone: "Indian/Mayotte",
        country: "YT",
        pin: "313,143",
        offset: 3,
        points: "308,148,318,138",
        abbr: "EAT"
    },
    {
        timezone: "Indian/Reunion",
        country: "RE",
        pin: "327,154",
        offset: 4,
        points: "322,160,333,149",
        abbr: "RET"
    },
    {
        timezone: "Pacific/Apia",
        country: "WS",
        pin: "11,144",
        offset: 14,
        points: "5,150,17,139",
        abbr: "WSDT"
    },
    {
        timezone: "Pacific/Auckland",
        country: "NZ",
        pin: "493,176",
        offset: 13,
        points: "485,190,481,189,484,186,487,185,490,181,491,182,492,182,492,182,492,182,492,183,490,185,490,186,488,187,487,189,485,190",
        abbr: "NZDT"
    },
    {
        timezone: "Pacific/Auckland",
        country: "NZ",
        pin: "493,176",
        offset: 13,
        points: "495,181,494,183,493,182,493,181,491,180,492,179,493,178,492,176,492,175,492,176,490,173,492,174,493,176,494,177,494,176,495,178,498,177,497,179,496,179,495,181",
        abbr: "NZDT"
    },
    {
        timezone: "Pacific/Chatham",
        country: "NZ",
        pin: "5,186",
        offset: 13.8,
        points: "-1,192,11,181",
        abbr: "CHADT"
    },
    {
        timezone: "Pacific/Chuuk",
        country: "FM",
        pin: "461,115",
        offset: 10,
        points: "442,123,464,106",
        abbr: "CHUT"
    },
    {
        timezone: "Pacific/Easter",
        country: "CL",
        pin: "98,163",
        offset: -5,
        points: "93,168,103,158",
        abbr: "EAST"
    },
    {
        timezone: "Pacific/Enderbury",
        country: "KI",
        pin: "12,129",
        offset: 13,
        points: "3,137,18,124",
        abbr: "PHOT"
    },
    {
        timezone: "Pacific/Fakaofo",
        country: "TK",
        pin: "12,138",
        offset: 13,
        points: "5,143,17,132",
        abbr: "TKT"
    },
    {
        timezone: "Pacific/Efate",
        country: "VU",
        pin: "484,150",
        offset: 11,
        points: "476,153,491,143",
        abbr: "VUT"
    },
    {
        timezone: "Pacific/Fiji",
        country: "FJ",
        pin: "498,150",
        offset: 13,
        points: "1,149,1,149,1,149",
        abbr: "FJST"
    },
    {
        timezone: "Pacific/Funafuti",
        country: "TV",
        pin: "499,137",
        offset: 12,
        points: "490,143,505,128",
        abbr: "TVT"
    },
    {
        timezone: "Pacific/Galapagos",
        country: "EC",
        pin: "126,126",
        offset: -6,
        points: "117,132,131,118",
        abbr: "GALT"
    },
    {
        timezone: "Pacific/Gambier",
        country: "PF",
        pin: "63,157",
        offset: -9,
        points: "55,162,68,150",
        abbr: "GAMT"
    },
    {
        timezone: "Pacific/Kwajalein",
        country: "MH",
        pin: "482,112",
        offset: 12,
        points: "477,118,488,107",
        abbr: "MHT"
    },
    {
        timezone: "Pacific/Guadalcanal",
        country: "SB",
        pin: "473,138",
        offset: 11,
        points: "466,142,485,132",
        abbr: "SBT"
    },
    {
        timezone: "Pacific/Guam",
        country: "GU",
        pin: "451,106",
        offset: 10,
        points: "446,112,456,101",
        abbr: "ChST"
    },
    {
        timezone: "Pacific/Honolulu",
        country: "US",
        pin: "31,95",
        offset: -10,
        points: "8,99,35,89",
        abbr: "HST"
    },
    {
        timezone: "Pacific/Johnston",
        country: "UM",
        pin: "15,102",
        offset: -10,
        points: "10,107,20,97",
        abbr: "HST"
    },
    {
        timezone: "Pacific/Kiritimati",
        country: "KI",
        pin: "31,122",
        offset: 14,
        points: "27,141,41,118",
        abbr: "LINT"
    },
    {
        timezone: "Pacific/Kosrae",
        country: "FM",
        pin: "476,118",
        offset: 11,
        points: "471,123,481,113",
        abbr: "KOST"
    },
    {
        timezone: "Pacific/Majuro",
        country: "MH",
        pin: "488,115",
        offset: 12,
        points: "474,119,489,105",
        abbr: "MHT"
    },
    {
        timezone: "Pacific/Midway",
        country: "UM",
        pin: "4,86",
        offset: -11,
        points: "-3,91,9,80",
        abbr: "SST"
    },
    {
        timezone: "Pacific/Marquesas",
        country: "PF",
        pin: "56,138",
        offset: -9.5,
        points: "50,145,63,131",
        abbr: "MART"
    },
    {
        timezone: "Pacific/Nauru",
        country: "NR",
        pin: "482,126",
        offset: 12,
        points: "477,131,487,121",
        abbr: "NRT"
    },
    {
        timezone: "Pacific/Niue",
        country: "NU",
        pin: "14,151",
        offset: -11,
        points: "9,157,19,146",
        abbr: "NUT"
    },
    {
        timezone: "Pacific/Norfolk",
        country: "NF",
        pin: "483,165",
        offset: 11.5,
        points: "478,170,488,160",
        abbr: "NFT"
    },
    {
        timezone: "Pacific/Noumea",
        country: "NC",
        pin: "481,156",
        offset: 11,
        points: "470,162,489,147",
        abbr: "NCT"
    },
    {
        timezone: "Pacific/Pago_Pago",
        country: "AS",
        pin: "13,145",
        offset: -11,
        points: "7,150,20,135",
        abbr: "SST"
    },
    {
        timezone: "Pacific/Palau",
        country: "PW",
        pin: "437,115",
        offset: 9,
        points: "427,126,442,109",
        abbr: "PWT"
    },
    {
        timezone: "Pacific/Pitcairn",
        country: "PN",
        pin: "69,160",
        offset: -8,
        points: "63,165,82,153",
        abbr: "PST"
    },
    {
        timezone: "Pacific/Pohnpei",
        country: "FM",
        pin: "470,115",
        offset: 11,
        points: "463,122,478,110",
        abbr: "PONT"
    },
    {
        timezone: "Pacific/Port_Moresby",
        country: "PG",
        pin: "454,138",
        offset: 10,
        points: "447,141,471,126",
        abbr: "PGT"
    },
    {
        timezone: "Pacific/Rarotonga",
        country: "CK",
        pin: "28,154",
        offset: -10,
        points: "20,155,32,137",
        abbr: "CKT"
    },
    {
        timezone: "Pacific/Saipan",
        country: "MP",
        pin: "452,104",
        offset: 10,
        points: "446,110,458,91",
        abbr: "ChST"
    },
    {
        timezone: "Pacific/Tahiti",
        country: "PF",
        pin: "42,149",
        offset: -10,
        points: "35,163,61,145",
        abbr: "TAHT"
    },
    {
        timezone: "Pacific/Tarawa",
        country: "KI",
        pin: "490,123",
        offset: 12,
        points: "485,134,496,115",
        abbr: "GILT"
    },
    {
        timezone: "Pacific/Tongatapu",
        country: "TO",
        pin: "7,154",
        offset: 13,
        points: "0,161,14,142",
        abbr: "TOT"
    },
    {
        timezone: "Pacific/Wake",
        country: "UM",
        pin: "481,98",
        offset: 12,
        points: "476,103,486,93",
        abbr: "WAKT"
    },
    {
        timezone: "Pacific/Wallis",
        country: "WF",
        pin: "5,143",
        offset: 12,
        points: "-3,150,10,138",
        abbr: "WFT"
    }
];


const { fragment: $dac6c3868e5c3497$var$fragment, div: $dac6c3868e5c3497$var$div, select: $dac6c3868e5c3497$var$select, option: $dac6c3868e5c3497$var$option } = (0, $519f1ddd575d759f$export$7a5d735b2ab6389d);
const $dac6c3868e5c3497$var$SVG_XMLNS = "http://www.w3.org/2000/svg";
const $dac6c3868e5c3497$var$regionKey = Symbol("region");
const $dac6c3868e5c3497$var$timezoneMap = ()=>{
    const svg = document.createElementNS($dac6c3868e5c3497$var$SVG_XMLNS, "svg");
    svg.setAttribute("viewBox", "0 0 500 250");
    svg.append(...(0, $7148e8975cd26971$export$6b408984b31c1b30).map((region)=>{
        const polygon = document.createElementNS($dac6c3868e5c3497$var$SVG_XMLNS, "polygon");
        polygon.setAttribute("points", region.points);
        polygon[$dac6c3868e5c3497$var$regionKey] = region;
        return polygon;
    }));
    return svg;
};
class $dac6c3868e5c3497$export$6e05cc8a7dfe9700 extends (0, $519f1ddd575d759f$export$16fa2f45be04daa8) {
    value = (0, $1fe5fe80b15eb088$export$80a1beafc835526e);
    timezone = (0, $1fe5fe80b15eb088$export$80a1beafc835526e).name;
    region = (0, $7148e8975cd26971$export$6b408984b31c1b30).find((rg)=>rg.timezone === (0, $1fe5fe80b15eb088$export$80a1beafc835526e).name);
    styleNode = (0, $519f1ddd575d759f$export$16fa2f45be04daa8).StyleNode({
        ":host": {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: `calc(500px * var(--scale, 1))`,
            height: `calc(250px * var(--scale, 1))`,
            fontFamily: "var(--font-family, Sans-serif)"
        },
        ".map": {
            background: "var(--map-ocean, #79b)"
        },
        ".map, svg": {
            width: "100%",
            height: "100%"
        },
        "polygon": {
            transition: "var(--transition, ease-out 0.2s)",
            fill: "var(--map-land, #555)"
        },
        "polygon:hover": {
            fill: "var(--hover-color, #777)"
        },
        "polygon.active": {
            fill: "var(--active-color, #999)"
        },
        ".zone-name": {
            position: "absolute",
            bottom: `var(--inset, 10px)`,
            left: `var(--inset, 10px)`,
            right: `var(--inset, 10px)`,
            color: "var(--font-color, white)",
            fontSize: "var(--font-size, 16px)",
            padding: `calc(var(--padding, 5px))`,
            background: "none",
            textAlign: "center",
            border: "none",
            outline: "none"
        }
    });
    content = $dac6c3868e5c3497$var$fragment($dac6c3868e5c3497$var$div({
        class: "map",
        dataRef: "map"
    }), $dac6c3868e5c3497$var$select({
        class: "zone-name",
        dataRef: "zonePicker"
    }));
    constructor(){
        super();
        this.initAttributes("timezone");
    }
    pickRegion = (event)=>{
        // @ts-expect-error
        const region = event.target[$dac6c3868e5c3497$var$regionKey];
        if (region !== undefined) {
            this.region = region;
            this.timezone = region.timezone;
        }
        if (this.value === undefined || this.value.name !== this.timezone) // @ts-expect-error
        this.value = (0, $1fe5fe80b15eb088$export$bc6bb0e72ae9e582).find((timezone)=>timezone.name === this.timezone);
    };
    connectedCallback() {
        super.connectedCallback();
        const { map: map } = this.refs;
        if (map.querySelector("svg") === null) map.append($dac6c3868e5c3497$var$timezoneMap());
        map.addEventListener("click", this.pickRegion);
    }
    render() {
        const { zonePicker: zonePicker, map: map } = this.refs;
        const zones = (0, $1fe5fe80b15eb088$export$bc6bb0e72ae9e582).filter((timezone)=>timezone.abbr === this.value?.abbr);
        [
            ...map.querySelectorAll(`polygon`)
        ].forEach((polygon)=>{
            const region = polygon[$dac6c3868e5c3497$var$regionKey];
            polygon.classList.toggle("active", this.region !== undefined && region.abbr === this.region?.abbr && region.offset === this.region?.offset);
        });
        zonePicker.textContent = "";
        zonePicker.append(...zones.map((timezone)=>$dac6c3868e5c3497$var$option({
                value: timezone.name
            }, timezone.name.replace(/_/g, " "))));
        zonePicker.value = this.value.name;
    }
}
const $dac6c3868e5c3497$export$5e870c586af91bc = $dac6c3868e5c3497$export$6e05cc8a7dfe9700.elementCreator({
    tag: "timezone-picker"
});





export {$dac6c3868e5c3497$export$5e870c586af91bc as timezonePicker, $dac6c3868e5c3497$export$6e05cc8a7dfe9700 as TimezonePicker, $1fe5fe80b15eb088$export$bc6bb0e72ae9e582 as timezones, $1fe5fe80b15eb088$export$80a1beafc835526e as localTimezone};
//# sourceMappingURL=index.js.map
