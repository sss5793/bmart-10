import { Router } from "express";

import goodsAPI from "./goodsAPI";
import userAPI from "./userAPI";

const router = Router();

router.use("/goods", goodsAPI);
router.use("/user", userAPI);

export default router;
