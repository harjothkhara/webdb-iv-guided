
## A good data model 
what you design, where the schema for the db is going to come from, where you decide which tables you want to create, which attributes you want to save to those tables. your data model should reflect exactly the reality of the system is
- captures all the data the system needs
- captures only the data the system needs
- reflects reality
- is flexible, can evolve with the system
- guarantee data integrity
- is driven by the way the data will be used

## Components

- entities === resources -> tables
- attributes -> columns
- relationships === sub-routes (/recipes:id/ingredients) -> Foreign Keys

## Workflow

- identify entities -> squares on paper
- identify relationships -> lines joining the squares
- identify attributes -> bulleted lists

## Tracks

-id, primary key, integer, auto-increment
- name, string(128), unique, required

## Relationships

- one to one -> one to zero or one
- one to many <- most common one
- many to many (smoke and mirrors, an illusion) <- a third table

## Mantras

- for a many to many we need: a third table
- the most important tools for data modeling: ears and pen and paper
- one to many relationships translate to: Foreign Keys
- where does the Foreign Key go? : on the many side

## Model Slack

- a user can be in several channels
- a channel can have several participants