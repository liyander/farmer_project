import requests
from bs4 import BeautifulSoup
import json
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

url = "https://agritech.tnau.ac.in/expert_system/paddy/Schemes.html"
response = requests.get(url, verify=False)
soup = BeautifulSoup(response.content, 'html.parser')

data = []

# Find the correct table
tables = soup.find_all('table')
for table in tables:
    headers = []
    rows = table.find_all('tr')
    for i, row in enumerate(rows):
        cells = row.find_all(['th', 'td'])
        cell_texts = [cell.get_text(strip=True) for cell in cells]
        
        if i == 0:
            headers = cell_texts
        else:
            if len(cell_texts) == len(headers):
                entry = {headers[j]: cell_texts[j] for j in range(len(headers))}
                data.append(entry)

with open('tnau_paddy_schemes.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("✅ Extracted", len(data), "entries and saved to tnau_paddy_schemes.json")

