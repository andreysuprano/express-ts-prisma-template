import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res, next)=>{
    res.send({message:"Deu Boa"});
});

export { router };