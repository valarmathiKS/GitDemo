package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(
            plugin = {"pretty","html:target/cucumber"},
            features = {"/Users/valar/IdeaProjects/E2ECucumber/src/test/java/FeatureFile/HomePage.feature "},
            glue = {"StepDefinitions"}
            )
public class RunnerClass {
}
