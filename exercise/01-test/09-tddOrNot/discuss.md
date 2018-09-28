### TDD 與 BDD

* TDD: 先寫完測試，才開始開發程式，這樣可以透過結論去推演程式該如何撰寫，可以讓程式更加精簡，而不會有多餘的語法

* BDD: 也是先寫完測試，但BDD的語法不像BDD那麼難懂，而是像是口語式的英文，可以讓非工程師的客戶也可以參與測試內容的討論

### 遇到的困難

* 在寫最後一個`flattenDeep`函數時，發現因為無法判斷有多少層陣列，所以一般的寫法，無法完成函數的實作，因此老師建議用遞迴的方式來寫，我在網路上也有找到範例，但看不太懂運作的原理

```javascript
function flatten(arr) {
    let y= []
    for (let i = 0; i<arr.length; i++) {
        if(Array.isArray(arr[i]))
            y= y.concat(flatten(arr[i]))
        else y.push(arr[i])
    }
    return y
}
```

所以我想出另一個解決方式：

```javascript
function flatten(arr) { 
    let y = []
    for(let i= 0;i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            for(let j=0; j<arr[i].length; j++) 
                y.push(arr[i][j])
        }
        else y.push(arr[i])
    }
    return y
}

function flattenDeep(array) {
    for(let i=0; i<array.length; i++) {
        if(Array.isArray(array[i])) 
            array = flatten(array)
    }
    return array
}
```

先寫一個`flatten`函數，它的功用是減少一層陣列的維度，在寫`flattenDeep`函數，用for迴圈將陣列中的各個元素做判斷，如果是陣列就呼叫`flatten`，在每個元素都判斷完後，就可以完成將多層陣列轉換成一微陣列的工作了