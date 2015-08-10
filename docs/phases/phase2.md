# Phase 2: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::CompaniesController (create, index, show)

### Views
* blogs/show.json.jbuilder

## Backbone
### Models
* Company (parse RSS feed)
* RSS news

### Collections
* Company collection (for display on index)
* RSS news collection

### Views
* CompanyShow (composite view, contains the following)
* CompanyInfo (details about company, plus links to SEC filings, etc.)
* RSSView (bloomberg, yahoo finance, seekingalpha)
* Blog area (to be populated)

## Gems/Libraries
