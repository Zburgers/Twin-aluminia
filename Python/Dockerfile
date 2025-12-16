FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

# We need to ensure the model path exists or is mounted, but for now just run the app.
# The app expects model at /mnt/data/twin_aluminai_model.joblib
# We will likely need to mount a volume in docker-compose for this.

CMD ["python", "app.py"]
