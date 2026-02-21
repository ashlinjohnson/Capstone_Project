from flask import Flask
from flask_cors import CORS

# Create Flask application instance
app = Flask(__name__)

# Enable CORS (frontend can communicate to backend)
CORS(app)


# Define route for root URL "/"
@app.route("/")

# Return JSON response confirming backend is running
def home():
    return {"message": "Backend running"}

if __name__ == "__main__":
    app.run(debug=True)