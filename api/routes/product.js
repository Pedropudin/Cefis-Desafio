const expresss = require("express");
const router = expresss.Router();

//We are in the product route -> why?

//Handle get request
router.get('/',(req,res,next) => {
    res.status(200).json({
        message:"Get request"
    });
}); 

router.post('/',(req,res,next) => {
    //don't know exactly why 201 is a better status to return in the post method
    res.status(201).json({
        message:"Post request"
    });
}); 

router.get("/:productId",(req,res,next) => {
    const id = req.params.productId;
    if(id === "special") {
        res.status(200).json({
            message: "You find the special ID",
            id_value: id
        })
    } else {
        res.status(200).json({
            message: "Worked!",
            id_value: id
        })
    }
});

router.patch("/:productId",(req,res,next) => {
    res.status(200).json({
        message: "Update"
    });
});

router.delete("/:productId",(req,res,next) => {
    res.status(200).json({
        message: "Delete"
    });
});

module.exports = router;