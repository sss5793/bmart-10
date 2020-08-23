import { Router, Request, Response } from "express";
import { APIResponse } from "../types/APIResponse";

import categoryDAO from "../daos/category.dao";

const router = Router();

/**
 * @api {get} /api/category/list/:main 상품 이름으로 검색
 * @apiName CategoryList by main
 * @apiGroup Category
 *
 * @apiParam {String} main
 *
 * @apiSuccess {Boolean} success API 성공 여부
 * @apiSuccess {Array} data 해당 메인 카테고리의 서브 카테고리 정보들
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "data" : [
 *          {"name": string, "no": number}
 *       ]
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
router.get("/list/:main", async (request: Request, response: Response) => {
  const { main } = request.params;
  const apiResponse: APIResponse = {
    success: false,
  };

  if (!main) {
    return response.status(404).send(apiResponse);
  }

  const result = await categoryDAO.getSubCategoryNameList(main);
  if (!result) {
    return response.status(404).send(apiResponse);
  }
  const subCategoryInfoArr = await Promise.all(
    result.data.map((one) => categoryDAO.getSubCategoryInfo(one))
  );

  apiResponse.success = true;
  apiResponse.data = [...subCategoryInfoArr];
  response.status(200).send(apiResponse);
});

/**
 * @api {get} /api/category/goods/:main 메인 카테고리 이름으로 상품을 가져온다.
 * @apiName GoodsInMainCategory by main
 * @apiGroup Category
 *
 * @apiParam {String} main
 *
 * @apiSuccess {Boolean} success API 성공 여부
 * @apiSuccess {Array} data 해당 메인 카테고리의 상품 정보 배열
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "data" : [
 *           {"goodId": number, "title": string, "price": string, "sale": string, "src": string}
 *       ]
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
router.get("/goods/:main", async (request: Request, response: Response) => {
  const startIdx = parseInt(request.query.startIdx as string) || undefined;
  const offset = parseInt(request.query.offset as string) || undefined;

  const { main } = request.params;
  const apiResponse: APIResponse = {
    success: false,
  };

  if (!main) {
    return response.status(404).send(apiResponse);
  }

  const result = await categoryDAO.getSubCategoryNameList(main);
  if (!result) {
    return response.status(404).send(apiResponse);
  }
  const goods = await categoryDAO.getGoodsInMainCategory(
    result.data,
    startIdx,
    offset
  );

  apiResponse.success = true;
  apiResponse.data = goods;
  response.status(200).send(apiResponse);
});

export default router;
