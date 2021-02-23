from flask import Flask, render_template, request, jsonify, Blueprint
import json
from flask.helpers import make_response
from flask.wrappers import Request

app = Flask(__name__)
app.config['SECRET_KEY'] = '#super_maks_johnson'

DEFAULT_LANG = 'ru'


@app.route('/forest')
def forest():
    params = {}
    return render_template('Forest.html', **params)


@app.route('/')
def index():
    params = {}
    return render_template('index.html', **params)


@app.route('/ocean')
def ocean():
    params = {}
    return render_template('Ocean.html', **params)


@app.route('/mountains')
def mountains():
    params = {}
    return render_template('Mountains.html', **params)


@app.route('/map')
def map():
    params = {}
    return render_template('map.html', **params)


def main():
    # app.run(port=1337, host="46.146.141.132")
    app.run(port=1337, host="0.0.0.0")
    # 46.146.186.210:1337


if __name__ == "__main__":
    main()
