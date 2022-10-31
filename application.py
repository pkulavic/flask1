from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('parker'))

@app.route('/parker')
def parker():
    return home()


def home():
    return render_template("home.html")

