import requests
from bs4 import BeautifulSoup
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]

def update_json_data(json_data):
    event_list = json_data["event_list"]
    updated_data = {}

    for idx, url in enumerate(event_list, start=1):
        updated_data[str(idx)] = url

    return updated_data

def get_events():
    page_count = 5  # Number of pages to scrape
    event_data = []
    for page in range(1, page_count + 1):
        url = f"http://google.com/search?q=call+for+proposals&start={((page-1)*10)}"
        r = requests.get(url)
        soup = BeautifulSoup(r.content, 'html.parser')
        links = soup.find_all('a')

        for link in links:
            if link.get("href")[7] != 'h':
                continue
            if link.get("href").find('google.com') != -1:
                continue

            url = link.get("href").split('&')[0][7:]
            event_data.append(url)

    return update_json_data({"event_list": event_data})

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/index')
async def home():
    event_list = get_events()
    return event_list

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
