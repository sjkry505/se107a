function flattenDeep() {
    let list = arguments[0]
    let y = []
    while(Array.isArray(list)) {
        for(let i=0; i<list.length; i++) {
            console.log("123")
            for(let j=0; j<list.length; j++) {
                if(!Array.isArray(list[j])){
                    y.push(list[j])
                    list = list.splice(j)
                    break
                }
            }
            console.log('list=',list)
            console.log('y',y)
            list = list.pop()
        }
    }
    return y
}

console.log('result = ', flattenDeep([1, [2, [3, [4]], 5]]))