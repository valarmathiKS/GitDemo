package CommonSteps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserControl extends WebConnector {
    @Before
    public void openBrowser() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }

    @After
    public void closeBrowser() {
        driver.close();
    }
}
