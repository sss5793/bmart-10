import { Router, Request, Response } from "express";
import { APIResponse } from "../types/APIResponse";

import goodsDAO from "../daos/goods.dao";

const router = Router();

router.get("/:name", async (request: Request, response: Response) => {
  const { name } = request.params;
  const apiResponse: APIResponse = {
    success: false,
  };

  if (!name) {
    response.status(404).send(apiResponse);

    return;
  }

  const result = await goodsDAO.search(name);
  apiResponse.success = true;
  apiResponse.data = {
    rows: result,
  };

  response.status(200).send(apiResponse);
});

export default router;
