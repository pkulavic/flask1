from flask import Flask, redirect, url_for, render_template
from engine import SudokuBoard

app = Flask(__name__)

UNDER_DEVELOPMENT: bool = True

@app.route('/')
def index():
    if UNDER_DEVELOPMENT:
        return dev()
    else:
        return redirect(url_for('parker'))

def dev():
    return render_template('coming-soon.jinja')

@app.route('/parker')
def parker():
    return home()

@app.route('/parker/official')
def parker_official():
    return home()

def home():
    return render_template("home.jinja")

@app.route('/parker/sudoku')
def parker_sudoku():
    return sudoku()

def sudoku(difficulty="hard"):
    b = SudokuBoard()
    b.fill_puzzle()
    if difficulty == "easy":
        b.remove_clues(50)
    elif difficulty == "hard":
        b.remove_clues(62)
    return render_template("sudoku.jinja", game=b, difficulty=difficulty)

@app.route('/parker/sudoku/hard')
def sudoku_hard():
    return redirect(url_for('parker_sudoku'))

@app.route('/parker/sudoku/easy')
def sudoku_easy():
    return sudoku(difficulty="easy")
