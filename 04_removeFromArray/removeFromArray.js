const removeFromArray = function(list, ...toRemove) {
    for (const item of toRemove) {
        let i = list.indexOf(item);
        while (i >= 0){
            list.splice(i, 1);
            i = list.indexOf(item);
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
