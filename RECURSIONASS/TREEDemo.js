function TreeNode(value) {
    this.value = value;
    this.descendents = [];
    }
    // create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
const newNode = new TreeNode('MINE');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);
lisa.descendents.push(newNode);

function contains(abe,nodeName){
    if(abe.value ==nodeName)
    return true;
    for(let child of abe.descendents){
    let result = contains(child,nodeName);
    if(result)
    return true;
    }
    return false;
   }
   console.log(contains(abe,'Abe'))

   //count number of leaves 
    
   function countLeafNodes(abe){
    if(abe.descendents.length==0){
        return 1;
    }
    let count =0;
    for(let child of abe.descendents){
    count= count+ countLeafNodes(child);
    }
    return count;
   }

   console.log("number of leaves::", countLeafNodes(abe));


   //count number of parents

   function countParentNodes(abe){
     if(abe.descendents.length==0){
        return 0;
     }
    let countParent = 1;
    for (const child of abe.descendents) {
        countParent = countParent + countParentNodes(child)
        
    }
    return countParent;
   }

   console.log("number of parent::", countParentNodes(abe));

   //
   function flattenTree(abe){
    
     let names = [abe.value];
     for (const child of abe.descendents) {
        names = names.concat(flattenTree(child));
     }
     return names;  
   }

   console.log(flattenTree(abe));