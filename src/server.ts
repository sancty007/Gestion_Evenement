import app from "./app";
import { testDatabaseConnection } from "./config/db";
import { config } from "./config/env";

const startServer = async () => {
  const isDbConnected = await testDatabaseConnection();

  if (isDbConnected) {
    app.listen(config.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${config.PORT}`);
      console.log(`Environment: ${config.NODE_ENV}`);
    });
  } else {
    console.error("Failed to start server due to database connection issues");
    process.exit(1);
  }
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
