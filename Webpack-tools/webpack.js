const fs = require('node:fs')

var objs = {}
var arrs = null
var loadObj = null
var loadArr = null


function getWebpackObjString(objs){
    let code = "{\n\t"
    Object.keys(objs).forEach((key) => {
        let value = objs[key];
        code += ("\"" + key + "\"" + ": " + value + ", " + "\n\t")
    });
    code += "\n}"
    return code
}


function getWebpackArrString(arrs){
    let code = "[\n\t"
    arrs.forEach((e) => {
        code += (String(e) + ", " + "\n\t")
    })
    code += "\n]"
    return code
}


function getWebpackString(obj){
    if (Array.isArray(obj)){
        return getWebpackArrString(obj)
    } else {
        return getWebpackObjString(obj)
    }
}


function loadObjFunc(o, id){
    let func = o[id]
    objs[id] = func.toString()
}


function loadArrFunc(arr, id){
    if (!arrs){
        arrs = new Array(arr.length).fill(null)
    }
    let func = arr[id]
    arrs[id] = func.toString()
}


function loadFunc(obj, id){
    if (Array.isArray(obj)){
        if (!loadArr){
            loadArr = true
        }
        loadArrFunc(obj, id)
    } else {
        if (!loadObj) {
            loadObj = true
        }
        loadObjFunc(obj, id)
    }
}


function saveWebpackObj(filepath, override=false) {
    if (!override){
        if (fs.existsSync(filepath)){
            throw Error('文件已存在')
        }
    }
    try {
        fs.writeFileSync(filepath, getWebpackObjString(objs), 'utf8');
        console.log('结果已保存!');
    } catch (err) {
        console.error(err);
    }
}


function saveWebpackArr(filepath, override=false){
    if (!override){
        if (fs.existsSync(filepath)){
            throw Error('文件已存在')
        }
    }
    try {
        fs.writeFileSync(filepath, getWebpackArrString(arrs), 'utf8');
        console.log('结果已保存!');
    } catch (err) {
        console.error(err);
    }
}


function save(filepath, override=false) {
    if (!override){
        if (fs.existsSync(filepath)){
            throw Error('文件已存在')
        }
    }
    let saveFunc = null;
    if (loadObj){
        saveFunc = saveWebpackObj
    } else if (loadArr){
        saveFunc = saveWebpackArr
    } else {
        throw Error("Unload object!")
    }
    try {
        saveFunc(filepath, override)
        console.log('The result has been saved, path ->', filepath);
    } catch (err) {
        console.error(err);
    }
    if (loadObj) {
        loadObj = null
        objs = {}
    }
    if (loadArr) {
        loadArr = null
        arrs = null
    }
}

module.exports = {
    loadFunc,
    save
};
