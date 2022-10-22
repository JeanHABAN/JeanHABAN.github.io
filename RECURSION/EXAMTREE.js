/* eslint-disable */

function TreeNode(value) {

    this.value = value;

    this.descendents = [];

}

const flowers = new TreeNode('flowers');

const subtropicalFlowers = new TreeNode('subtropicalFlowers');

const temperateFlowers = new TreeNode('temperateFlowers');

const bouganvillea = new TreeNode('bougainvillea');

const roses = new TreeNode('roses');

const daffodils = new TreeNode('daffodils');

// associate root with is descendents

flowers.descendents.push(subtropicalFlowers);

flowers.descendents.push(temperateFlowers);

subtropicalFlowers.descendents.push(bouganvillea);

temperateFlowers.descendents.push(roses);

temperateFlowers.descendents.push(daffodils);



// function flatternTree(tree){
//     let arr = [{name: tree.value, children: tree.descendents.length}];

//     for (const child of tree.descendents) {
//        arr = arr.concat(flatternTree(child)) 
//     }
//     return arr;
// }

function flatternTree(flowers){
    let arr = [{name: flowers.value, children: flowers.descendents.length}];
    //let arr = [flowers.value];
    for (const child of flowers.descendents) {
        arr = arr.concat(flatternTree(child));       
    }
    return arr;
}
console.log(flatternTree(flowers))


// function countLeaves(tree){
//     let count = 0;  
//     if(tree.descendents.length == 0){
//         count++;
//     }
//     for (const child of tree.descendents) {
//       count +=  countLeaves(child);
        
//     }
//     return count;
// }

//other way to solve it
function countLeaves(flowers){
    if(flowers.descendents.length==0){
        return 1;
    }
    let count = 0;
    for (const child of flowers.descendents) {
        count= count + countLeaves(child);
    }
    return count;
}
console.log("NUMBER OF LEAVES:: ",countLeaves(flowers))


//extra demands
//count parents 
function countParent(flowers){
    if(flowers.descendents.length==0){
        return 0;
    }
    let count = 1;
    for (const child of flowers.descendents) {
        count = count + countParent(child)  
    }
    return count;
}

console.log("Number of parent:: ",countParent(flowers));

//find if it contains some nodes

function contains(flowers, target){
    if(flowers.value==target){
        return true;
    }
    else{
    for (const child of flowers.descendents) {
        let result = contains(child, target);
        if(result){
            return true;
        }  
    }
    return false;
     }
}
console.log("CHECK CONTAIN:: ",contains(flowers,'rosess'));

// print names of children ?????????????to be checked again
// function printChildren(flowers){
//     if(flowers.descendents==undefined){
//         return 1;
//     }
//     flowers.descendents.forEach(function(child){
//         let val = printChildren(child)
//         flowers.value += val;
//     });
//     return flowers.value + " ";
// }

// console.log("CHILDREN::", printChildren(flowers));