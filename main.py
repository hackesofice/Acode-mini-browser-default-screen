from flask import Flask, jsonify, render_template, request
app=Flask("__name__")
@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "GET":
        return render_template("index.html")
app.run()