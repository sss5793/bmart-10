import { Router } from "express";

import goodsAPI from "./goodsAPI";
import categoryAPI from "./categoryAPI";

const router = Router();

router.use("/goods", goodsAPI);
router.use("/category", categoryAPI);
export default router;
