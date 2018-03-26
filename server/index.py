# server
from flask import Flask, Response, jsonify, request

# import modules
import csv
import urllib.request

app = Flask(
  __name__,
  static_url_path='',
  static_folder='../client/dist',
  )

@app.route('/')
def loadHomePage():
  return app.send_static_file('index.html')

@app.route('/fetchStock', methods=['POST'])
def fetchStock():
  keyword = request.get_json()['query']
  print('keyword :', keyword)
  stocks = []
  counter = 0
  url = 'https://www.quandl.com/api/v3/datasets/EOD/%s.csv?api_key=zC992yeEkw5VTye5PFJY' % keyword
  response = urllib.request.urlopen(url)
  csv_file = response.read().decode('utf-8')
  responseReader = csv.reader(csv_file.split('\n'), delimiter=',')
  for row in responseReader:
    if counter == 0:
      counter+=1
      continue
    if counter < 91:
      stocks.append(row)
      counter+=1
  return jsonify(stocks)

if __name__ == '__main__':
  app.run(
    host='localhost',
    port=7777,
    )