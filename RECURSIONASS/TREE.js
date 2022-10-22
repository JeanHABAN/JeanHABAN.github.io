let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   };

   function print(parent){
        console.log(parent.name+":"+parent.value);
        if(!parent.children)
            return;
        for(let child of parent.children)
            print(child)
           
   }
   
   print(node1);

   //create TREE

   function tree(value){
    this.value = value;
    this.descendents =[];
   }
   const A = new tree('A');
   const B = new tree('B');
   
   const C = new tree('C');
   const D = new tree('D');
   
   const E = new tree('E');
   
   B.descendents.push ('A');
   C.descendents.push ('A');
   D.descendents.push ('C');
   E.descendents.push ('C');
   console.log(tree(value))