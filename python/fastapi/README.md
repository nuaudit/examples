# Nuaudit FastAPI Example

## Installation

`pipenv install`

## Usage

1. Update the Nuaudit SDK configuration. Set `api_key`, `organization_id` and `trail_id`. These values can be obtained in the Nuaudit web console.

```python
nuaudit = Nuaudit(
    api_key="API_KEY_SECRET",
    organization_id="ORGANIZATION_ID",
    trail_id="TRAIL_ID"
)
```

2. Run the example:

`pipenv run uvicorn main:app --reload`

3. Use the FastAPI API Documentation page to submit a POST request. Access the documentation page at:

`http://localhost:8000/docs`

4. Use the Nuaudit console to verify the update.