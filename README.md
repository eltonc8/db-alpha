# db-Alpha [Dashboard Alpha]

Dashboard Alpha - an investment tool to help everyone be a better investor
- [Live Site](http://dbalpha.herokuapp.com)

### About
Dashboard Alpha is an investment tool partially inspired by seekingAlpha.com. It is a tool that aims to help everyone be a better investor by conveniently aggregating data and news of a company into one dashboard page.
As emotions can be one of the biggest challenge to an investor (selling into panic, then buying into euphoria, for example), a process that can help an investor make better decision is journaling or writing down ideas. Dashboard alpha provides that tool to write down company or idea specific notes.

#### MarketBoard
![MarketBoard](https://raw.githubusercontent.com/eltonc88/db-Alpha/master/docs/img/nasdaq_100_board.png)
The Market Board, modeled after the Nasdaq Board, is an convenient way to navigate to different companies' or securities' pages. It also shows the most recent price movements and today's changes. Boards include the Dow Jones Industrial Average, the NASDAQ-100, S&P 500 and S&P 500 sectors (as used by the SPDR Sector Select ETFs).
This board makes the day's changes and the most recent live changes visual in a striking manner. It is an application of the idea that we can perceive more information by making data so noticeable and accessible that it becomes part of our ambience. In turn, this may help us think more analytically when we then look into the details.

The Market Board features automatic resizing to best present the large volume of data. Rows divide the displays into horizontal sections. The Board distribute the tickers to each row to make the widest, fitting rectangle. If that is not possible, then the board uses the fewest rows. If the window cannot accomodate the number of tickers, then each of these rows has a marquee feature that rotates new tickers into the view. Each row will halt if a mouse hovers over it. The marquee features are staggered with different periods for a more visually appealing transition.

#### Securities Dashboard
The Securities Dashboard gathers the most recent news. It also acts as a portal with links to companies' website, SEC filings, etc.
The entries and notes-making tool is also located on this page.

#### Investor's Dashboard
This page is meant to be a quieter page - a page that shows all of the investor's notes. Here, an investor can gather her thoughts and see all the thoughts that she wrote. Display of private content on this page (and any articles/posts-related section of securities page) requires login. Otherwise, only content marked public will be displayed.
