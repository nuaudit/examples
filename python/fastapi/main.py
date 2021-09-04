from typing import Optional

from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from nuaudit_python_sdk import Nuaudit

class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None

nuaudit = Nuaudit(
    api_key="API_KEY_SECRET",
    organization_id="ORGANIZATION_ID",
    trail_id="TRAIL_ID"
)

app = FastAPI()

@app.get("/items/{item_id}", response_model=Item)
def read_item(item_id: int, q: Optional[str] = None):
    return Item(
        name="example_item",
        price="10.0"
    )

@app.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, item: Item):
    json_item = jsonable_encoder(item)
    nuaudit.create_record(description="Updated Item", resource=json_item, identity={})
    return item