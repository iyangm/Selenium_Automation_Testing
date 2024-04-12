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
  "duration": 5392255900,
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
  "duration": 168743900,
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
  "duration": 3253693100,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.verifySalesPage()"
});
formatter.result({
  "duration": 35611700,
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
  "duration": 110849500,
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
  "duration": 99740400,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.clickCartBtn()"
});
formatter.result({
  "duration": 61652000,
  "status": "passed"
});
formatter.match({
  "location": "YourCartSteps.verifyCartPage()"
});
formatter.result({
  "duration": 23496200,
  "status": "passed"
});
formatter.match({
  "location": "YourCartSteps.removeTshirtRed()"
});
formatter.result({
  "duration": 37118600,
  "status": "passed"
});
formatter.match({
  "location": "YourCartSteps.btnCheckout()"
});
formatter.result({
  "duration": 44497900,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutInformationSteps.verifyInformationPage()"
});
formatter.result({
  "duration": 22228300,
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
  "duration": 199558500,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutInformationSteps.clickBtnContinue()"
});
formatter.result({
  "duration": 57185300,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutOverviewSteps.verifyOverviewPage()"
});
formatter.result({
  "duration": 21338300,
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
  "duration": 19385900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027summary_info_label summary_total_label\u0027]\"}\n  (Session info: chrome\u003d123.0.6312.106)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-FUGQNF4\u0027, ip: \u0027172.23.96.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_402\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c816b13852340caddf351ba717475b41, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027summary_info_label summary_total_label\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 123.0.6312.106, chrome: {chromedriverVersion: 123.0.6312.122 (31f8248cdd9..., userDataDir: C:\\Windows\\SystemTemp\\scope...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53942}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53942/devtoo..., se:cdpVersion: 123.0.6312.106, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c816b13852340caddf351ba717475b41\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat org.example.pageObject.CheckoutOverviewPage.verifyTotalPrice(CheckoutOverviewPage.java:27)\r\n\tat step_definitions.CheckoutOverviewSteps.verifyTotalPrice(CheckoutOverviewSteps.java:26)\r\n\tat ✽.And User done check the total price \"$8.63\"(features/Purchase.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckoutOverviewSteps.clickBtnFinish()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutCompleteSteps.verifyDoneOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 711210600,
  "status": "passed"
});
});