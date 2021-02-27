from flask import Flask, render_template, request, jsonify, Blueprint
import json
from flask.helpers import make_response
from flask.wrappers import Request

app = Flask(__name__)
app.config['SECRET_KEY'] = '#super_maks_johnson'

CLIENT_LANG = 'ru'

@app.route('/change_language', methods=['POST'])
def change_language():
    global CLIENT_LANG
    data = json.loads(request.form['data'])
    CLIENT_LANG = data
    return 'Data received', 200


@app.route('/forest')
def forest():
    params = {}
    return render_template('Forest.html', **params)


@app.route('/')
def index():
    params = {}
    if CLIENT_LANG == 'ru':
        return render_template('ru/index.html', **params)
    else:
        return render_template('en/index.html', **params)

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
    if CLIENT_LANG == 'ru':
        return render_template('ru/map.html', **params)
    else:
        return render_template('en/map.html', **params)


def main():
    # app.run(port=1337, host="46.146.141.132")
    app.run(port=1337, host="0.0.0.0")
    # 46.146.186.210:1337


if __name__ == "__main__":
    main()
