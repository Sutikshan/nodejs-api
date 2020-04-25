# nodejs-api

Simple nodejs api

## Curent Test case coverage

\$ npx jest --coverage
PASS src/router.spec.js
PASS src/resources/products/findProductPopularity.spec.js

| File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ------------------------ | ------- | -------- | ------- | ------- | ----------------- |
| All files                | 97.71   | 88       | 100     | 97.64   |
| src                      | 100     | 100      | 100     | 100     |
| router.js                | 100     | 100      | 100     | 100     |
| src/externalApi          | 100     | 100      | 100     | 100     |
| apiUrlBuilder.js         | 100     | 100      | 100     | 100     |
| products.js              | 100     | 100      | 100     | 100     |
| shoppingHistory.js       | 100     | 100      | 100     | 100     |
| trolley.js               | 100     | 100      | 100     | 100     |
| wooliesApiPaths.js       | 100     | 100      | 100     | 100     |
| src/resources            | 100     | 100      | 100     | 100     |
| trolley.js               | 100     | 100      | 100     | 100     |
| user.js                  | 100     | 100      | 100     | 100     |
| src/resources/products   | 97.96   | 94.12    | 100     | 97.92   |
| findProductPopularity.js | 100     | 100      | 100     | 100     |
| index.js                 | 100     | 100      | 100     | 100     |
| productSortUtils.js      | 95      | 90.91    | 100     | 95      | 27                |
| sortParamEnum.js         | 100     | 100      | 100     | 100     |
| src/utils                | 93.1    | 75       | 100     | 92.31   |
| compareFunctions.js      | 90.48   | 75       | 100     | 89.47   | 16,31             |
| getEnvVar.js             | 100     | 100      | 100     | 100     |
| mapsort.js               | 100     | 100      | 100     | 100     |

Test Suites: 2 passed, 2 total
Tests: 9 passed, 9 total
Snapshots: 0 total
Time: 0.979s, estimated 1s
Ran all test suites.
