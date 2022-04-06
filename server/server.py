from flask import Flask, request,jsonify
from flask_restful import Resource, Api
from createEmbedding import createEmbedding



app = Flask(__name__)
api = Api(app)

class WordEmbedding(Resource):
    def get(self):
        corpus = createEmbedding()
        print(corpus)
        return "something here"

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

class Ping(Resource):
    def get(self):
        return jsonify(msg="server is alive", address=request.host)


api.add_resource(WordEmbedding, '/')
api.add_resource(HelloWorld, '/hello')
api.add_resource(Ping, '/ping')

if __name__ == '__main__':
    app.run(debug=True)

