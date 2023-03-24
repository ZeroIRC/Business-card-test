import { rest } from "msw";
import itemList from "./itemlist.json";
import itemDetail from "./itemdetail.json";

export const handlers = [
  rest.get("/items", async (req, res, ctx) => {
    await sleep(500);
    return res(ctx.status(200), ctx.json(itemList));
  }),

  rest.get("/items/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const item = itemDetail.item.filter((data) => data.id === Number(id));
    if (item.length === 0) {
      return res(ctx.status(500));
    }
    await sleep(500);
    return res(ctx.status(200), ctx.json(item[0]));
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
