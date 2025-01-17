import { Router, Request, Response } from "express";
import { APIResponse } from "../types/APIResponse";

import goodsDAO from "../daos/goods.dao";

const router = Router();

/**
 * @api {get} /api/goods/query/:query 상품 이름으로 검색
 * @apiName Goods by Name
 * @apiGroup Goods
 *
 * @apiParam {String} name goods title
 *
 * @apiSuccess {Boolean} success API 성공 여부
 * @apiSuccess {Object} data 검색한 이름이 포함된 상품 리스트
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "data" : {
 *         "goods" : Goods[]
 *       }
 *     }
 *
 * @apiError NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "success": false,
 *     }
 */
router.get("/query/:query", async (request: Request, response: Response) => {
  const { query } = request.params;
  const apiResponse: APIResponse = {
    success: false,
  };

  if (!query) {
    response.status(404).send(apiResponse);

    return;
  }

  const result = await goodsDAO.search(query);
  apiResponse.success = true;
  apiResponse.data = {
    goods: result,
  };

  response.status(200).send(apiResponse);
});

export default router;
