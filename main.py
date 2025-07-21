from flask import Flask, jsonify, render_template, request
import requests
import math
app=Flask("__name__")

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "GET":
        return render_template("index.html")

@app.route("/youtube", methods=["GET", "POST"])
def yt():
    if request.method == "FETCH":
        limit_urls_in_each_request = 4
        urls_json = {}
        all_urls = requests.get('https://raw.githubusercontent.com/hackesofice/Z/refs/heads/main/Acode-Browser-youtube/Usefull-Videos.txt')

        if all_urls.status_code == 200:
            urls_list = all_urls.splitLines()
            i = 0
            while i <= limit_urls_in_each_request:
                url = math.random(urls_list)
                urls_json.update(url)
            
            return urls_json
       
    elif request.method == "GET":
        return render_template("yt.html")
    
    else:
        print("! invalid request")
        return jsonify({"message":"!invalid request"}), 401












app.run()