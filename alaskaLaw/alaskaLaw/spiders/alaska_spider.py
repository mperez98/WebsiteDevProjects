import scrapy

class AlaskaSpider(scrapy.Spider):
	"""docstring for AlaskaSpider"""
	
	name = "alaska"

	def start_requests(self):
		urls = ["http://www.touchngo.com/lglcntr/akstats/Statutes/Title23/Chapter30.htm"]

		for url in urls:
			yield scrapy.Request(url=url, callback=self.parse)

	def parse(self, response):
		for dt in response.css('dt'):
			if (dt.css("a").extract_first()[9] != "h"):
				yield {
					'href' : "http://www.touchngo.com/lglcntr/akstats" + dt.css('a::attr(href)').extract_first()[5:],
					'text' : dt.css('a::text').extract_first(),  
					'description' : dt.css('dt::text').extract_first().strip().replace('\n', '').replace('.', '').lstrip(),  
					#'hyplink' : dt.xpath('//a/@href').extract()
					#'hyplk1' : dt.css("a").extract_first()[:9].replace('\', '') + "http://www.touchngo.com/lglcntr/akstats" + dt.css("a").extract_first()[14:].strip('\n'),
				}
