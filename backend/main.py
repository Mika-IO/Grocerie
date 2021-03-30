from typing import Optional

from fastapi import FastAPI

app = FastAPI()

ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

@app.get("/")
def read_root():
    return {"msg": "Welcome to Kitanda.SHOP API"}

@app.get("/market/{market_id}")
def read_market(market_id: int, name: Optional[str] = None):
    return {
            "market_id": market_id,
            "name": "arroz",
            "opening_hours": "08:00 18:00",
            "localization": "999999999",
        }

@app.get("/market/{market_id}/product/{product_id}")
def read_product(market_id: int, product_id: int, name: Optional[str] = None):
    return {
            "product_id": product_id,
            "name": "arroz",
            "descript": "Um produto mucho loko",
            "value": 55,
        }

@app.get("/markets")
def read_markets():
    return {"markets": []}
