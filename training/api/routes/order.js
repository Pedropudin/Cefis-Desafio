const express = require("express");
const router = express.Router();

router.get("/",(req,res,next) => {
    res.status(200).json({
        message: "Order inserted"
    });
});

router.post("/",(req,res,next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity,
        adress: req.body.adress
    }
    res.status(201).json({
        message: "Order created",
        order: order
    })
});

router.get("/:orderId",(req,res,next) => {
    const id = req.params.orderId
    res.status(200).json({
        message: "Order details",
        Order_Id: id
    });
});

router.delete("/:orderId",(req,res,next) => {
    const id = req.params.orderId
    res.status(200).json({
        message: "Order Deleted"
    });
});

module.exports = router;