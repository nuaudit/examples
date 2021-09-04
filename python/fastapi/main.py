from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel
from nuaudit_python_sdk import Nuaudit


nuaudit = Nuaudit(
    api_key="API_KEY_SECRET",
    organization_id="ORGANIZATION_ID",
    trail_id="TRAIL_ID"
)

app = FastAPI()


class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    data = {"item_name": item.name, "item_id": item_id}
    nuaudit.create_record(description="Updated Item", resource=data, identity={})
    return data