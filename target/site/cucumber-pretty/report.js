$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Purchase.feature");
formatter.feature({
  "line": 3,
  "name": "Purchase",
  "description": "As a user I want to checkout product on sauce demo website",
  "id": "purchase",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Purchase"
    }
  ]
});
formatter.before({
  "duration": 25707622787,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "End to End Checkout Product",
  "description": "",
  "id": "purchase;end-to-end-checkout-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User already on sauce demo website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User already on sales page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User sort the product list by \"Name (Z to A)\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User add \"Sauce Labs Onesie\" and \"Test.allTheThings() T-Shirt (Red)\" to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click cart button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User already on your cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User remove item Tshirt Red",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User click checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User already on checkout information page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User input \"Iyang\" as firstName, input \"Mulyana\" as lastName and input \"12345\" as zipCode",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User already on checkout overview page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User done check the total price \"$8.63\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click the finish button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User already completed checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 5194632941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 3217225633,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.verifySalesPage()"
});
formatter.result({
  "duration": 738546626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 31
    }
  ],
  "location": "SalesSteps.sortProduct(String)"
});
formatter.result({
  "duration": 1182184844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 10
    },
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 34
    }
  ],
  "location": "SalesSteps.clickProduct(String,String)"
});
formatter.result({
  "duration": 730340449,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.clickCartBtn()"
});
formatter.result({
  "duration": 381936325,
  "status": "passed"
});
formatter.match({
  "location": "YourCartSteps.verifyCartPage()"
});
formatter.result({
  "duration": 130056082,
  "status": "passed"
});
formatter.match({
  "location": "YourCartSteps.removeTshirtRed()"
});
formatter.result({
  "duration": 474398846,
  "status": "passed"
});
formatter.match({
  "location": "YourCartSteps.btnCheckout()"
});
formatter.result({
  "duration": 253132648,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutInformationSteps.verifyInformationPage()"
});
formatter.result({
  "duration": 305253678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iyang",
      "offset": 12
    },
    {
      "val": "Mulyana",
      "offset": 40
    },
    {
      "val": "12345",
      "offset": 72
    }
  ],
  "location": "CheckoutInformationSteps.inputDataPersonal(String,String,String)"
});
formatter.result({
  "duration": 1370577166,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutInformationSteps.clickBtnContinue()"
});
formatter.result({
  "duration": 409427767,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutOverviewSteps.verifyOverviewPage()"
});
formatter.result({
  "duration": 305888640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$8.63",
      "offset": 33
    }
  ],
  "location": "CheckoutOverviewSteps.verifyTotalPrice(String)"
});
formatter.result({
  "duration": 181880382,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutOverviewSteps.clickBtnFinish()"
});
formatter.result({
  "duration": 372421345,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutCompleteSteps.verifyDoneOrder()"
});
formatter.result({
  "duration": 236457382,
  "status": "passed"
});
formatter.after({
  "duration": 526361099,
  "status": "passed"
});
});