# Graph Projection and Relationships

## Status

This document supersedes the earlier model of Relationship as a canonical domain object. It remains at the established path so existing references lead to the current decision.

## Definition

A semantic relationship is represented canonically by a Claim. When that Claim has meaningful subject, predicate, and object structure, the graph projection may render a directed edge.

```text
Claim: "Hannah was born on Mars."
subject: Hannah
predicate: born_in
object: Mars

Hannah --born_in--> Mars
```

The graph edge is not a second canonical record. Its statement, evidence, perspective, temporal scope, and epistemic context remain on the Claim.

## Limits

Not every Claim generates an edge. N-ary, nested, nuanced, or otherwise complex Claims may lose meaning when forced into triples. The graph is intentionally a partial projection of the complete archive.

Graph projections are derived and rebuildable. Filtering, layouts, inverse display, weights, and visualization metadata may exist as derived or UI state without becoming canonical knowledge.

## AI

AI may suggest candidate Claims or structured representations. It does not create a canonical Relationship or graph edge independently; accepted Claims determine the projection.
