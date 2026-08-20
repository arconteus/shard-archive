# Claim

## Definition

A Claim is the smallest unit of assertion whose meaning, provenance, context, or validity Shard Archive needs to manage independently. “Smallest” is pragmatic: split an assertion only when independent management adds value.

A Claim is not an atomic fact. It may express an assertion, rumor, hypothesis, belief, disputed statement, false statement, or inferred conclusion.

## Representation

Every Claim has a human-readable `statement`. It may additionally have optional `subject`, `predicate`, and `object` structure. Complex or n-ary statements, such as several people jointly founding an organization, may remain statement-only while referencing all mentioned Entities.

## Context

A Claim may reference perspective, validity time, assertion mode, and truth assessment. Assertion mode and truth assessment are separate provisional dimensions. Perspective does not determine truth, and publication time differs from Claim validity time.

Nested beliefs may remain one Claim unless managing their inner propositions independently is useful.

## Evidence, Attribution, and Derivation

Claims reference evidence from either a Fragment or directly from a Source when no Fragment exists. Initial evidence relations are supports, contradicts, and attributes.

“Someone asserted X” does not imply “X is true”; attribution and content can be separate Claims. An inferred Claim may depend on other Claims. AI-generated inferences remain proposals until accepted.

## Retcons and Graph Projection

Retcons preserve old Sources, Fragments, and Claims rather than destructively rewriting history. Current authorial interpretation may be represented through Claim metadata or policy without an Axiom primitive.

Only meaningfully structured Claims generate graph edges. Unstructured Claims remain first-class canonical knowledge.
