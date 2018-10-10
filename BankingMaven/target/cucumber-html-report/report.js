$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Banking.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Raghu"
    }
  ],
  "line": 3,
  "name": "Primus Bank Features",
  "description": "",
  "id": "primus-bank-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@PrimusBankFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Create a Branch with Data",
  "description": "",
  "id": "primus-bank-features;create-a-branch-with-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@CreateBranchTC2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Admin logs in to Primus Bank Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Click on Branches button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Click on New Branch button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Branch Details as \"\u003cbranchName\u003e\",\"\u003cAdd1\u003e\",\"\u003cAdd2\u003e\",\"\u003cArea\u003e\",\"\u003cZipocde\u003e\",\"\u003cCountry\u003e\",\"\u003cState\u003e\",\"\u003cCity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "primus-bank-features;create-a-branch-with-data;",
  "rows": [
    {
      "cells": [
        "branchName",
        "Add1",
        "Add2",
        "Area",
        "Zipocde",
        "Country",
        "State",
        "City"
      ],
      "line": 24,
      "id": "primus-bank-features;create-a-branch-with-data;;1"
    },
    {
      "cells": [
        "ICICIBank",
        "Ameerpet",
        "SrNagar",
        "54361",
        "INDIA",
        "GOA",
        "GOA"
      ],
      "line": 25,
      "id": "primus-bank-features;create-a-branch-with-data;;2"
    }
  ],
  "keyword": "Examples"
});
});