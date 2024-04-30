const employees =[
   {
        firstname : "Syawadhilah", 
        lastname: "Pradipta",
        dob: "Feb-25-1996",
        role: "Software Engineer"
   },
   {
        firstname : "Brock", 
        lastname: "Purdy",
        dob: "Feb-24-1993",
        role: "Data Engineer"
   },
   {
        firstname : "Jalen ", 
        lastname: "Hurts",
        dob: "Jan-5-1992",
        role: "Data Science"
   },

]

exports.getEmployees =(req,res)=>{
    res.send(employees);
} 

exports.getEmployessId=(req,res)=>{
     const params = req.params.id
     const employee = employees.find((item) => item.id === Number(params))
     res.send(employee)  
}