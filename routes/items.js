const {getStudent,getStudents,addStudent,deleteStudent,updateStudent} = require("../controllers/items")

const Students = {
   type: "object",
    properties: {
        StudentName: { type: "string" },
        StudentID: { type: "string" },
        Subject1: { type: "integer" },
        Subject2: { type: "integer" },
        Subject3: { type: "integer" },
        Subject4: { type: "integer" },
        Subject5: { type: "integer" },
    },
}

const getStudentsDets = {
    schema: {
        response: {
            200: {
                type: "array",
                items: Students,  
            },
        },
    },
    handler: getStudents,
};

const getStudentDets = {
    schema: {
        response: {
            200: Students,
        },
    },
    handler: getStudent,
};

const postStudentDets = {
    schema: {
        body: {
            type: "object",
            required: ["StudentName"],
            properties: {
                StudentName: {
                    type: "string",
                },
            },
        },
        response: {
            201: Students,
        },
    },
    handler: addStudent,
};

const deleteStudentDets = {
    schema: {
        response: {
            200: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                    },
                },
            },
        },
    },
    handler: deleteStudent,
};

const updateStudentDets = {
    schema: {
        response: {
            200: Students
        },
    },
    handler: updateStudent,
};

function itemRoutes(fastify, options, done){
fastify.get("/items", getStudentsDets);

fastify.get("/item/:StudentID", getStudentDets);

fastify.post("/item", postStudentDets);

fastify.delete("/item/:StudentID", deleteStudentDets);

fastify.put("/item/:StudentID", updateStudentDets);
done();
}

module.exports = itemRoutes;
