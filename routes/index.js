const express = require ('express');
const router = express.Router();
const {getEmployees,getEmployessId} = require('../controller/employees');


router.get('/',(req,res) =>{
    res.send("HAI");
    // res.render('employee');
});

router.get('/employees',getEmployees);
router.get('/employees/:id', getEmployessId);

module.exports = router;