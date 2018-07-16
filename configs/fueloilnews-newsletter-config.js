exports.config = {
	view:   "./views/fueloilnews-newsletter.ejs",
	output: "./output/fueloilnews-newsletter.html",
	links: [
		"https://fueloilnews.com/category/featured-articles/?feed=xtxml",
		"https://fueloilnews.com/category/daily-news/?feed=xtxml",
		"https://fueloilnews.com/category/product-news/?feed=xtxml"
	],
	names: [
		"deliverable-fuel-news",
		"industry-news",
		"product-news",
        "press-releases"
	]
}
