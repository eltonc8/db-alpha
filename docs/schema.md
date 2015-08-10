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
body        | string    |

## compnay_followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
company_id  | integer   | not null, foreign key (references companies)
