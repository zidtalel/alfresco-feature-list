package utils;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.markuputils.CodeLanguage;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.util.Locale;

public class ExtentManager {

    private static ExtentReports extent;

    public static ExtentReports getExtentReports() {
        if (extent == null) {

            // ---------------------------
            // 1. Initialisation du rapport
            // ---------------------------
            String reportPath = System.getProperty("user.dir") + "/reports/ExtentReport.html";
            ExtentSparkReporter spark = new ExtentSparkReporter(reportPath);

            // Thème + titres
            //spark.config().setTheme(Theme.DARK); Si vous préférez le mode Dark
            spark.config().setTheme(Theme.STANDARD); //Si vous préférez le mode light
            spark.config().setReportName("Test Execution Report");
            spark.config().setDocumentTitle("Automation Report");

            // CSS personnalisé (optionnel)
            spark.config().setCss(".badge-primary { background-color: #0066ff; }");

            // JS personnalisé (optionnel)
            spark.config().setJs("console.log('Extent Report Loaded');");

            extent = new ExtentReports();
            extent.attachReporter(spark);

            // ---------------------------
            // 2. Informations système
            //----------------------------
            extent.setSystemInfo("OS", System.getProperty("os.name"));
            extent.setSystemInfo("OS Version", System.getProperty("os.version"));
            extent.setSystemInfo("Architecture", System.getProperty("os.arch"));
            extent.setSystemInfo("User", System.getProperty("user.name"));

            // Java
            extent.setSystemInfo("Java Version", System.getProperty("java.version"));
            extent.setSystemInfo("Java Vendor", System.getProperty("java.vendor"));
            extent.setSystemInfo("Java Home", System.getProperty("java.home"));

            // Répertoires et locale
            extent.setSystemInfo("Project Directory", System.getProperty("user.dir"));
            extent.setSystemInfo("Working Directory", System.getProperty("user.dir"));
            extent.setSystemInfo("File Encoding", System.getProperty("file.encoding"));
            extent.setSystemInfo("Default Locale", Locale.getDefault().toString());

            // CPU / RAM
            Runtime runtime = Runtime.getRuntime();
            extent.setSystemInfo("Available Processors", String.valueOf(runtime.availableProcessors()));
            extent.setSystemInfo("Max Memory (MB)", String.valueOf(runtime.maxMemory() / (1024 * 1024)));
            extent.setSystemInfo("Total Memory (MB)", String.valueOf(runtime.totalMemory() / (1024 * 1024)));
            extent.setSystemInfo("Free Memory (MB)", String.valueOf(runtime.freeMemory() / (1024 * 1024)));

            // Versions des outils
            extent.setSystemInfo("JUnit Version", getJUnitVersion());
            extent.setSystemInfo("ExtentReports Version",
                    ExtentReports.class.getPackage().getImplementationVersion());

            // IDE
            extent.setSystemInfo("IDE", "IntelliJ IDEA (Community/Ultimate)");

            // Maven
            if (System.getenv("M2_HOME") != null) {
                extent.setSystemInfo("Maven Home", System.getenv("M2_HOME"));
            }

            // Git
            extent.setSystemInfo("Git Branch", getGitBranch());
            extent.setSystemInfo("Project Directory", System.getProperty("user.dir"));
            extent.setSystemInfo("Default Locale", Locale.getDefault().toString());
        }

        return extent;
    }

    // ---------------------------------------------
    // Récupérer version JUnit
    // ---------------------------------------------
    private static String getJUnitVersion() {
        try {
            Package pkg = org.junit.jupiter.api.Test.class.getPackage();
            return pkg != null ? pkg.getImplementationVersion() : "Unknown";
        } catch (Exception e) {
            return "Unknown";
        }
    }

    // ---------------------------------------------
    // Récupérer branche Git
    // ---------------------------------------------
    private static String getGitBranch() {
        try {
            Process process = Runtime.getRuntime().exec("git rev-parse --abbrev-ref HEAD");
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            return reader.readLine();
        } catch (Exception e) {
            return "Unavailable";
        }
    }

    // ---------------------------------------------
    // Méthodes utilitaires pour enrichir les tests
    // ---------------------------------------------

    /** Ajouter catégories / auteurs / device dans un test */
    public static void enrichTestMetadata(ExtentTest test, String[] categories, String[] authors, String[] devices) {
        if (categories != null) for (String c : categories) test.assignCategory(c);
        if (authors != null) for (String a : authors) test.assignAuthor(a);
        if (devices != null) for (String d : devices) test.assignDevice(d);
    }

    /** Ajouter un bloc JSON formaté */
    public static void addJsonBlock(ExtentTest test, String json) {
        test.info(MarkupHelper.createCodeBlock(json, CodeLanguage.JSON));
    }

    /** Ajouter un tableau */
    public static void addTable(ExtentTest test, String[][] data) {
        test.info(MarkupHelper.createTable(data));
    }

    /** Ajouter un screenshot (automatique : crée le dossier si manquant) */
    public static void addScreenshot(ExtentTest test, String path) {
        try {
            File f = new File(path);
            f.getParentFile().mkdirs();
            test.addScreenCaptureFromPath(path);
        } catch (Exception e) {
            test.warning("Impossible d'ajouter le screenshot : " + e.getMessage());
        }
    }
}
