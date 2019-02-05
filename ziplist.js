function zipList(list1, list2) {
  if (list1.length !== list.length) {
    return 0;
  }
  let list = [];
  for (let i = 0; i < list1.length; i++) {
    list.push(list1[i]);
    list.push(list2[i]);
  }
  return list;
}

let testList1 = ['a', 'b', 'c'];
let testList2 = [1, 2, 3];
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.zip(list1, list2);
}

console.log(zipListTheSimpleWay(testList1, testList2));