- [Changelog](#changelog)
  - [2.0.0](#200)
  - [1.2.2](#122)
   

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0

- Compatilibity with opensilex 1.5.1

**New Features**

- Updated vocabulary

## 1.2.2

- Compatilibity with opensilex 1.3.3

**New Features**

- ✅ Added `vocabulary:hasGermplasm` label triplet to support multilingual representation:
  - English: `"Germplasm"`
  - French: `"Matériel génétique"`

```sparql
PREFIX vocabulary: <http://www.opensilex.org/vocabulary/oeso#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

INSERT DATA {
  GRAPH <https://sixtine.inrae.fr/ontology> {
    vocabulary:hasGermplasm rdfs:label "Germplasm" @en .
    vocabulary:hasGermplasm rdfs:label "Matériel génétique" @fr .
  }
}
``` 