# Book_Author_Tracker

Backend Tasks

Create  backend applications as per instruction provided below.
We are developing a small application which keeps track of books and its author. Single
author can publish multiple books. You need to create the following endpoints.
1. POST: /author
a. Body:
i. Name: string -> Unique

2. POST: /book
a. Body:
i. authorId: number | string
ii. bookName: string
iii. ISBN: string -> Unique

3. GET: /author
a. Returns list of all authors
4. GET: /book
a. Returns list of all books
5. GET: /author/:id
a. Returns single author and his all books
6. GET: /book/:id
a. Returns single book and his author
7. PATCH: /author/:id
a. Body:
i. Name: string -> Unique

8. PATCH: /book/:id
a. Body: Same Body as POST request
9. DELETE: /author/:id
10. DELETE: /book/:id
Additional Requirements:
1. Log the user request in file
2. Generate unique ids for each entry for author and book.
3. AuthorName and ISBN are unique.
4. Don’t create any database. Store all data in nodejs variable.
