import scrapy


class AlabamaSpider(scrapy.Spider):
    name = "alabama"
    start_urls = [
        'https://labor.alabama.gov/docs/dept_type.aspx?id=3',
    ]

    def parse(self, response):
        for a in response.css('a')[58:120]:
            if (a.css('a').extract()[0][3] == 'h'):
                yield{
                    'href' : "https://labor.alabama.gov" + a.css('a::attr(href)').extract_first(),
                    'text' : a.css('a::text').extract_first().replace('\t','').replace('\r', '').replace('\n', '')
                    #'hyplink' : a.css('a').extract()[0][:8] + "https://labor.alabama.gov" + a.css('a').extract()[0][9:-1]
                }