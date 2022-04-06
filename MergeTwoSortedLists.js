function mergeTwoLists(list1, list2) {
    let list = list1.concat(list2)
    list.sort(function (a, b) {
        return a - b;
    });
    console.log(list)
}


mergeTwoLists([1, 2, 4], [1, 3, 4])