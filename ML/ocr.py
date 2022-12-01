import os
import json
from flask import jsonify
import requests
import pdfplumber

def download_file(url):
    local_filename = url.split('/')[-1]
    
    with requests.get(url) as r:
        assert r.status_code == 200, f'error, status code is {r.status_code}'
        with open(local_filename, 'wb') as f:
            f.write(r.content)
        
    return local_filename

def fetch(url):
    URL = url
    invoice = 'URL'
    invoice_pdf = download_file(invoice)
    with pdfplumber.open(invoice_pdf) as pdf:
        page = pdf.pages[0]
        text = page.extract_text()

    lines = text.split('\n')

    with open("example.txt", "w") as f:
        for word in text:
            f.write(word)

    dict1 = {}
    total_field_of_prcp = 20
    for line in lines:
        if line[0] == '•':
            key = "medicine"
            dict1.setdefault(key, [])
            dict1[key].append(line)
        else:
            key = "data"
            dict1.setdefault(key, [])
            dict1[key].append(line)

    autentic_percent = ((len(lines)-len(dict1['medicine']))/ 20) * 100

    dict1["authenticity_score"] = autentic_percent
    return dict1
    # creating json file
    # with open("data.json", "w") as outfile:
    #     json.dump(dict1, outfile)