from flask import Blueprint, jsonify
from routes.transactions import transactions

dashboard_bp = Blueprint("dashboard", __name__)

@dashboard_bp.route("/dashboard/summary", methods=["GET"])
def get_summary():
    total_income = sum(t["amount"] for t in transactions if t["type"] == "income")
    total_expenses = sum(t["amount"] for t in transactions if t["type"] == "expense")

    return jsonify({
        "total_income": total_income,
        "total_expenses": total_expenses,
        "total_saved": total_income - total_expenses
    }), 200