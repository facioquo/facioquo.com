source "https://rubygems.org"

gem "jekyll", "~> 4.4"

# jekyll plugins
group :jekyll_plugins do
  gem "jekyll-minifier"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-last-modified-at" # used in sitemap
end

platforms :mingw, :mswin, :x64_mingw do
  gem "wdm", ">= 0.2.0" # windows compatibility pack
end

gem "webrick"           # needed for ruby > v3.0
gem "faraday"           # reload/retry on file changes
