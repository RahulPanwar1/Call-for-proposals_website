from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import json
import datefinder
import json
from datetime import datetime
import dateparser

app = FastAPI()
origins = ["*"]

def datext(input_str):
    matches = datefinder.find_dates(input_str)
    return list(matches)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open('./crawler/spiders/call_for_proposals.json') as f:
    data = json.load(f)

current_date = datetime.now().date()

filtered_objects = []
for sublist in data:
    filtered_sublist = []
    for obj in sublist:
        for index, (key, value) in enumerate(obj.items()):
            if index == 0 and value.isdigit():
                continue
            if isinstance(value, str):
                parsed_date = dateparser.parse(value)
                if parsed_date and parsed_date.date() > current_date:
                    filtered_sublist.append(obj)
                    break
    filtered_objects.append(filtered_sublist)
filtered_json = json.dumps(filtered_objects, indent=2)

@app.get('/file')
async def home():
    return filtered_objects

@app.post("/123")
async def get_body(request: Request):
    data = await request.json()
    return datext(data["string"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
