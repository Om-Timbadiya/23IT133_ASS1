// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const tasks=[{title:"Drink",status:"Pending",priority:3},
    {title:"Dance",status:"Completed",priority:2},
    {title:"Walk",status:"Pending",priority:1},
    {title:"Rest",status:"Completed",priority:4},
];

const addtask=(alltasks,task)=>{
    alltasks.push(task);
};

addtask(tasks,{title:"Eat",status:"Pending",priority:5});
console.log(tasks);

const basedonstatus =(alltasks,st)=>{
    return alltasks.filter(task=>task.status===st);
};
console.log(basedonstatus(tasks,"Pending"));

const highprority = (alltasks)=>{
    return alltasks.reduce((high_prority,task)=>{ return high_prority.priority > task.priority ? high_prority : task});
};
console.log(highprority(tasks));

const mapping=(alltasks)=>{
    return alltasks.map(task=>({title:task.title ,status:task.status}));
};
console.log(mapping(tasks));

tasks.forEach(task => {
    console.log(` ${task.title} is ${task.status} and prority is ${task.priority}`);
});
