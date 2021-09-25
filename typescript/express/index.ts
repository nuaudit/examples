import express from 'express';
import Nuaudit from 'nuaudit-node-sdk';

type Item = {
    name: string;
    price: number;
    is_offer?: boolean;
}

type Error = {
    message: string;
}

const nuaudit = new Nuaudit(
    "API_KEY_SECRET",
    "ORGANIZATION_ID",
    "TRAIL_ID"
)

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000;

app.get("/item/:id", async (request, response: express.Response<Item | Error>) => {
    const item: Item = {
        name: "example_item",
        price: 10.0
    }
    return response.send(item)
})

app.put("/item/:id", async (request: express.Request<{}, Item, Item>, response: express.Response<Item | Error>) => {
    const item = request.body
    try {
        await nuaudit.createRecord("Updated Item", {}, item)
        return response.send(item)
    } catch (e) {
        const error: Error = {
            message: JSON.stringify(e)
        }
        return response.send(error)
    }
})

app.listen(port, () => {
    console.info(`Running on port: ${port}`)
});