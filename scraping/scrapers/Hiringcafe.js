const puppeteer = require("puppeteer");

async function scrapeFoundit() {
  const browser = await puppeteer.launch({
    headless: "new", // Change to false for debugging
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  );

  await page.goto("https://www.bayt.com/en/india/jobs/software-developer-jobs/", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector(".has-pointer-d");

  let prevCount = 0;

  while (true) {
    const jobCards = await page.$$(".has-pointer-d");

    if (jobCards.length > prevCount) {
      prevCount = jobCards.length;
    } else {
      break; // No new jobs appeared
    }

    const nextBtn = await page.$(".arrow-right");

    if (!nextBtn) break;

    const isDisabled = await page.evaluate((btn) => {
      return btn.classList.contains("disabled") || btn.getAttribute("disabled") !== null;
    }, nextBtn);

    if (isDisabled) break;

    await nextBtn.evaluate((btn) => btn.scrollIntoView());
    await nextBtn.click();
    await new Promise(resolve => setTimeout(resolve,3000))
  }

  const jobs = await page.evaluate(() => {
    const jobCards = document.querySelectorAll(".has-pointer-d");
    const jobData = [];

    jobCards.forEach((card) => {
      const title = card.querySelector(".jobTitle")?.innerText.trim() || "N/A";
      const company = card.querySelector(".companyName")?.innerText.trim() || "N/A";
      const location = card.querySelector(".location")?.innerText.trim() || "N/A";

      jobData.push({ title, company, location });
    });

    return jobData;
  });

  await browser.close();
  return jobs;
}

module.exports = scrapeFoundit;
