from datetime import datetime

from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/super_super_date')
def time():
    return jsonify({'oraora_time': datetime.now().isoformat()})

if __name__ == '__main__':
    app.run(debug=True)

