import scrapy
import json
import requests
import os

if os.path.exists('call_for_proposals.json'):
    os.remove('call_for_proposals.json')

class CallForProposalsSpider(scrapy.Spider):
    name = 'call_for_proposals'

    def start_requests(self):
        api_url = 'http://127.0.0.1:8000/index'
        response = requests.get(api_url)
        links = json.loads(response.text)
        for link in links.values():
            yield scrapy.Request(url=link, callback=self.parse)

    def parse(self, response):
        tables = response.css('table')
        data_list = []
        for table in tables:
            rows = table.css('tbody tr')
            for row in rows:
                data = {}
                for index, value in enumerate(row.css('td *::text').getall()):
                    data[f'{index+1}'] = value.strip()
                links = row.css('td a::attr(href)').getall()
                if links:
                    data['links'] = links
                data_list.append(data)

        with open('call_for_proposals.json', 'a') as f:
            if f.tell() == 0:
                f.write('[')
            else:
                f.write(',')
            json.dump(data_list, f, indent=4)
            

        if not tables:
            for link in links:
                yield response.follow(link, self.parse)

    def close(self, reason):
        with open('call_for_proposals.json', 'a') as f:
            f.write(']')

            

