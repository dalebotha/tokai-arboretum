const trees = require('./old_tree_data.json');
let fs = require('fs');

let newTrees = [];

for (tree of trees) {
    //console.log(tree);
    
    newTrees.push({
        species: tree[0],
        wikipedia_link: tree[1],
        common_names: tree[2][0],
        origin: tree[2][1],
        numbers: tree[2][2]
    });
    
}
 newTrees = JSON.stringify(newTrees, null, 5);

 fs.writeFile("tree-data.json", newTrees, err => {});