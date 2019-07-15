$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/Users/valar/IdeaProjects/E2ECucumber/src/test/java/FeatureFile/HomePage.feature");
formatter.feature({
  "name": "Verify home page Title",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageDefinition.i_navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifi the Title of QaClick Academy",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I should see \"QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageDefinition.i_should_see(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Title of Page]\u003e but was:\u003c[QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat StepDefinitions.HomePageDefinition.i_should_see(HomePageDefinition.java:32)\n\tat ✽.I should see \"QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy\"(file:/Users/valar/IdeaProjects/E2ECucumber/src/test/java/FeatureFile/HomePage.feature:7)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageDefinition.i_navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify login link in Home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "i click the \"Login\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageDefinition.i_click_the_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page\"QaClickAcademy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageDefinition.iShouldSeePage(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Title of Page]\u003e but was:\u003c[QaClickAcademy]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat StepDefinitions.HomePageDefinition.iShouldSeePage(HomePageDefinition.java:44)\n\tat ✽.I should see page\"QaClickAcademy\"(file:/Users/valar/IdeaProjects/E2ECucumber/src/test/java/FeatureFile/HomePage.feature:12)\n",
  "status": "failed"
});
});