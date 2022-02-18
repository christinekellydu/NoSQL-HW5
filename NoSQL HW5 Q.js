Question 1.

MATCH (p:Person)-[rel:DIRECTED]->(m:Movie) RETURN distinct(p.name) as director
There are 28 unique directors in the dataset. 

MATCH (p:Person)-[rel:ACTED_IN]->(m:Movie) RETURN distinct(p.name) as actor
There are 102 unique actors in the dataset. 
