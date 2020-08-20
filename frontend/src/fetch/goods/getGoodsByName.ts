import { API_HOST } from "../../constants/API";
import { Goods } from "../../types/Goods";

export type APIResponse =
  | {
      success: false;
    }
  | {
      success: true;
      data: {
        goods: Goods[];
      };
    };

export default async function getGoodsByName(
  query: string
): Promise<APIResponse> {
  return await fetch(`${API_HOST}/api/goods/${query}`, {
    mode: "cors",
    method: "GET",
  }).then((res) => res.json());
}
