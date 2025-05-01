const scrapeHiringCafe = require('./scrapers/Hiringcafe'); 
const saveToFile = require('./utils/savetoFile');

(async () => {
  try {
    console.log("🔍 Scraping Hiring Cafe...");
    const jobs = await scrapeHiringCafe();
    console.log(`✅ Scraped ${jobs.length} jobs.`);
    saveToFile("hiring-cafe-jobs.json", jobs);
  } catch (error) {
    console.error("❌ Error while scraping:", error.message);
  }
})();
