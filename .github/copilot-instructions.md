# Copilot Coding Agent Instructions for facioquo.com

## Repository Overview

**FacioQuo.com** is the top-level website for the FacioQuo organization, a Jekyll-based static website hosted on Cloudflare Pages. This is a small, focused codebase (~1,200 lines total) that builds and deploys reliably.

### High-Level Details

- **Purpose**: Organizational website with landing page, privacy policy, and terms of service
- **Size**: Small repository (~20 files, 1,200 lines total)
- **Type**: Static website
- **Languages**: Jekyll (Ruby), HTML, SCSS, JavaScript
- **Framework**: Jekyll 4.4 with Ruby 3.3
- **Runtime**: Static files served via Cloudflare Pages
- **Build Time**: Very fast (~0.1 seconds)

## Build Instructions

### Prerequisites

- Ruby 3.3 (verified working version)
- Bundler 2.5+ (dependency management)

### Environment Setup

**ALWAYS run these commands in order for any development work:**

```bash
# 1. Install dependencies (ALWAYS run first)
bundle install

# 2. Verify installation worked
bundle list
```

### Core Development Commands

#### Build the Site

```bash
# Production build (most common)
bundle exec jekyll build

# Clean build (if issues arise)
rm -rf _site .jekyll-cache
bundle exec jekyll build
```

#### Local Development Server

```bash
# Start development server (port 4000)
bundle exec jekyll serve

# With live reload and auto-open browser
bundle exec jekyll serve -o -l
```

#### Verify Versions

```bash
# Check tool versions
ruby --version          # Should be 3.3.x
bundle --version        # Should be 2.5+
bundle exec jekyll --version  # Should be 4.4.x
```

### Build Validation

- **Build Output**: Generated files appear in `_site/` directory
- **Expected Files**: index.html, privacy.html, terms.html, 404.html, assets/, sitemap.xml
- **Build Time**: Should complete in under 1 second
- **No Errors**: Jekyll build should complete without warnings

### Common Issues and Solutions

- **Bundle install fails**: Ensure Ruby 3.3 is installed
- **Jekyll serve port conflict**: Use `bundle exec jekyll serve -P 4001` for alternate port
- **Stale cache issues**: Delete `.jekyll-cache` and `_site` directories

## Project Layout and Architecture

### Core Directory Structure

```text
/
├── _config.yml           # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── _layouts/            # HTML templates
│   └── base.html        # Main page template
├── _includes/           # Reusable components
│   ├── head.html        # HTML head section
│   ├── footer.html      # Site footer
│   ├── head-*.html      # CSS/JS includes
│   └── disqus_comments.html
├── _sass/               # SCSS stylesheets
│   ├── initialize.scss  # Main SCSS entry
│   ├── _base.scss       # Base styles
│   ├── _layout.scss     # Layout styles
│   └── _settings.scss   # Variables
├── pages/               # Main content pages
│   ├── home.html        # Homepage (permalink: /)
│   ├── privacy.md       # Privacy policy
│   ├── terms.md         # Terms of service
│   └── 404.html         # Error page
├── assets/              # Static assets
│   ├── css/style.scss   # CSS entry point
│   ├── icons/           # Favicon files
│   ├── logo.svg         # Site logo
│   └── social-banner.png
└── .github/workflows/   # CI/CD pipelines
```

### Key Configuration Files

- **_config.yml**: Jekyll settings, plugins, SEO configuration
- **Gemfile**: Ruby dependencies (Jekyll 4.4, plugins)
- **.editorconfig**: Code formatting rules (2-space indents)
- **.markdownlint.json**: Markdown linting rules
- **_headers**: Cloudflare Pages headers configuration

### Content Architecture

- **Homepage**: `/pages/home.html` → `/` (splash page with JavaScript navigation)
- **Static Pages**: Markdown files in `/pages/` with front matter
- **Layouts**: All pages use `layout: base` from `_layouts/base.html`
- **Styling**: SCSS files in `_sass/` compiled via `assets/css/style.scss`
- **Scripts**: Inline JavaScript in `_includes/head-home-script.html`

## Continuous Integration and Validation

### GitHub Actions Workflows

1. **deploy-website.yml** (Manual trigger only)
   - Builds Jekyll site for production/preview
   - Deploys to Cloudflare Pages
   - Uses Ruby 3.3, sets JEKYLL_ENV environment

2. **lint-pull-request.yml** (Automatic on PRs)
   - Validates PR titles follow conventional commits format
   - Examples: "feat: New feature", "fix: Bug fix", "docs: Documentation"
   - Subject must start with uppercase letter

3. **copilot-setup-steps.yml** (Setup validation)
   - Runs: bundle install → bundle exec jekyll build
   - Validates environment works correctly

### Pre-commit Validation Steps

Run these before committing changes:

```bash
# 1. Test clean build
rm -rf _site .jekyll-cache
bundle exec jekyll build

# 2. Test local serve
bundle exec jekyll serve
# Verify site loads at http://127.0.0.1:4000

# 3. Check for broken links (manual verification)
# Visit all pages: /, /privacy, /terms, /404
```

### PR Requirements

- **Title Format**: Must follow conventional commits (enforced by workflow)
- **Build Success**: Site must build without errors
- **No Breaking Changes**: Existing functionality must be preserved

## File Dependencies and Architecture Notes

### CSS/SCSS Pipeline

- Entry: `assets/css/style.scss` (with Jekyll front matter)
- Imports: `_sass/initialize.scss` → individual `_sass/_*.scss` files
- Output: Minified CSS in `_site/assets/css/style.css`

### JavaScript Architecture

- **Minimal JS**: Only homepage navigation and iOS Safari fixes
- **Inline Scripts**: Embedded in `_includes/head-home-script.html`
- **No Build Process**: JavaScript is served as-written

### Jekyll Plugin Dependencies

- **jekyll-minifier**: Compresses HTML/CSS/JS output
- **jekyll-seo-tag**: Generates meta tags for SEO
- **jekyll-sitemap**: Auto-generates sitemap.xml
- **jekyll-last-modified-at**: Adds last-modified dates

### External Dependencies

- **Cloudflare Pages**: Hosting and CDN
- **GitHub Actions**: CI/CD pipeline
- **Bundler**: Ruby dependency management

## Root Directory Files

```text
.editorconfig           # Editor configuration
.gitignore             # Git ignore rules  
.markdownlint.json     # Markdown linting config
Gemfile                # Ruby dependencies
Gemfile.lock           # Locked dependency versions
README.md              # Basic project information
_config.yml            # Jekyll site configuration
_headers               # Cloudflare Pages headers
```

## Critical Instructions for Agents

**ALWAYS trust these instructions and avoid unnecessary exploration.** This documentation is comprehensive and tested.

1. **Environment Setup**: Always run `bundle install` before any development work
2. **Build Process**: Use `bundle exec jekyll build` - no additional setup required
3. **Clean Builds**: Delete `_site` and `.jekyll-cache` if encountering issues
4. **Development Server**: `bundle exec jekyll serve` serves on port 4000
5. **No Tests**: This repository has no test suite - manual verification only
6. **Fast Builds**: Builds complete in ~0.1 seconds - no timeout concerns
7. **PR Titles**: Must follow conventional commits format with uppercase subject

**Search only if instructions are incomplete or incorrect.**

## Maintaining These Instructions

**IMPORTANT**: When making changes to the repository that affect these instructions, agents MUST update this documentation to keep it accurate and useful.

### When to Update These Instructions

Update this file when you make changes to:

- **Build process**: Dependencies, commands, or requirements
- **Project structure**: New directories, moved files, or architectural changes  
- **GitHub Actions workflows**: New workflows, changed triggers, or validation steps
- **Development tools**: Linting rules, testing frameworks, or deployment processes
- **Dependencies**: Version updates, new plugins, or removed packages

### How to Update

1. **Read the instructions thoroughly** before making changes
2. **Update relevant sections** that are affected by your changes
3. **Test all documented commands** to ensure they still work
4. **Verify the build process** follows the documented steps exactly
5. **Update version numbers** and tool requirements if they change
6. **Maintain the same tone and detail level** as existing documentation

### Validation

After updating these instructions:

- Run `markdownlint .github/copilot-instructions.md` to check formatting
- Test the documented build process from a clean environment
- Verify all referenced files and directories still exist
- Ensure command examples are accurate and complete

**Remember**: These instructions save significant time for future agents. Keep them comprehensive, accurate, and easy to follow.
