from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/Analise', methods=['POST'])
def analise_de_texto():
    dados = request.get_json()
    print(dados)
    text = dados.get('frase', '')
    blob = TextBlob(text)
    analise = blob.sentiment.polarity

    sentimento = "Positivo" if analise > 0 else "Negativo"

    return jsonify({"sentimento": sentimento, "score": analise})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    