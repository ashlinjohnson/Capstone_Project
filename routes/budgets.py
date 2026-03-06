from flask import Blueprint, request, jsonify
from models import db, Budget
from datetime import datetime

budget_bp = Blueprint("budgets", __name__)

@budget_bp.route("/budgets", methods=["POST"])
def create_budget():
    data = request.get_json()

    new_budget = Budget(
        category=data["category"],
        amount=data["amount"],
        month=data["month"],
        year=data["year"],
        user_id=1  # replace later with logged-in user
    )

    db.session.add(new_budget)
    db.session.commit()

    return jsonify({"message": "Budget created"}), 201

@budget_bp.route("/budgets", methods=["GET"])
def get_budgets():
    budgets = Budget.query.filter_by(user_id=1).all()

    results = []
    for b in budgets:
        results.append({
            "id": b.id,
            "category": b.category,
            "amount": b.amount,
            "month": b.month,
            "year": b.year
        })

    return jsonify(results)

@budget_bp.route("/budgets/<int:id>", methods=["PUT"])
def update_budget(id):
    budget = Budget.query.get_or_404(id)

    data = request.get_json()
    budget.amount = data.get("amount", budget.amount)

    db.session.commit()

    return jsonify({"message": "Budget updated"})

@budget_bp.route("/budgets/<int:id>", methods=["DELETE"])
def delete_budget(id):
    budget = Budget.query.get_or_404(id)

    db.session.delete(budget)
    db.session.commit()

    return jsonify({"message": "Budget deleted"})