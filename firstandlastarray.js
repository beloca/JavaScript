const removeFirstAndLast=arr=> {
    if (arr.length >=3){
        return arr.slice(1,-1)
    } else{
        throw "you need 3 elements..."
    }
}
removeFirstAndLast ([1,2,3,4,5,6])
