from flask import Flask
from flask_bcrypt import Bcrypt
from routes.transactions import transaction_bp
from routes.dashboard import dashboard_bp
from models import db
from routes.auth import auth
from routes.budgets import budget_bp

app = Flask(__name__)

# Database config
app.config["SECRET_KEY"] = "secret_key"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///budget.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize extensions
db.init_app(app)
bcrypt = Bcrypt(app)

# Register blueprints
app.register_blueprint(auth, url_prefix="/api")
app.register_blueprint(transaction_bp, url_prefix="/api")
app.register_blueprint(dashboard_bp, url_prefix="/api")
app.register_blueprint(budget_bp, url_prefix="/api")

# Create tables automatically
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)