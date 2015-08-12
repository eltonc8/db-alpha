# Schema Information

## companies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
symbol      | string    | not null, (indexed)
name        | string    |
website     | string    |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
shared      | boolean   |
title       | string    | not null
body        | text      |

## post_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_id      | integer   | not null, foreign key (references tags)
post_id     | integer   | not null, foreign key (references posts)

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag         | string    | not null

## company_followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
company_id  | integer   | not null, foreign key (references companies)
