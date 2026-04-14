require("dotenv").config();
const app = require("./src/app");
const prisma = require("./src/config/db");

const PORT = process.env.PORT || 5000;

// Check database connection on startup
(async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 CareSync backend running`);
      console.log(`📡 Listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    console.error(
      "DATABASE_URL is missing or incorrect. Please check your environment variables.",
    );
    process.exit(1);
  }
})();
