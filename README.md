BOOKSHELF BUILDER:

APP DESCRIPTION:

Bookshelf Builder is a tool for people to organize and share their favorite books with people. Utilizing a React Frontend and Rails backend with redux to manage global state and react router to facilitate client-side routing. The app includes full CRUD and is hosted via heroku (site link)

BACKEND ARCHITECTURE:

Backend:
- 3 models (User, Book, List) with 2 join tables (userbooks & booklists) to create two many-to-many relationships for user/book and book/list


FRONTEND ARCHITECTURE:

Component Hierarchy:
- App
  - NavBar
  - Login
    - LoginForm
    - SignupForm
  - Home
    - BooksContainer
      - BookCard
    - ListsContainer
      - ListCard
  - ManageBooks
    - NewBookForm
    - BooksContainer
  - ExploreLists
    - NewListForm
    - ListsContainer
  - MyProfile

Frontend User Experience:

As a user I can:
- Add a book to My Books
- Edit the description of one of My Books
- Delete a book from My Books

- See lists created by all users
- Create a new List
- Add books from My Books to any list
- Add books from lists to My Books (books in lists can be posted by any user)

