#PopcornPlz Log

Thursday, November 4, 2021
I made a lot of progress on this project today. My programming is definitely a little rusty.

## Achievements
- Searching movies works! You can enter a movie title into the search bar on the homepage and a list of related movies will show up.
- EJS templates are running smoothly.
- This was unintentional, but the back button works nicely to take you back to the homepage for a clean search.

## Challenges

- When I made HTTP requests to the TMDb API, I would get a JSON error. Essentially, the JSON string would just randomly end, and I couldn't parse the whole thing. Luckily, I found a solution on Stack Overflow that helped solve the issue.

- I struggled to get the titles to appear on my EJS template for the search results. This took some reorganizing of my `res.render()` calls.

As of today, we can search the database by movie title, but that's all that comes up. The next step would be to populate not only the titles, but also each search result's movie poster, director, and year of release. Then, I'll need to package each film's info into separate containers for a clean display on the page.

## Future features
- [ ] Showing which streaming service a movie is on at the time (look into Just Watch's API).
- [ ] Adding a "Add to List" button in each search result's container.
- [ ] Adding a search bar to every page.

That's all, folks.
