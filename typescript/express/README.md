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

3. Access the example at:

`http://localhost:3000`

4. This page will list out trail records.
