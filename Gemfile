source "https://rubygems.org"

gem "jekyll", "~> 4.4"

# jekyll plugins
group :jekyll_plugins do
  gem "jekyll-last-modified-at" # used in sitemap
  gem "jekyll-minifier"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

platforms :mingw, :mswin, :x64_mingw do
  gem "wdm", ">= 0.2.0" # windows compatibility pack
end

gem "faraday"           # HTTP client (indirect dep for some plugins/APIs)
gem "webrick"           # needed for ruby > v3.0
