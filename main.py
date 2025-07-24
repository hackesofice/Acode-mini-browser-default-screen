from flask import Flask, jsonify, render_template, request
import requests
import random
app=Flask("__name__")
@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "GET":
        return render_template("index.html")
    
@app.route("/youtube/get_video_link", methods=["GET"])
def fetch_videos():
    if request.method == "GET":
        all_urls = requests.get('https://raw.githubusercontent.com/hackesofice/Z/refs/heads/main/Acode-Browser-youtube/Usefull-Videos.txt')
        if all_urls.status_code == 200:
            urls_list = all_urls.text.splitlines()
            random_url = random.choice(urls_list).split("/")[-1]
            # print(random_url)
            # url_code = random_url.split("/")[-1]
            # print(url_code)
            return jsonify({"uri": random_url}), 200
            
    else:
        return jsonify({"message":"method isnt allowed"}), 405




@app.route("/youtube", methods=["GET"])
def yt():   
    if request.method == "GET":
        return render_template("yt.html")
    else:
        print("! invalid request")
        return jsonify({"message":"! method is not allowed"}), 405
    
app.run(host="0.0.0.0")
