# Nuaudit Typescript React Example

## Installation

`yarn install`

## Usage

1. Update the Nuaudit SDK configuration. Set `API_KEY`, `ORGANIZATION_ID` and `TRAIL`. These values can be obtained in the Nuaudit web console. 

```typescript
// See WARNING below
const API_KEY = "API_KEY_SECRET";
const ORGANIZATION_ID = "ORGANIZATION_ID";
const TRAIL_ID = "TRAIL_ID";
```

**WARNING:** Embedding an API key directly in frontend code will allow users to view and copy the key from their browser. The API key should be provided to the browser via secure mechanism.

2. Run the example:

`yarn start`

3. Access the example at:

`http://localhost:3000`

4. This page will list out trail records.
