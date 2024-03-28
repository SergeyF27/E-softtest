function copyObj(obj, visited = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    
    const newObj = Array.isArray(obj) ? [] : {};
    visited.set(obj, newObj);
    
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = copyObj(obj[key], visited);
        }
    }
    
    Object.setPrototypeOf(newObj, Object.getPrototypeOf(obj));
    
    return newObj;
}
