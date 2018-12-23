import org.riversun.jmws.WebServer;

public class DevServer {

	public static void main(String[] args) {
		String dir = System.getProperty("user.dir");
		WebServer webServer = new WebServer(80);
		webServer.addDirectory("/", dir + "/src/main");
		webServer.startServer();
	}

}
