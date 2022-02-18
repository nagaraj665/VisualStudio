let items = require("../items");
const {v4:uuid} = require("uuid");

const getStudents = (req,reply) => {
    reply.send(items);
};

const getStudent = (req,reply)=>{
    const {StudentID}=req.params;
    const item=items.find((item)=>item.StudentID==StudentID);
    reply.send(item);
};

const addStudent = (req,reply)=>{
    const {StudentName,Subject1,Subject2,Subject3,Subject4,Subject5}=req.body;
    const item= {
        StudentID: uuid(),
        StudentName,
        Subject1,
        Subject2,
        Subject3,
        Subject4,
        Subject5, 
    };
    items = [...items, item];
    reply.code(201).send(item);
};

const deleteStudent = (req,reply)=>{
    const {StudentID} = req.params;
    items = items.filter((item)=>item.StudentID !== StudentID);
    reply.send({ message: "Requested Student details has been deleted"});
};

const updateStudent = (req,reply)=>{
    const {StudentID} = req.params;
    const {StudentName,Subject1,Subject2,Subject3,Subject4,Subject5} = req.body;
    items = items.map((item)=>(item.StudentID === StudentID ? {StudentName, StudentID, Subject1, Subject2, Subject3, Subject4, Subject5}: item));
    item = items.find((item) => item.StudentID === StudentID);
    reply.send(item);
};

module.exports = {
    getStudent,
    getStudents,
    addStudent,
    deleteStudent,
    updateStudent,
};