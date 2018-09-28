function difference () {
    let list = arguments[0]
    for(let i=1; i<arguments.length; i++) {
        let x = arguments[i]
        for(let j=0; j<list.length;j++) {
            for(let k=0;k<x.length; k++) {
                if(list[j] === x[k])
                    list[j] = NaN
            }
        }
    }
    let ans = []
    for(let i=0; i<list.length;i++) {
        if (!isNaN(list[i]))
            ans.push(list.slice(i,i+1).pop())
    }
    return ans
}

function drop() {
    let list = arguments[0]
    let x = arguments[1]

    if (x === undefined)
        list = list.slice(1)
    else list = list.slice(x)
    return list
}

const lodashtest = {
    difference: difference,
    drop: drop
}

module.exports = lodashtest
