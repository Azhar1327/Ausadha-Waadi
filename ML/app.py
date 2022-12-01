from flask import Flask, jsonify, request
from ocr import fetch, dict1
import requests
import json
app = Flask(__name__)

response_API = requests.get('http://localhost:4000/api/v1')
data = response_API.text
parse_json = json.loads(data)

with open("sample.json", "w") as outfile:
    json.dump(parse_json, outfile)



@app.route('/data', methods=['POST'])
def data():
    f = open('sample.json')
    data = json.load(f)
    URL = data["url"]
    dict = fetch(URL)
    return jsonify(dict)
    


if __name__ == "__main__":
    app.run(debug=True)
