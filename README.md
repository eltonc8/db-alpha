# db-Alpha

[Heroku link][heroku]

[heroku]: http://pending.herokuapp.com

## Minimum Viable Product
db-Alpha is a clone of SeekingAlpha built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Visit company "dashboard" - with links to company info, news, twitter feed
- [x] Create remarks or "blog-like" articles about companies (public or private)
- [x] View companies and posts
- [ ] Have homepage with feeds of followed companies (show others' notes)
- [ ] Tag posts
- [ ] Search for notes/blogs by companies

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (<1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to login / logout.
This will be the basis for private or public posts in the future. I will also
make a landing page.

[Details][phase-one]

### Phase 2: Company Dashboards (~1.5 days)
I will add API routes to serve company-oriented dashboards. These will have the
following:
* 1) information about
* 2) RSS feed to two or three websites.
* 3) Twitter feed.
* 4) an area for notes (next phase)

[Details][phase-two]

### Phase 3: Editing and Displaying Posts (~2 days)
I plan to use third-party libraries to add functionality to the `PostForm` and
`PostShow` views in this phase. First I'll need to add a Markdown editor to the
`PostForm`, and make sure that the Markdown is properly escaped and formatted.
Posts are linked to companies through taggings.
the `PostShow` view. I also plan to integrate Filepicker for file upload so
users can add images to blog posts.

[Details][phase-three]

### Phase 4: User Feeds (~1-2 days)
User view is analogous to company view's post, but shows all of the user's own post across all companies. Also, add a section for the feed of companies or other users.

[Details][phase-four]

### Phase 5: Searching for Blogs and Posts (~2 days)
I'll need to add `search` routes to both the Company and Posts controllers. Users should be able to search for its own posts, posts on a company. On the
Backbone side, there will be a `SearchResults` composite view has `BlogsIndex`

[Details][phase-five]

### Bonus Features (TBD)
- [ ] RSS or news feed, sentiment indicators
- [ ] Groups or clubs
- [ ] Discussions within Groups
- [ ] Polling within groups
- [ ] Followed Users
- [ ] Pagination/infinite scroll
- [ ] Multiple sessions/session management
- [ ] User avatars

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
