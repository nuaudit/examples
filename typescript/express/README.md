# Nuaudit Typescript Express Example

## Installation

`yarn install`

## Usage

1. Update the Nuaudit SDK configuration. Set `API_KEY`, `ORGANIZATION_ID` and `TRAIL`. These values can be obtained in the Nuaudit web console. 

```typescript
const nuaudit = new Nuaudit(
    "API_KEY_SECRET",
    "ORGANIZATION_ID",
    "TRAIL_ID"
)
```

2. Run the example:

`yarn start`

3. Make a PUT request to run the example

```bash
curl http://localhost:3000/item/1 \
    --request PUT \
    --data '{"name":"item","price":20}'
```
