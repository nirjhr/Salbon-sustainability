const exp=require("express");
const router=exp.Router();
const pc=require("../controller/product_cont");

router.post("/add",pc.addproduct);
router.get("/sel",pc.selproduct);
router.post("/del",pc.delproduct);
router.post("/edit",pc.editproduct);

router.post("/upd",pc.updproduct);




module.exports=router;

