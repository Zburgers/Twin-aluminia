# twin_aluminai_flask_app.py

from flask import Flask, request, jsonify
import joblib
import pandas as pd
import os

# ------------------------------
# 0) Setup Flask app
# ------------------------------
app = Flask(_name_)

# ------------------------------
# 1) Load trained model
# ------------------------------
SAVE_DIR = "/mnt/data"
MODEL_FILE = os.path.join(SAVE_DIR, "twin_aluminai_model.joblib")

if not os.path.exists(MODEL_FILE):
    raise FileNotFoundError(f"Model not found at {MODEL_FILE}")

model = joblib.load(MODEL_FILE)
print("Model loaded successfully.")

# ------------------------------
# 2) Define prediction endpoint
# ------------------------------
@app.route("/predict", methods=["POST"])
def predict():
    """
    Expects a JSON payload like:
    {
        "age": 25,
        "experience_years": 2,
        "stress_level": 0.3,
        "time_pressure": 0.4,
        "task_complexity": 0.5,
        "resource_availability": 0.8,
        "risk_tolerance": 0.6,
        "collaboration_level": 0.9,
        "reliability_score": 0.7,
        "preference_score": 0.5,
        "scenario": "Scheduling",
        "region": "North"
    }
    """
    try:
        data = request.json
        if data is None:
            return jsonify({"error": "No JSON payload received"}), 400

        # Convert to DataFrame
        df = pd.DataFrame([data])

        # Make prediction
        pred = model.predict(df)[0]
        pred_prob = model.predict_proba(df)[0, 1]

        return jsonify({
            "predicted_decision": int(pred),
            "probability": float(pred_prob)
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ------------------------------
# 3) Health check endpoint
# ------------------------------
@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200

# ------------------------------
# 4) Run Flask app
# ------------------------------
if _name_ == "_main_":
    # Run on localhost:5000
    app.run(host="0.0.0.0", port=5000, debug=True)