package StepDefinitions;

import CommonSteps.WebConnector;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import static CommonSteps.WebConnector.driver;

public class LoginPAgeDefintions extends WebConnector {


    private String username = "//input[@type='email']";
    private String password = "//input[@type='password']";




    @When("I given my {string} in username")
    public void iGivenMyInUsername(String arg0) {
        driver.findElement(By.xpath(this.username)).sendKeys(new CharSequence[]{});


    }

    @And("I given my {string} in Password")
    public void iGivenMyInPassword(String arg0) {

    }

    @And("I click Login Button")
    public void iClickLoginButton() {

    }

    @Then("i Shoud see the {string}")
    public void iShoudSeeThe(String arg0) {
    }
}