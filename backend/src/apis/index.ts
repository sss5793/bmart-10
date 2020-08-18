import { Router } from "express";

import goodsAPI from "./goodsAPI";

const router = Router();

router.use("/goods", goodsAPI);

export default router;
