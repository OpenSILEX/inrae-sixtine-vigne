# OpenSILEX 1.3.3 - Module 1.2.2

* Add hasgermplasm label triplet


```sparql
PREFIX vocabulary: <http://www.opensilex.org/vocabulary/oeso#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
insert data {
  graph  <https://sixtine.inrae.fr/ontology> {
    vocabulary:hasGermplasm  rdfs:label "Germplasm"@en
    vocabulary:hasGermplasm  rdfs:label "Matériel génétique"@fr
  }
}
```

 