const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width: 1200, height: 720 });
	await page.goto("https://epivac.health.go.ug/dhis-web-commons/security/login.action", {
		waitUntil: "networkidle0",
	});

	await page.type("#j_username", "carapai");
	await page.type("#j_password", "Baby77@Baby771");

	await Promise.all([
		page.click("#submit"),
		page.waitForNavigation({ waitUntil: "networkidle0" }),
		page.goto(
			"https://epivac.health.go.ug/api/apps/dv-studio/index.html#/dashboards/zP7iRSFmSL0?edit=true&category=oNaC08wChzM&periods=LAST_12_MONTHS&organisations=akV6429SUqu&groups=&levels=3",
			{
				waitUntil: "networkidle0",
			},
		),
	]);
	try {
		await page.pdf({
			printBackground: true,
			// displayHeaderFooter: true,
			path: "webpage.pdf",
			format: "TABLOID",
			landscape: true,
			margin: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
			},
		});
	} catch (error) {
		console.log("error");
	}

	// // Set screen size
	// await page.setViewport({ width: 1080, height: 1024 });

	// // Type into search box
	// await page.type(".search-box__input", "automate beyond recorder");

	// // Wait and click on first result
	// const searchResultSelector = ".search-box__link";
	// await page.waitForSelector(searchResultSelector);
	// await page.click(searchResultSelector);

	// // Locate the full title with a unique string
	// const textSelector = await page.waitForSelector("text/Customize and automate");
	// const fullTitle = await textSelector.evaluate((el) => el.textContent);

	// // Print the full title
	// console.log('The title of this blog post is "%s".', fullTitle);

	await browser.close();
})();
