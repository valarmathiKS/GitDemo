package StepDefinitions;

import CommonSteps.WebConnector;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.sql.Time;

import static CommonSteps.WebConnector.baseurl;
import static CommonSteps.WebConnector.driver;
import static org.junit.Assert.assertEquals;

public class HomePageDefinition extends WebConnector {
    WebDriver driver = new ChromeDriver();
    @Given("I navigate to home page")
    public void i_navigate_to_home_page() throws InterruptedException {
        driver.get(baseurl);
       Thread.sleep(3000);

    }

    @Then("I should see {string}")
    public void i_should_see(String string) {
        String actualTitle = driver.getTitle();
        String expectedTitle = "Title of Page";
        Assert.assertEquals(expectedTitle,actualTitle);
    }

    @When("i click the {string} link")
    public void i_click_the_link(String link) {
        driver.findElement(By.partialLinkText(link)).click();
    }

    @Then("I should see page{string}")
    public void iShouldSeePage(String arg0) {
        String actualTitle = driver.getTitle();
        String expectedTitle = "Title of Page";
        Assert.assertEquals(expectedTitle,actualTitle);
    }
}
